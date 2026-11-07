import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header.jsx';
import TodayScheduleCard from './components/TodayScheduleCard.jsx';
import SchedulePlanner from './components/SchedulePlanner.jsx';
import ModuleMatrix from './components/ModuleMatrix.jsx';
import ModuleReaderModal from './components/ModuleReaderModal.jsx';
import FormulaSheetModal from './components/FormulaSheetModal.jsx';
import CourseSelectorModal from './components/CourseSelectorModal.jsx';
import EvsMCQPractice from './components/EvsMCQPractice.jsx';

import { 
  allCourses, 
  courseMap, 
  generateAdaptiveSchedule,
  resolveCourseAndModule 
} from './data/courses/index.js';
import { officialFatRoadmap } from './data/courses/fatSchedulePreset.js';

export default function App() {
  // State with LocalStorage Persistence
  const [selectedExam, setSelectedExam] = useState(() => {
    return localStorage.getItem('fatkilla_exam') || 'fat';
  });

  const [daysLeft, setDaysLeft] = useState(() => {
    return parseInt(localStorage.getItem('fatkilla_days') || '7', 10);
  });

  const [selectedCourseIds, setSelectedCourseIds] = useState(() => {
    const saved = localStorage.getItem('fatkilla_courses_v4');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const valid = parsed.filter(id => allCourses.some(c => c.id === id));
        if (valid.length > 0) return valid;
      } catch (e) {}
    }
    return allCourses.map(c => c.id);
  });

  const [moduleStatuses, setModuleStatuses] = useState(() => {
    const saved = localStorage.getItem('fatkilla_statuses_v4');
    const initial = {};
    allCourses.forEach(c => {
      c.modules.forEach(m => {
        initial[m.id] = m.status || 'yet_to_start';
      });
    });
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...initial, ...parsed };
      } catch (e) {}
    }
    return initial;
  });

  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('fatkilla_completed_tasks_v4');
    return saved ? JSON.parse(saved) : {};
  });

  // User-Created Study Checklist State (Persisted in localStorage)
  const [customChecklist, setCustomChecklist] = useState(() => {
    const saved = localStorage.getItem('oneprep_custom_checklist_v3');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    // Default starter tasks for today to give the student an immediate actionable baseline
    return [
      {
        id: 'task-chem-m1',
        courseId: 'BACHY101',
        courseCode: 'BACHY105',
        courseTitle: 'Applied Chemistry',
        moduleId: 'bchy-m1',
        moduleTitle: 'Mod 1: Chemical Thermodynamics & Reaction Kinetics',
        task: 'Study 4-Stroke Carnot Cycle derivation & Arrhenius two-temp formula in Argon PDF',
        dayLabel: 'Today (Nov 7)',
        timeSlot: 'Morning (2.5 hrs)',
        completed: false,
        createdAt: Date.now() - 3000
      },
      {
        id: 'task-eng-m1',
        courseId: 'BAENG101',
        courseCode: 'BAENG101',
        courseTitle: 'Technical English',
        moduleId: 'baeng-m1',
        moduleTitle: 'Mod 1: 5 Cs Case Study & Business Writing',
        task: 'Memorize 20 high-frequency definition terms from the 100-word bank (Satellite to Cylinder)',
        dayLabel: 'Today (Nov 7)',
        timeSlot: 'Afternoon (2 hrs)',
        completed: false,
        createdAt: Date.now() - 2000
      },
      {
        id: 'task-calc-m1',
        courseId: 'BMAT101L',
        courseCode: 'BAMAT101',
        courseTitle: 'Multivariable Calculus',
        moduleId: 'bamat-m1',
        moduleTitle: 'Mod 1: Euler\'s Theorem & Partial Derivatives',
        task: 'Practice Euler theorem questions and Taylor series expansions',
        dayLabel: 'Today (Nov 7)',
        timeSlot: 'Evening (1.5 hrs)',
        completed: false,
        createdAt: Date.now() - 1000
      }
    ];
  });

  const [activeTab, setActiveTab] = useState('modules'); // 'modules' is default!
  const [activeReader, setActiveReader] = useState(null); // { courseId, moduleId }
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  const [isCourseConfigOpen, setIsCourseConfigOpen] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('fatkilla_exam', selectedExam);
  }, [selectedExam]);

  useEffect(() => {
    localStorage.setItem('fatkilla_days', daysLeft.toString());
  }, [daysLeft]);

  useEffect(() => {
    localStorage.setItem('fatkilla_courses_v4', JSON.stringify(selectedCourseIds));
  }, [selectedCourseIds]);

  useEffect(() => {
    localStorage.setItem('fatkilla_statuses_v4', JSON.stringify(moduleStatuses));
  }, [moduleStatuses]);

  useEffect(() => {
    localStorage.setItem('fatkilla_completed_tasks_v4', JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem('oneprep_custom_checklist_v3', JSON.stringify(customChecklist));
  }, [customChecklist]);

  // Generate Adaptive Schedule based on days, exam, courses, and module statuses
  const schedule = useMemo(() => {
    return generateAdaptiveSchedule({
      daysLeft,
      selectedExam,
      selectedCourseIds,
      moduleStatuses
    });
  }, [daysLeft, selectedExam, selectedCourseIds, moduleStatuses]);

  // Today's schedule: Use official timetable Day 1 for FAT, or adaptive Day 1 for CATs
  const todaySchedule = useMemo(() => {
    if (selectedExam === 'fat' && officialFatRoadmap.length > 0) {
      return officialFatRoadmap[0];
    }
    return schedule[0] || null;
  }, [selectedExam, schedule]);

  // Calculate overall Readiness Percentage
  const readinessPercentage = useMemo(() => {
    let targetModules = [];
    allCourses.forEach(c => {
      if (!selectedCourseIds.includes(c.id)) return;
      c.modules.forEach(m => {
        if (selectedExam === 'cat1' && m.moduleNum > 2) return;
        if (selectedExam === 'cat2' && (m.moduleNum < 3 || m.moduleNum > 4)) return;
        targetModules.push(m);
      });
    });

    if (targetModules.length === 0) return 0;

    let points = 0;
    targetModules.forEach(m => {
      const st = moduleStatuses[m.id] || m.status || 'yet_to_start';
      if (st === 'strong') points += 100;
      else if (st === 'need_to_revise') points += 50;
      else if (st === 'not_confident') points += 25;
      else points += 0;
    });

    return Math.round(points / targetModules.length);
  }, [selectedCourseIds, selectedExam, moduleStatuses]);

  // Handlers
  const handleOpenModule = (courseId, moduleId) => {
    const resolved = resolveCourseAndModule(courseId, moduleId);
    if (resolved.course && resolved.module) {
      setActiveReader({ courseId: resolved.course.id, moduleId: resolved.module.id });
    } else {
      setActiveReader({ courseId, moduleId });
    }
  };

  const handleUpdateModuleStatus = (moduleId, newStatus) => {
    setModuleStatuses(prev => ({
      ...prev,
      [moduleId]: newStatus
    }));
  };

  const handleToggleTaskComplete = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  // Custom Checklist Handlers (Empowers student to build their own schedule)
  const handleAddChecklistTask = (taskData) => {
    const newTask = {
      id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      completed: false,
      createdAt: Date.now(),
      ...taskData
    };
    setCustomChecklist(prev => [newTask, ...prev]);
  };

  const handleToggleChecklistTask = (taskId) => {
    setCustomChecklist(prev => prev.map(t => 
      t.id === taskId ? { ...t, completed: !t.completed } : t
    ));
  };

  const handleDeleteChecklistTask = (taskId) => {
    setCustomChecklist(prev => prev.filter(t => t.id !== taskId));
  };

  const handleClearCompletedChecklist = () => {
    setCustomChecklist(prev => prev.filter(t => !t.completed));
  };

  const handleImportSessionsToChecklist = (sessions, dayLabel) => {
    if (!sessions || sessions.length === 0) return;
    const newTasks = sessions.map((s, idx) => ({
      id: `task-imported-${Date.now()}-${idx}`,
      courseId: s.courseId,
      courseCode: s.courseCode,
      courseTitle: s.courseTitle,
      moduleId: s.moduleId,
      moduleTitle: s.moduleTitle,
      task: s.task,
      dayLabel: dayLabel || s.dateLabel || 'Today (Nov 7)',
      timeSlot: s.timeSlot,
      completed: false,
      createdAt: Date.now() + idx
    }));
    setCustomChecklist(prev => [...newTasks, ...prev]);
  };

  const handleQuickAddModuleToToday = (course, module) => {
    handleAddChecklistTask({
      courseId: course.id,
      courseCode: course.code,
      courseTitle: course.title,
      moduleId: module.id,
      moduleTitle: `Mod ${module.moduleNum}: ${module.title}`,
      task: `Master textbook theory, derivations, and question bank PYQs for ${module.title}`,
      dayLabel: 'Today (Nov 7)',
      timeSlot: 'Flexible'
    });
  };

  const handleToggleCourse = (courseId) => {
    setSelectedCourseIds(prev => {
      if (prev.includes(courseId)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter(id => id !== courseId);
      }
      return [...prev, courseId];
    });
  };

  const handleResetData = () => {
    if (window.confirm("Reset all module ratings, categorized statuses, and progress back to defaults?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  // Active module reader object (Universal resolution guaranteed never to return null if any info is provided)
  const { course: readerCourse, module: readerModule } = useMemo(() => {
    if (!activeReader) return { course: null, module: null };
    return resolveCourseAndModule(activeReader.courseId, activeReader.moduleId);
  }, [activeReader]);

  const readerStatus = readerModule ? (moduleStatuses[readerModule.id] || readerModule.status) : 'yet_to_start';

  return (
    <div className="min-h-screen flex flex-col bg-[#18181A] text-[#BFBFC5]">
      
      {/* Global Application Header in Peaceful Aesthetic */}
      <Header
        selectedExam={selectedExam}
        setSelectedExam={setSelectedExam}
        daysLeft={daysLeft}
        setDaysLeft={setDaysLeft}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenFormulaModal={() => setIsFormulaModalOpen(true)}
        onOpenCourseConfig={() => setIsCourseConfigOpen(true)}
        readinessPercentage={readinessPercentage}
      />

      {/* Main App Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* TAB 1: COURSE MODULES & OFFICIAL TEXTBOOKS */}
        {activeTab === 'modules' && (
          <ModuleMatrix
            courses={allCourses.filter(c => selectedCourseIds.includes(c.id))}
            moduleStatuses={moduleStatuses}
            onUpdateModuleStatus={handleUpdateModuleStatus}
            onOpenModule={handleOpenModule}
            readinessPercentage={readinessPercentage}
            selectedExam={selectedExam}
            onSwitchToMCQPractice={() => setActiveTab('evs_cbt')}
            onQuickAddToChecklist={handleQuickAddModuleToToday}
          />
        )}

        {/* TAB 2: TODAY'S 1-CLICK SCHEDULE & CUSTOM CHECKLIST */}
        {activeTab === 'today' && (
          <TodayScheduleCard
            todaySchedule={todaySchedule}
            onOpenModule={handleOpenModule}
            onToggleTaskComplete={handleToggleTaskComplete}
            completedTasks={completedTasks}
            onOpenFormulaModal={() => setIsFormulaModalOpen(true)}
            customChecklist={customChecklist}
            onAddChecklistTask={handleAddChecklistTask}
            onToggleChecklistTask={handleToggleChecklistTask}
            onDeleteChecklistTask={handleDeleteChecklistTask}
            onClearCompletedChecklist={handleClearCompletedChecklist}
            onImportSessionsToChecklist={handleImportSessionsToChecklist}
          />
        )}

        {/* TAB 3: EVS ONLINE CBT MCQ PRACTICE */}
        {activeTab === 'evs_cbt' && (
          <EvsMCQPractice
            onOpenModule={handleOpenModule}
          />
        )}

        {/* TAB 4: FULL ADAPTIVE STUDY ROADMAP & MASTER CHECKLIST */}
        {activeTab === 'schedule' && (
          <SchedulePlanner
            schedule={schedule}
            daysLeft={daysLeft}
            selectedExam={selectedExam}
            onOpenModule={handleOpenModule}
            onToggleTaskComplete={handleToggleTaskComplete}
            completedTasks={completedTasks}
            customChecklist={customChecklist}
            onAddChecklistTask={handleAddChecklistTask}
            onToggleChecklistTask={handleToggleChecklistTask}
            onDeleteChecklistTask={handleDeleteChecklistTask}
            onClearCompletedChecklist={handleClearCompletedChecklist}
            onImportSessionsToChecklist={handleImportSessionsToChecklist}
          />
        )}

      </main>

      {/* Peaceful Minimalist Footer */}
      <footer className="border-t border-[#36363B] bg-[#1E1E21] py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#85858D]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#F4F4F6]">OnePrep</span>
            <span>• Tailored for VIT Vellore Students</span>
            <span>• Official Syllabi & Authentic Books</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFormulaModalOpen(true)}
              className="hover:text-[#F4F4F6] transition-colors"
            >
              Master Formulas
            </button>
            <button
              onClick={() => setIsCourseConfigOpen(true)}
              className="hover:text-[#F4F4F6] transition-colors"
            >
              Enrolled Courses ({selectedCourseIds.length})
            </button>
            <button
              onClick={handleResetData}
              className="hover:text-[#E05656] transition-colors"
            >
              Reset Data
            </button>
          </div>
        </div>
      </footer>

      {/* Fullscreen Module Textbook Reader Modal */}
      <ModuleReaderModal
        isOpen={!!activeReader}
        onClose={() => setActiveReader(null)}
        course={readerCourse}
        module={readerModule}
        currentStatus={readerStatus}
        onUpdateStatus={handleUpdateModuleStatus}
        onSwitchModule={(newModuleId) => handleOpenModule(readerCourse?.id, newModuleId)}
      />

      {/* Master Formula Sheet Modal */}
      <FormulaSheetModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />

      {/* Semester Course Selector Modal */}
      <CourseSelectorModal
        isOpen={isCourseConfigOpen}
        onClose={() => setIsCourseConfigOpen(false)}
        selectedCourseIds={selectedCourseIds}
        onToggleCourse={handleToggleCourse}
      />

    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  ChevronRight,
  ExternalLink, 
  Sparkles, 
  Zap, 
  Award, 
  AlertTriangle, 
  Info,
  Plus,
  Trash2,
  Check,
  Filter
} from 'lucide-react';
import { STATUS_CONFIG, allCourses, resolveCourseAndModule } from '../data/courses/index.js';
import { officialFatRoadmap, examCalendarPhases } from '../data/courses/fatSchedulePreset.js';

export default function SchedulePlanner({
  schedule,
  daysLeft,
  selectedExam,
  onOpenModule,
  onToggleTaskComplete,
  completedTasks,
  customChecklist = [],
  onAddChecklistTask,
  onToggleChecklistTask,
  onDeleteChecklistTask,
  onClearCompletedChecklist,
  onImportSessionsToChecklist
}) {
  // Mode: 'custom' (My Master Checklist) | 'official' (Nov 6–Nov 13 Official Plan) | 'adaptive' (Dynamic Slider Plan)
  const [plannerMode, setPlannerMode] = useState('custom');
  const [selectedDay, setSelectedDay] = useState(1);
  const [showFullCalendar, setShowFullCalendar] = useState(true);

  // Filter state for custom checklist
  const [checklistFilter, setChecklistFilter] = useState('all'); // 'all' | 'pending' | 'completed'
  const [courseFilter, setCourseFilter] = useState('all'); // 'all' | courseId

  // Add Task Form State
  const [newTaskCourseId, setNewTaskCourseId] = useState(allCourses[0]?.id || 'BACHY101');
  const [newTaskModuleId, setNewTaskModuleId] = useState(allCourses[0]?.modules[0]?.id || 'bchy-m1');
  const [newTaskDay, setNewTaskDay] = useState('Today (Nov 7)');
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskSlot, setNewTaskSlot] = useState('Flexible');

  const currentCourse = allCourses.find(c => c.id === newTaskCourseId) || allCourses[0];

  const handleCourseChange = (e) => {
    const cId = e.target.value;
    setNewTaskCourseId(cId);
    const c = allCourses.find(course => course.id === cId);
    if (c && c.modules.length > 0) {
      setNewTaskModuleId(c.modules[0].id);
    }
  };

  const handleAddTaskSubmit = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const c = currentCourse;
    const m = c?.modules.find(mod => mod.id === newTaskModuleId) || c?.modules[0];

    onAddChecklistTask({
      courseId: c?.id || newTaskCourseId,
      courseCode: c?.code || newTaskCourseId,
      courseTitle: c?.title || 'Subject Task',
      moduleId: m?.id || newTaskModuleId,
      moduleTitle: m ? `Mod ${m.moduleNum}: ${m.title}` : 'Selected Module',
      task: newTaskText.trim(),
      dayLabel: newTaskDay,
      timeSlot: newTaskSlot
    });

    setNewTaskText('');
  };

  // Active schedule data based on planner mode for reference timetables
  const activeScheduleList = plannerMode === 'official' ? officialFatRoadmap : schedule;
  const currentDayData = activeScheduleList.find(d => d.dayNumber === selectedDay) || activeScheduleList[0];
  const allOfficialSessions = officialFatRoadmap.flatMap(d => d.sessions);

  // Filtered Custom Checklist
  const filteredChecklist = useMemo(() => {
    return customChecklist.filter(item => {
      if (checklistFilter === 'pending' && item.completed) return false;
      if (checklistFilter === 'completed' && !item.completed) return false;
      if (courseFilter !== 'all') {
        const { course } = resolveCourseAndModule(item.courseId, item.moduleId);
        if (course?.id !== courseFilter && item.courseId !== courseFilter) return false;
      }
      return true;
    });
  }, [customChecklist, checklistFilter, courseFilter]);

  const totalTasks = customChecklist.length;
  const completedTasksCount = customChecklist.filter(t => t.completed).length;
  const checklistProgress = totalTasks > 0 ? Math.round((completedTasksCount / totalTasks) * 100) : 0;

  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans">
      
      {/* Top Banner: Mode Switcher & Strategy Callout */}
      <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E05656]" />
              <h2 className="text-xl font-serif font-bold text-[#F4F4F6] tracking-tight">
                Study Planner & Personalized Battle Plan
              </h2>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-[#2C2C30] text-[#E05656] border border-[#36363B] uppercase">
                {selectedExam.toUpperCase()} Focus
              </span>
            </div>
            <p className="text-xs text-[#85858D] max-w-2xl leading-relaxed">
              Design your custom study goals or explore the official VIT timetable. Chemistry starts Nov 15, EVS Nov 21, Maths Nov 24 (with an 8-day dedicated study break Nov 16–23), English Nov 26, and Basic Eng Nov 30.
            </p>
          </div>

          {/* Mode Toggle Buttons: Custom Checklist | Official Timetable | Adaptive Slider */}
          <div className="flex items-center gap-1.5 bg-[#18181A] p-1 rounded-lg border border-[#36363B] flex-wrap">
            <button
              onClick={() => setPlannerMode('custom')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                plannerMode === 'custom'
                  ? 'bg-[#E05656] text-[#F4F4F6] shadow-sm'
                  : 'text-[#85858D] hover:text-[#F4F4F6]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>📝 My Custom Checklist ({totalTasks})</span>
            </button>

            <button
              onClick={() => { setPlannerMode('official'); setSelectedDay(1); }}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                plannerMode === 'official'
                  ? 'bg-[#2C2C30] text-[#F4F4F6] border border-[#36363B]'
                  : 'text-[#85858D] hover:text-[#F4F4F6]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#E05656]" />
              <span>📅 Official Timetable (Nov 6–30)</span>
            </button>

            <button
              onClick={() => { setPlannerMode('adaptive'); setSelectedDay(1); }}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                plannerMode === 'adaptive'
                  ? 'bg-[#2C2C30] text-[#F4F4F6] border border-[#36363B]'
                  : 'text-[#85858D] hover:text-[#F4F4F6]'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>⚡ Adaptive {daysLeft}D Plan</span>
            </button>
          </div>
        </div>

        {/* Global Progress Bar for Custom Checklist */}
        {plannerMode === 'custom' && totalTasks > 0 && (
          <div className="bg-[#18181A]/80 rounded-lg p-3 border border-[#36363B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-xs text-[#85858D]">
              Checklist Progress: <strong className="text-[#F4F4F6]">{completedTasksCount} of {totalTasks} tasks completed ({checklistProgress}%)</strong>
            </div>
            <div className="w-full sm:w-64 bg-[#2C2C30] rounded-full h-2 overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${checklistProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* MODE 1: MY CUSTOM CHECKLIST */}
      {plannerMode === 'custom' && (
        <div className="space-y-4">
          
          {/* Quick-Add Custom Task Form */}
          <form 
            onSubmit={handleAddTaskSubmit}
            className="bg-[#232326] border border-[#36363B] hover:border-[#4A4A52] rounded-xl p-4 sm:p-5 transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4F4F6] flex items-center gap-1.5">
                <Plus className="w-4 h-4 text-[#E05656]" />
                <span>Add Custom Task to Your Study Checklist:</span>
              </span>
              <button
                type="button"
                onClick={() => onImportSessionsToChecklist(allOfficialSessions, 'FAT Exam Plan')}
                className="text-[11px] text-[#E05656] hover:text-[#C94545] font-bold flex items-center gap-1"
                title="Import all official timetable sessions directly as editable checklist items"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Import All Timetable Sessions ({allOfficialSessions.length})</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
              
              {/* Subject */}
              <div className="sm:col-span-3">
                <select
                  value={newTaskCourseId}
                  onChange={handleCourseChange}
                  className="w-full bg-[#18181A] border border-[#36363B] text-[#F4F4F6] text-xs rounded-lg px-3 py-2 font-medium focus:outline-none focus:border-[#E05656]"
                >
                  {allCourses.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.shortTitle || c.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Module */}
              <div className="sm:col-span-3">
                <select
                  value={newTaskModuleId}
                  onChange={(e) => setNewTaskModuleId(e.target.value)}
                  className="w-full bg-[#18181A] border border-[#36363B] text-[#F4F4F6] text-xs rounded-lg px-3 py-2 font-medium focus:outline-none focus:border-[#E05656]"
                >
                  {currentCourse?.modules.map(m => (
                    <option key={m.id} value={m.id}>
                      Mod {m.moduleNum}: {m.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day / Date Tag */}
              <div className="sm:col-span-3">
                <select
                  value={newTaskDay}
                  onChange={(e) => setNewTaskDay(e.target.value)}
                  className="w-full bg-[#18181A] border border-[#36363B] text-[#BFBFC5] text-xs rounded-lg px-3 py-2 font-medium focus:outline-none focus:border-[#E05656]"
                >
                  <option value="Today (Nov 7)">Today (Nov 7)</option>
                  <option value="Nov 8">Nov 8</option>
                  <option value="Nov 9">Nov 9</option>
                  <option value="Nov 10">Nov 10</option>
                  <option value="Nov 11">Nov 11</option>
                  <option value="Nov 12">Nov 12</option>
                  <option value="Nov 13">Nov 13</option>
                  <option value="Chemistry Sprint (Nov 14)">Chemistry Sprint (Nov 14)</option>
                  <option value="Maths 8-Day Marathon (Nov 16-23)">Maths 8-Day Marathon (Nov 16-23)</option>
                  <option value="General Revision">General Revision</option>
                </select>
              </div>

              {/* Time Slot */}
              <div className="sm:col-span-3">
                <select
                  value={newTaskSlot}
                  onChange={(e) => setNewTaskSlot(e.target.value)}
                  className="w-full bg-[#18181A] border border-[#36363B] text-[#BFBFC5] text-xs rounded-lg px-3 py-2 font-medium focus:outline-none focus:border-[#E05656]"
                >
                  <option value="Morning (2.5 hrs)">Morning (2.5 hrs)</option>
                  <option value="Afternoon (2 hrs)">Afternoon (2 hrs)</option>
                  <option value="Evening (1.5 hrs)">Evening (1.5 hrs)</option>
                  <option value="Night (1 hr)">Night (1 hr)</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              {/* Task Text & Button */}
              <div className="sm:col-span-10">
                <input
                  type="text"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  placeholder="What is your target? (e.g. Master Stokes Theorem & Solved FAT PYQs)"
                  className="w-full bg-[#18181A] border border-[#36363B] text-[#F4F4F6] placeholder-[#6E6E78] text-xs rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#E05656]"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={!newTaskText.trim()}
                  className="w-full h-full py-2.5 px-4 rounded-lg bg-[#E05656] hover:bg-[#C94545] disabled:opacity-40 disabled:hover:bg-[#E05656] text-[#F4F4F6] text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Task</span>
                </button>
              </div>

            </div>
          </form>

          {/* Checklist Filters & Controls Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#232326] border border-[#36363B] rounded-xl p-3 text-xs">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[#85858D] font-medium mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </span>

              {['all', 'pending', 'completed'].map(f => (
                <button
                  key={f}
                  onClick={() => setChecklistFilter(f)}
                  className={`px-2.5 py-1 rounded text-xs capitalize font-medium transition-colors ${
                    checklistFilter === f
                      ? 'bg-[#E05656] text-[#F4F4F6] font-bold'
                      : 'bg-[#18181A] text-[#85858D] hover:text-[#F4F4F6]'
                  }`}
                >
                  {f} {f === 'pending' ? `(${totalTasks - completedTasksCount})` : f === 'completed' ? `(${completedTasksCount})` : `(${totalTasks})`}
                </button>
              ))}

              <span className="text-[#36363B] mx-1">|</span>

              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="bg-[#18181A] border border-[#36363B] text-[#BFBFC5] text-xs rounded px-2 py-1 focus:outline-none"
              >
                <option value="all">All Subjects</option>
                {allCourses.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.shortTitle || c.title}
                  </option>
                ))}
              </select>
            </div>

            {completedTasksCount > 0 && (
              <button
                onClick={onClearCompletedChecklist}
                className="text-[#85858D] hover:text-[#E05656] transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Completed ({completedTasksCount})</span>
              </button>
            )}
          </div>

          {/* Checklist Items Display */}
          {filteredChecklist.length === 0 ? (
            <div className="bg-[#232326] border border-dashed border-[#36363B] rounded-xl p-8 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#85858D] mx-auto opacity-50" />
              <h3 className="text-base font-bold text-[#F4F4F6]">No checklist tasks found</h3>
              <p className="text-xs text-[#85858D] max-w-md mx-auto">
                Add your own study targets above, or click below to import all official timetable sessions.
              </p>
              <button
                onClick={() => onImportSessionsToChecklist(allOfficialSessions, 'FAT Exam Plan')}
                className="px-4 py-2 rounded-lg bg-[#E05656] hover:bg-[#C94545] text-[#F4F4F6] text-xs font-bold transition-all shadow-sm inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Import Official Timetable Plan</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredChecklist.map((task) => {
                const isDone = !!task.completed;
                const { course, module: mod } = resolveCourseAndModule(task.courseId, task.moduleId);
                
                const baseUrl = import.meta.env.BASE_URL || '/';
                const rawUrl = mod?.pdfUrl || '';
                const finalPdfUrl = rawUrl.startsWith('/') ? `${baseUrl.replace(/\/$/, '')}${rawUrl}` : rawUrl;

                return (
                  <div
                    key={task.id}
                    className={`bg-[#232326] border rounded-xl p-4 sm:p-5 transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                      isDone 
                        ? 'border-[#2C2C30] opacity-50 bg-[#141416]' 
                        : 'border-[#36363B] hover:border-[#4A4A52]'
                    }`}
                  >
                    {/* Left: Checkbox & Task details */}
                    <div className="flex items-start gap-3.5 flex-1">
                      <button
                        onClick={() => onToggleChecklistTask(task.id)}
                        className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0 ${
                          isDone 
                            ? 'bg-emerald-600 border-emerald-500 text-white' 
                            : 'border-[#4A4A52] hover:border-[#E05656] bg-[#18181A]'
                        }`}
                        title={isDone ? "Mark incomplete" : "Mark completed"}
                      >
                        {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>

                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2 py-0.5 text-[10px] font-bold font-mono rounded bg-[#2C2C30] text-[#F4F4F6] border border-[#36363B]">
                            {task.courseCode || course?.code?.split('/')[0] || 'COURSE'}
                          </span>
                          <span className="text-[11px] font-medium text-[#85858D]">
                            {task.courseTitle || course?.title}
                          </span>
                          {task.dayLabel && (
                            <span className="text-[10px] px-2 py-0.2 rounded font-mono bg-[#18181A] text-[#E05656] border border-[#E05656]/30">
                              {task.dayLabel}
                            </span>
                          )}
                          {task.timeSlot && (
                            <span className="text-[10px] text-[#6E6E78]">
                              • {task.timeSlot}
                            </span>
                          )}
                          <span className="text-[10px] px-2 py-0.2 rounded font-medium bg-[#18181A] text-[#BFBFC5] border border-[#36363B]">
                            {task.moduleTitle || (mod ? `Mod ${mod.moduleNum}: ${mod.title}` : 'Module')}
                          </span>
                        </div>

                        <p className={`text-sm font-semibold text-[#F4F4F6] ${isDone ? 'line-through text-[#6E6E78]' : ''}`}>
                          {task.task}
                        </p>
                      </div>
                    </div>

                    {/* Right: Launch PDF Book & Actions */}
                    <div className="flex items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#2A2A2E]">
                      <button
                        onClick={() => onOpenModule(task.courseId, task.moduleId)}
                        className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-[#E05656] hover:bg-[#C94545] text-[#F4F4F6] text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                        title="Read this module in fullscreen PDF reader"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Launch PDF Book</span>
                      </button>

                      {finalPdfUrl && (
                        <a
                          href={finalPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#2C2C30] hover:bg-[#36363B] border border-[#36363B] text-[#85858D] hover:text-[#F4F4F6] transition-colors"
                          title="Open PDF directly in new tab"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      <button
                        onClick={() => onDeleteChecklistTask(task.id)}
                        className="p-2 rounded-lg bg-[#2C2C30] hover:bg-[#E05656]/20 border border-[#36363B] hover:border-[#E05656] text-[#85858D] hover:text-[#E05656] transition-colors"
                        title="Delete task from checklist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}

      {/* MODE 2 & 3: OFFICIAL TIMETABLE & ADAPTIVE SLIDER VIEWS */}
      {(plannerMode === 'official' || plannerMode === 'adaptive') && (
        <div className="space-y-6">
          
          {/* Strategic Breakdown Alert */}
          {plannerMode === 'official' && (
            <div className="bg-[#232326] border border-blue-500/20 rounded-xl p-4 text-xs text-[#B0B5C2] space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>
                    <strong>Strategic Insights Applied:</strong> Chemistry is prioritized before Nov 14 (Exam on Nov 15). Calculus baseline is maintained at 1.5h/day because you have an <strong>8-day dedicated break (Nov 16–23)</strong> for Maths. English is finished now to avoid the 1-day sprint trap between Maths and English!
                  </span>
                </div>
                <button
                  onClick={() => setShowFullCalendar(!showFullCalendar)}
                  className="px-2.5 py-1 rounded bg-[#2C2C30] hover:bg-[#252834] text-[#F4F4F6] text-[11px] font-bold border border-[#36363B] shrink-0 transition-colors"
                >
                  {showFullCalendar ? 'Hide Full FAT Calendar' : 'View Full FAT Calendar (Nov 6 - Nov 30)'}
                </button>
              </div>
            </div>
          )}

          {/* Official Master Exam Phases (Collapsible) */}
          {plannerMode === 'official' && showFullCalendar && (
            <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E05656]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4F4F6]">
                    Official VIT Fall 2026-27 FAT Exam Calendar & Battle Plan
                  </h3>
                </div>
                <button
                  onClick={() => onImportSessionsToChecklist(allOfficialSessions, 'FAT Exam Plan')}
                  className="text-xs text-[#E05656] hover:text-[#C94545] font-bold flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Import All to My Checklist</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {examCalendarPhases.map((phase, pIdx) => {
                  const isExamDay = phase.action === 'EXAM DAY';
                  const isBuffer = phase.action === 'CRITICAL BUFFER';
                  return (
                    <div 
                      key={pIdx} 
                      className={`p-3.5 rounded-lg border text-xs space-y-1.5 transition-all ${
                        isExamDay 
                          ? 'bg-[#E05656]/10 border-[#E05656]/40' 
                          : isBuffer
                            ? 'bg-emerald-950/20 border-emerald-500/40'
                            : 'bg-[#18181A] border-[#36363B]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[10px] text-[#85858D]">{phase.dates}</span>
                        <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold uppercase ${
                          isExamDay 
                            ? 'bg-[#E05656] text-[#F4F4F6]' 
                            : isBuffer 
                              ? 'bg-emerald-500 text-black' 
                              : 'bg-[#2C2C30] text-[#B0B5C2]'
                        }`}>
                          {phase.action}
                        </span>
                      </div>
                      <h4 className="font-bold text-[#F4F4F6] leading-tight">
                        {phase.phase}
                      </h4>
                      <p className="text-[11px] text-[#85858D] leading-relaxed">
                        {phase.focus}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Days Tabs Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-[#36363B]">
            {activeScheduleList.map(dayItem => {
              const isSelected = selectedDay === dayItem.dayNumber;
              const daySessions = dayItem.sessions || [];
              const dayCompleted = daySessions.filter(s => completedTasks[s.id]).length;
              const isDayFullyComplete = daySessions.length > 0 && dayCompleted === daySessions.length;

              return (
                <button
                  key={dayItem.dayNumber}
                  onClick={() => setSelectedDay(dayItem.dayNumber)}
                  className={`px-4 py-2.5 rounded-t-lg text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#232326] border-[#E05656] text-[#F4F4F6]'
                      : 'bg-transparent border-transparent text-[#85858D] hover:text-[#F4F4F6] hover:bg-[#232326]/50'
                  }`}
                >
                  <span>{dayItem.dateLabel}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isDayFullyComplete 
                      ? 'bg-emerald-950/60 text-emerald-400' 
                      : 'bg-[#2C2C30] text-[#6E6E78]'
                  }`}>
                    {dayCompleted}/{daySessions.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Day View */}
          {currentDayData && (
            <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-4">
              <div className="border-b border-[#2A2A2E] pb-3 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#F4F4F6]">
                    {currentDayData.dateLabel}: {currentDayData.focusTheme}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onImportSessionsToChecklist(currentDayData.sessions, currentDayData.dateLabel)}
                      className="px-2.5 py-1 rounded bg-[#E05656]/15 hover:bg-[#E05656]/25 border border-[#E05656]/30 text-[#E05656] text-[11px] font-bold transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Day to My Checklist</span>
                    </button>
                    <span className="text-xs font-mono text-[#85858D]">
                      {currentDayData.sessions.length} Sessions
                    </span>
                  </div>
                </div>
                {currentDayData.strategyNote && (
                  <p className="text-xs text-amber-400 font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Strategy: {currentDayData.strategyNote}</span>
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {currentDayData.sessions.map((session) => {
                  const isDone = !!completedTasks[session.id];
                  const { course, module: mod } = resolveCourseAndModule(session.courseId, session.moduleId);
                  const statusMeta = STATUS_CONFIG[session.status] || STATUS_CONFIG.yet_to_start;

                  const baseUrl = import.meta.env.BASE_URL || '/';
                  const rawUrl = mod?.pdfUrl || '';
                  const finalPdfUrl = rawUrl.startsWith('/') 
                    ? `${baseUrl.replace(/\/$/, '')}${rawUrl}`
                    : rawUrl;

                  return (
                    <div 
                      key={session.id}
                      className={`bg-[#18181A]/50 border rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all ${
                        isDone 
                          ? 'border-[#2C2C30] opacity-50' 
                          : 'border-[#36363B] hover:border-[#4A4A52]'
                      }`}
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-1.5 py-0.5 text-[11px] font-bold font-mono rounded bg-[#2C2C30] text-[#F4F4F6]">
                            {session.courseCode}
                          </span>
                          <span className="text-xs text-[#85858D]">
                            {session.timeSlot}
                          </span>
                          <span className={`px-2 py-0.2 rounded text-[10px] font-semibold border ${statusMeta.badge}`}>
                            {statusMeta.label}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-[#F4F4F6]">
                          {session.moduleTitle}
                        </h4>

                        <p className="text-xs text-[#85858D]">
                          {session.task}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => onOpenModule(session.courseId, session.moduleId)}
                          className="px-3.5 py-1.5 rounded-lg bg-[#E05656] hover:bg-[#C94545] text-[#F4F4F6] text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Launch PDF Book</span>
                        </button>

                        {finalPdfUrl && (
                          <a
                            href={finalPdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#2C2C30] hover:bg-[#252834] border border-[#36363B] text-[#85858D] hover:text-[#F4F4F6]"
                            title="Open full PDF textbook in new tab"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <button
                          onClick={() => onAddChecklistTask({
                            courseId: session.courseId,
                            courseCode: session.courseCode,
                            courseTitle: session.courseTitle,
                            moduleId: session.moduleId,
                            moduleTitle: session.moduleTitle,
                            task: session.task,
                            dayLabel: currentDayData.dateLabel,
                            timeSlot: session.timeSlot
                          })}
                          className="px-2.5 py-1.5 rounded-lg bg-[#2C2C30] hover:bg-[#36363B] border border-[#36363B] text-xs font-semibold text-[#BFBFC5] hover:text-[#F4F4F6] transition-colors flex items-center gap-1"
                          title="Add to My Custom Checklist"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Add</span>
                        </button>

                        <button
                          onClick={() => onToggleTaskComplete(session.id)}
                          className={`p-1.5 rounded-lg border text-xs ${
                            isDone 
                              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-400' 
                              : 'bg-[#2C2C30] border-[#36363B] text-[#85858D] hover:text-[#F4F4F6]'
                          }`}
                          title={isDone ? "Mark incomplete" : "Mark completed"}
                        >
                          <CheckCircle2 className={`w-4 h-4 ${isDone ? 'text-emerald-400' : 'text-[#6E6E78]'}`} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}

import React, { useState } from 'react';
import { 
  Sparkles, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  ExternalLink, 
  Calendar, 
  Zap, 
  RotateCcw,
  Check,
  ChevronDown
} from 'lucide-react';
import { STATUS_CONFIG, allCourses, resolveCourseAndModule } from '../data/courses/index.js';

export default function TodayScheduleCard({
  todaySchedule,
  onOpenModule,
  onToggleTaskComplete,
  completedTasks,
  onOpenFormulaModal,
  customChecklist = [],
  onAddChecklistTask,
  onToggleChecklistTask,
  onDeleteChecklistTask,
  onClearCompletedChecklist,
  onImportSessionsToChecklist
}) {
  const [activeView, setActiveView] = useState('custom'); // 'custom' | 'suggested'

  // Form State for Adding a New Custom Checklist Task
  const [selectedCourseId, setSelectedCourseId] = useState(allCourses[0]?.id || 'BACHY101');
  const [selectedModuleId, setSelectedModuleId] = useState(allCourses[0]?.modules[0]?.id || 'bchy-m1');
  const [taskText, setTaskText] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (2 hrs)');

  // Selected course object to populate module options dynamically
  const currentSelectedCourse = allCourses.find(c => c.id === selectedCourseId) || allCourses[0];

  const handleCourseChange = (e) => {
    const newCourseId = e.target.value;
    setSelectedCourseId(newCourseId);
    const c = allCourses.find(course => course.id === newCourseId);
    if (c && c.modules.length > 0) {
      setSelectedModuleId(c.modules[0].id);
    }
  };

  const handleAddTaskSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    const c = currentSelectedCourse;
    const m = c?.modules.find(mod => mod.id === selectedModuleId) || c?.modules[0];

    onAddChecklistTask({
      courseId: c?.id || selectedCourseId,
      courseCode: c?.code || selectedCourseId,
      courseTitle: c?.title || 'Subject Task',
      moduleId: m?.id || selectedModuleId,
      moduleTitle: m ? `Mod ${m.moduleNum}: ${m.title}` : 'Selected Module',
      task: taskText.trim(),
      dayLabel: 'Today (Nov 7)',
      timeSlot: timeSlot
    });

    setTaskText('');
  };

  // Metrics for custom checklist
  const totalCustomTasks = customChecklist.length;
  const completedCustomCount = customChecklist.filter(t => t.completed).length;
  const customProgressPercent = totalCustomTasks > 0 ? Math.round((completedCustomCount / totalCustomTasks) * 100) : 0;

  // Suggested sessions from timetable
  const suggestedSessions = todaySchedule?.sessions || [];

  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans">
      
      {/* Top Banner: Today's Mission & View Switcher */}
      <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E05656]" />
              <span className="text-xs font-bold font-mono tracking-wider uppercase text-[#E05656]">
                Today's Study Command Center
              </span>
              <span className="text-xs text-[#85858D]">
                • {todaySchedule?.dateLabel || 'Nov 7'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#F4F4F6] tracking-tight">
              {activeView === 'custom' ? "My Personal Study Checklist" : (todaySchedule?.focusTheme || "Today's Suggested Plan")}
            </h2>
            <p className="text-xs text-[#85858D] max-w-2xl leading-relaxed">
              {activeView === 'custom' 
                ? "Build your own custom task checklist for today. Add what you want to study, launch the exact module textbook with 1 click, and mark off items as you master them."
                : "Official timetable recommendation for today. Click 'Import All to My Checklist' to make these tasks your own and customize them."}
            </p>
          </div>

          {/* Quick Metrics & View Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-1.5 bg-[#18181A] p-1 rounded-lg border border-[#36363B]">
              <button
                onClick={() => setActiveView('custom')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeView === 'custom'
                    ? 'bg-[#E05656] text-[#F4F4F6] shadow-sm'
                    : 'text-[#85858D] hover:text-[#F4F4F6]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>My Checklist ({totalCustomTasks})</span>
              </button>

              <button
                onClick={() => setActiveView('suggested')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeView === 'suggested'
                    ? 'bg-[#2C2C30] text-[#F4F4F6] border border-[#36363B]'
                    : 'text-[#85858D] hover:text-[#F4F4F6]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-[#E05656]" />
                <span>Suggested ({suggestedSessions.length})</span>
              </button>
            </div>

            {activeView === 'custom' && totalCustomTasks > 0 && (
              <div className="flex items-center gap-2.5 bg-[#18181A]/80 border border-[#36363B] px-3 py-1.5 rounded-lg shrink-0">
                <div className="text-right">
                  <div className="text-[10px] text-[#85858D] font-medium uppercase">Done</div>
                  <div className="text-xs font-bold text-[#F4F4F6] font-mono">{completedCustomCount} / {totalCustomTasks}</div>
                </div>
                <div className="w-14 h-2 bg-[#2C2C30] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${customProgressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* VIEW 1: MY CUSTOM CHECKLIST */}
      {activeView === 'custom' && (
        <div className="space-y-4">
          
          {/* Quick-Add Task Box */}
          <form 
            onSubmit={handleAddTaskSubmit}
            className="bg-[#232326] border border-[#36363B] hover:border-[#4A4A52] rounded-xl p-4 sm:p-5 transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4F4F6] flex items-center gap-1.5">
                <Plus className="w-4 h-4 text-[#E05656]" />
                <span>Quick-Add Study Task:</span>
              </span>
              <span className="text-[11px] text-[#85858D]">
                Choose subject + module, type task, and press Enter
              </span>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
              
              {/* Subject Dropdown */}
              <div className="sm:col-span-4">
                <select
                  value={selectedCourseId}
                  onChange={handleCourseChange}
                  className="w-full bg-[#18181A] border border-[#36363B] text-[#F4F4F6] text-xs rounded-lg px-3 py-2 font-medium focus:outline-none focus:border-[#E05656]"
                >
                  {allCourses.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.shortTitle || c.title} ({c.code.split('/')[0].trim()})
                    </option>
                  ))}
                </select>
              </div>

              {/* Module Dropdown */}
              <div className="sm:col-span-4">
                <select
                  value={selectedModuleId}
                  onChange={(e) => setSelectedModuleId(e.target.value)}
                  className="w-full bg-[#18181A] border border-[#36363B] text-[#F4F4F6] text-xs rounded-lg px-3 py-2 font-medium focus:outline-none focus:border-[#E05656]"
                >
                  {currentSelectedCourse?.modules.map(m => (
                    <option key={m.id} value={m.id}>
                      Mod {m.moduleNum}: {m.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Slot Dropdown */}
              <div className="sm:col-span-4">
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-[#18181A] border border-[#36363B] text-[#BFBFC5] text-xs rounded-lg px-3 py-2 font-medium focus:outline-none focus:border-[#E05656]"
                >
                  <option value="Morning (2.5 hrs)">Morning (2.5 hrs)</option>
                  <option value="Afternoon (2 hrs)">Afternoon (2 hrs)</option>
                  <option value="Evening (1.5 hrs)">Evening (1.5 hrs)</option>
                  <option value="Night (1 hr)">Night (1 hr)</option>
                  <option value="Quick Revision (30 min)">Quick Revision (30 min)</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              {/* Task Text Input & Submit Button */}
              <div className="sm:col-span-10">
                <input
                  type="text"
                  value={taskText}
                  onChange={(e) => setTaskText(e.target.value)}
                  placeholder="What specifically do you want to learn or solve? (e.g. Master Carnot cycle & 2 CAT numericals)"
                  className="w-full bg-[#18181A] border border-[#36363B] text-[#F4F4F6] placeholder-[#6E6E78] text-xs rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#E05656]"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={!taskText.trim()}
                  className="w-full h-full py-2.5 px-4 rounded-lg bg-[#E05656] hover:bg-[#C94545] disabled:opacity-40 disabled:hover:bg-[#E05656] text-[#F4F4F6] text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Task</span>
                </button>
              </div>

            </div>
          </form>

          {/* Action Bar for Checklist */}
          {totalCustomTasks > 0 && (
            <div className="flex items-center justify-between text-xs text-[#85858D] px-1">
              <span>{completedCustomCount} of {totalCustomTasks} tasks completed</span>
              <div className="flex items-center gap-3">
                {completedCustomCount > 0 && (
                  <button
                    onClick={onClearCompletedChecklist}
                    className="hover:text-[#E05656] transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear completed ({completedCustomCount})</span>
                  </button>
                )}
                <button
                  onClick={() => onImportSessionsToChecklist(suggestedSessions, 'Today (Nov 7)')}
                  className="hover:text-[#F4F4F6] transition-colors flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Import suggested sessions</span>
                </button>
              </div>
            </div>
          )}

          {/* Checklist Items List */}
          {totalCustomTasks === 0 ? (
            <div className="bg-[#232326] border border-dashed border-[#36363B] rounded-xl p-8 text-center space-y-4">
              <Sparkles className="w-10 h-10 text-[#85858D] mx-auto opacity-50" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#F4F4F6]">Your checklist for today is currently empty</h3>
                <p className="text-xs text-[#85858D] max-w-md mx-auto">
                  Add custom tasks using the form above, or click below to import today's recommended sessions as your starter checklist.
                </p>
              </div>
              <button
                onClick={() => onImportSessionsToChecklist(suggestedSessions, 'Today (Nov 7)')}
                className="px-4 py-2 rounded-lg bg-[#E05656] hover:bg-[#C94545] text-[#F4F4F6] text-xs font-bold transition-all shadow-sm inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Import Today's Recommended Study Plan</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {customChecklist.map((task) => {
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
                    {/* Left: Checkbox & Task Information */}
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

      {/* VIEW 2: SUGGESTED TIMETABLE PLAN */}
      {activeView === 'suggested' && (
        <div className="space-y-4">
          
          <div className="flex items-center justify-between text-xs text-[#85858D] px-1">
            <span>Recommended timetable sessions for {todaySchedule?.dateLabel || 'Today'}:</span>
            <button
              onClick={() => {
                onImportSessionsToChecklist(suggestedSessions, 'Today (Nov 7)');
                setActiveView('custom');
              }}
              className="text-[#E05656] hover:text-[#C94545] font-bold flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Import All to My Checklist</span>
            </button>
          </div>

          <div className="space-y-3">
            {suggestedSessions.map((session) => {
              const isDone = !!completedTasks[session.id];
              const { course, module: mod } = resolveCourseAndModule(session.courseId, session.moduleId);
              const statusMeta = STATUS_CONFIG[session.status] || STATUS_CONFIG.yet_to_start;

              const baseUrl = import.meta.env.BASE_URL || '/';
              const rawUrl = mod?.pdfUrl || '';
              const finalPdfUrl = rawUrl.startsWith('/') ? `${baseUrl.replace(/\/$/, '')}${rawUrl}` : rawUrl;

              return (
                <div
                  key={session.id}
                  className={`bg-[#232326] border rounded-xl p-4 sm:p-5 transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                    isDone 
                      ? 'border-[#2C2C30] opacity-50 bg-[#141416]' 
                      : 'border-[#36363B] hover:border-[#4A4A52]'
                  }`}
                >
                  {/* Left Column */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 text-xs font-bold font-mono rounded bg-[#2C2C30] text-[#F4F4F6] border border-[#36363B]">
                        {session.courseCode}
                      </span>
                      <span className="text-xs text-[#85858D] font-medium">
                        {session.courseTitle}
                      </span>
                      <span className="text-xs text-[#6E6E78]">
                        • {session.timeSlot}
                      </span>
                      <span className={`px-2 py-0.2 rounded text-[10px] font-semibold border ${statusMeta.badge}`}>
                        {statusMeta.label}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#F4F4F6]">
                      {session.moduleTitle}
                    </h3>

                    <p className="text-xs text-[#85858D] leading-relaxed">
                      {session.task}
                    </p>
                  </div>

                  {/* Right Column: Actions */}
                  <div className="flex items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#2A2A2E]">
                    <button
                      onClick={() => onOpenModule(session.courseId, session.moduleId)}
                      className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-[#E05656] hover:bg-[#C94545] text-[#F4F4F6] text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
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
                        title="Open in new tab"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    <button
                      onClick={() => {
                        onAddChecklistTask({
                          courseId: session.courseId,
                          courseCode: session.courseCode,
                          courseTitle: session.courseTitle,
                          moduleId: session.moduleId,
                          moduleTitle: session.moduleTitle,
                          task: session.task,
                          dayLabel: 'Today',
                          timeSlot: session.timeSlot
                        });
                        setActiveView('custom');
                      }}
                      className="px-3 py-2 rounded-lg bg-[#2C2C30] hover:bg-[#36363B] border border-[#36363B] text-xs font-semibold text-[#BFBFC5] hover:text-[#F4F4F6] transition-colors flex items-center gap-1.5"
                      title="Add this session to My Checklist"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Add</span>
                    </button>

                    <button
                      onClick={() => onToggleTaskComplete(session.id)}
                      className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1.5 ${
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
  );
}

import React, { useState } from 'react';
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
  Info
} from 'lucide-react';
import { STATUS_CONFIG, courseMap } from '../data/courses/index.js';
import { officialFatRoadmap, examCalendarPhases } from '../data/courses/fatSchedulePreset.js';

export default function SchedulePlanner({
  schedule,
  daysLeft,
  selectedExam,
  onOpenModule,
  onToggleTaskComplete,
  completedTasks
}) {
  const [plannerMode, setPlannerMode] = useState('official'); // 'official' | 'adaptive'
  const [selectedDay, setSelectedDay] = useState(1);
  const [showFullCalendar, setShowFullCalendar] = useState(true);

  // Active schedule data based on planner mode
  const activeScheduleList = plannerMode === 'official' ? officialFatRoadmap : schedule;

  if (!activeScheduleList || activeScheduleList.length === 0) {
    return (
      <div className="bg-[#232326] border border-[#36363B] rounded-xl p-8 text-center max-w-4xl mx-auto space-y-3">
        <Calendar className="w-10 h-10 text-[#E05656] mx-auto" />
        <h3 className="text-lg font-serif font-bold text-[#F4F4F6]">No Schedule Available</h3>
        <p className="text-[#85858D] text-xs">Please verify your enrolled courses.</p>
      </div>
    );
  }

  const currentDayData = activeScheduleList.find(d => d.dayNumber === selectedDay) || activeScheduleList[0];
  const allSessions = activeScheduleList.flatMap(d => d.sessions);
  const totalCompleted = allSessions.filter(s => completedTasks[s.id]).length;
  const overallProgress = Math.round((totalCompleted / (allSessions.length || 1)) * 100);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* Top Banner: Mode Switcher & Strategy Callout */}
      <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E05656]" />
              <h2 className="text-xl font-serif font-bold text-[#F4F4F6] tracking-tight">
                Exam Preparation Strategy & Roadmap
              </h2>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-[#2C2C30] text-[#E05656] border border-[#2E3342] uppercase">
                {selectedExam.toUpperCase()} Focus
              </span>
            </div>
            <p className="text-xs text-[#85858D]">
              Custom-built according to your official VIT FAT Timetable (Applied Chemistry Nov 15, EVS Nov 21, Maths Nov 24, English Nov 26, Basic Eng Nov 30).
            </p>
          </div>

          {/* Mode Toggle Buttons */}
          <div className="flex items-center gap-2 bg-[#18181A] p-1 rounded-lg border border-[#36363B]">
            <button
              onClick={() => { setPlannerMode('official'); setSelectedDay(1); }}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                plannerMode === 'official'
                  ? 'bg-[#E05656] text-[#F4F4F6] shadow-sm'
                  : 'text-[#85858D] hover:text-[#F4F4F6]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Nov 6 – Nov 13 Official Plan</span>
            </button>
            <button
              onClick={() => { setPlannerMode('adaptive'); setSelectedDay(1); }}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                plannerMode === 'adaptive'
                  ? 'bg-[#2C2C30] text-[#F4F4F6] border border-[#2E3342]'
                  : 'text-[#85858D] hover:text-[#F4F4F6]'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Adaptive {daysLeft}-Day Slider</span>
            </button>
          </div>
        </div>

        {/* Strategic Breakdown Alert */}
        {plannerMode === 'official' && (
          <div className="bg-[#18181A] border border-blue-500/20 rounded-lg p-3 text-xs text-[#B0B5C2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
        )}

        {/* Global Progress Bar */}
        <div className="bg-[#18181A]/70 rounded-lg p-3 border border-[#36363B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs text-[#85858D]">
            Roadmap Completion: <strong className="text-[#F4F4F6]">{totalCompleted} of {allSessions.length} sessions completed</strong>
          </div>
          <div className="w-full sm:w-64 bg-[#2C2C30] rounded-full h-2 overflow-hidden">
            <div 
              className="bg-[#E05656] h-full rounded-full transition-all duration-300"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Official Master Exam Phases (Collapsible) */}
      {plannerMode === 'official' && showFullCalendar && (
        <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#E05656]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4F4F6]">
              Official VIT Fall 2026-27 FAT Exam Calendar & Battle Plan
            </h3>
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
              <span className="text-xs font-mono text-[#85858D]">
                {currentDayData.sessions.length} Sessions Scheduled
              </span>
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
              const course = courseMap[session.courseId];
              const mod = course?.modules.find(m => m.id === session.moduleId);
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
                      ? 'border-[#36363B] opacity-60' 
                      : 'border-[#36363B] hover:border-[#333744]'
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
                      <span>Read Book & PYQs</span>
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
  );
}

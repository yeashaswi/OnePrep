import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { STATUS_CONFIG, courseMap } from '../data/courses/index.js';

export default function SchedulePlanner({
  schedule,
  daysLeft,
  selectedExam,
  onOpenModule,
  onToggleTaskComplete,
  completedTasks
}) {
  const [selectedDay, setSelectedDay] = useState(1);

  if (!schedule || schedule.length === 0) {
    return (
      <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-8 text-center max-w-4xl mx-auto space-y-3">
        <Calendar className="w-10 h-10 text-[#EB0029] mx-auto" />
        <h3 className="text-lg font-bold text-white">No Schedule Generated</h3>
        <p className="text-[#8E93A0] text-xs">Please check your enrolled courses in settings.</p>
      </div>
    );
  }

  const currentDayData = schedule.find(d => d.dayNumber === selectedDay) || schedule[0];
  const allSessions = schedule.flatMap(d => d.sessions);
  const totalCompleted = allSessions.filter(s => completedTasks[s.id]).length;
  const overallProgress = Math.round((totalCompleted / (allSessions.length || 1)) * 100);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* Overview & Progress Header */}
      <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EB0029]" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Adaptive Day-Wise Study Roadmap
            </h2>
            <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-[#1E212B] text-[#FF4A5A] border border-[#2E3342] uppercase">
              {selectedExam.toUpperCase()} Target
            </span>
          </div>
          <p className="text-xs text-[#8E93A0]">
            Distributed across {daysLeft} days based on module difficulty (Not Confident & Need to Revise prioritised).
          </p>
        </div>

        {/* Global Progress Gauge */}
        <div className="w-full md:w-64 bg-[#0B0C0E]/70 rounded-lg p-3 border border-[#22252C]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[#8E93A0]">Progress</span>
            <span className="text-white font-mono font-bold">{totalCompleted} / {allSessions.length} ({overallProgress}%)</span>
          </div>
          <div className="w-full bg-[#1E212B] rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-[#EB0029] h-full rounded-full transition-all duration-300"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Days Tabs Horizontal Scroll */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-[#22252C]">
        {schedule.map(dayItem => {
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
                  ? 'bg-[#14161C] border-[#EB0029] text-white'
                  : 'bg-transparent border-transparent text-[#8E93A0] hover:text-white hover:bg-[#14161C]/50'
              }`}
            >
              <span>{dayItem.dateLabel}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                isDayFullyComplete 
                  ? 'bg-emerald-950/60 text-emerald-400' 
                  : 'bg-[#1E212B] text-[#656A76]'
              }`}>
                {dayCompleted}/{daySessions.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Day View */}
      {currentDayData && (
        <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 space-y-4">
          <div className="border-b border-[#1C1F26] pb-3">
            <h3 className="text-base font-bold text-white">
              {currentDayData.dateLabel}: {currentDayData.focusTheme}
            </h3>
          </div>

          <div className="space-y-3">
            {currentDayData.sessions.map((session, sIdx) => {
              const isDone = !!completedTasks[session.id];
              const course = courseMap[session.courseId];
              const mod = course?.modules.find(m => m.id === session.moduleId);
              const statusMeta = STATUS_CONFIG[session.status] || STATUS_CONFIG.yet_to_start;

              return (
                <div 
                  key={session.id}
                  className={`bg-[#0B0C0E]/50 border rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all ${
                    isDone 
                      ? 'border-[#22252C] opacity-60' 
                      : 'border-[#22252C] hover:border-[#333744]'
                  }`}
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-1.5 py-0.5 text-[11px] font-bold font-mono rounded bg-[#1B1E26] text-white">
                        {session.courseCode}
                      </span>
                      <span className="text-xs text-[#8E93A0]">
                        {session.timeSlot}
                      </span>
                      <span className={`px-2 py-0.2 rounded text-[10px] font-semibold border ${statusMeta.badge}`}>
                        {statusMeta.label}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white">
                      {session.moduleTitle}
                    </h4>

                    <p className="text-xs text-[#8E93A0]">
                      {session.task}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onOpenModule(session.courseId, session.moduleId)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#EB0029] hover:bg-[#D00024] text-white text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read PDF</span>
                    </button>

                    {mod?.pdfUrl && (
                      <a
                        href={mod.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#1B1E26] hover:bg-[#252834] border border-[#2B2F3A] text-[#8E93A0] hover:text-white"
                        title="Open in new tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => onToggleTaskComplete(session.id)}
                      className={`p-1.5 rounded-lg border text-xs ${
                        isDone 
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-400' 
                          : 'bg-[#1B1E26] border-[#2B2F3A] text-[#8E93A0] hover:text-white'
                      }`}
                      title={isDone ? "Mark incomplete" : "Mark completed"}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${isDone ? 'text-emerald-400' : 'text-[#656A76]'}`} />
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

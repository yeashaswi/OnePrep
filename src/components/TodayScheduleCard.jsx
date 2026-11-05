import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  AlertTriangle, 
  FileText, 
  Zap,
  Target,
  ExternalLink
} from 'lucide-react';
import { STATUS_CONFIG, courseMap } from '../data/courses/index.js';

export default function TodayScheduleCard({
  todaySchedule,
  onOpenModule,
  onToggleTaskComplete,
  completedTasks,
  onOpenFormulaModal
}) {
  if (!todaySchedule || !todaySchedule.sessions || todaySchedule.sessions.length === 0) {
    return (
      <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-8 text-center max-w-4xl mx-auto space-y-3">
        <Sparkles className="w-10 h-10 text-[#EB0029] mx-auto" />
        <h3 className="text-lg font-bold text-white">No active study sessions scheduled for today</h3>
        <p className="text-[#8E93A0] text-xs max-w-md mx-auto">
          Explore the Course Modules tab to open any full PDF textbook directly.
        </p>
      </div>
    );
  }

  const totalSessions = todaySchedule.sessions.length;
  const completedCount = todaySchedule.sessions.filter(s => completedTasks[s.id]).length;
  const progressPercent = Math.round((completedCount / totalSessions) * 100);
  const totalMinutes = todaySchedule.sessions.reduce((acc, s) => acc + (s.durationMinutes || 90), 0);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Top Banner: Today's Mission in Calm OnePlus Theme */}
      <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EB0029]" />
              <span className="text-xs font-bold font-mono tracking-wider uppercase text-[#EB0029]">
                Today's Curated Study Plan
              </span>
              <span className="text-xs text-[#656A76]">
                • {todaySchedule.dateLabel}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {todaySchedule.focusTheme}
            </h2>
            <p className="text-xs text-[#8E93A0] max-w-2xl leading-relaxed">
              Prioritized by your custom module categorization (Not Confident & Need to Revise first). Click the red button on any session to launch the official textbook immediately.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-3 bg-[#0B0C0E]/70 border border-[#22252C] px-3.5 py-2.5 rounded-lg shrink-0">
            <div className="text-right">
              <div className="text-[10px] text-[#8E93A0] font-medium uppercase">Tasks Done</div>
              <div className="text-xs font-bold text-white font-mono">{completedCount} of {totalSessions}</div>
            </div>
            <div className="w-16 h-2 bg-[#1E212B] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#EB0029] rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1-Click Launch Session Cards */}
      <div className="space-y-3">
        <div className="text-xs font-semibold text-[#8E93A0] uppercase tracking-wider px-1">
          Target Modules For Today:
        </div>

        {todaySchedule.sessions.map((session, idx) => {
          const isDone = !!completedTasks[session.id];
          const course = courseMap[session.courseId];
          const mod = course?.modules.find(m => m.id === session.moduleId);
          const statusMeta = STATUS_CONFIG[session.status] || STATUS_CONFIG.yet_to_start;

          return (
            <div
              key={session.id}
              className={`bg-[#14161C] border rounded-xl p-4 sm:p-5 transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                isDone 
                  ? 'border-[#22252C] opacity-60 bg-[#0E1015]' 
                  : 'border-[#22252C] hover:border-[#333744]'
              }`}
            >
              {/* Left Column: Course Badge, Slot & Module Title */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 text-xs font-bold font-mono rounded bg-[#1B1E26] text-white border border-[#2B2F3A]">
                    {session.courseCode}
                  </span>
                  <span className="text-xs text-[#8E93A0] font-medium">
                    {session.courseTitle}
                  </span>
                  <span className="text-xs text-[#656A76]">
                    • {session.timeSlot}
                  </span>
                  <span className={`px-2 py-0.2 rounded text-[10px] font-semibold border ${statusMeta.badge}`}>
                    {statusMeta.label}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white">
                  {session.moduleTitle}
                </h3>

                <p className="text-xs text-[#8E93A0] leading-relaxed">
                  {session.task}
                </p>
              </div>

              {/* Right Column: 1-Click Launch PDF Book & Check Complete */}
              <div className="flex items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#1C1F26]">
                <button
                  onClick={() => onOpenModule(session.courseId, session.moduleId)}
                  className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-[#EB0029] hover:bg-[#D00024] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Launch PDF Book</span>
                </button>

                {mod?.pdfUrl && (() => {
                  const bUrl = import.meta.env.BASE_URL || '/';
                  const resolvedUrl = mod.pdfUrl.startsWith('/') ? `${bUrl.replace(/\/$/, '')}${mod.pdfUrl}` : mod.pdfUrl;
                  return (
                    <a
                      href={resolvedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#1B1E26] hover:bg-[#252834] border border-[#2B2F3A] text-[#8E93A0] hover:text-white transition-colors"
                      title="Open in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  );
                })()}

                <button
                  onClick={() => onToggleTaskComplete(session.id)}
                  className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1.5 ${
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
  );
}

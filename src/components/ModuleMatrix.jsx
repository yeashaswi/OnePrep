import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink,
  Download,
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  ArrowRight,
  GraduationCap,
  Sparkles,
  Layers
} from 'lucide-react';
import { allCourses, STATUS_CONFIG } from '../data/courses/index.js';

export default function ModuleMatrix({
  courses = allCourses,
  moduleStatuses,
  onUpdateModuleStatus,
  onOpenModule,
  readinessPercentage,
  selectedExam,
  onSwitchToMCQPractice
}) {
  const [selectedCourseId, setSelectedCourseId] = useState(() => {
    return courses[0]?.id || 'BMAT101L';
  });

  // Filter modules based on selected exam mode
  const getExamModules = (course) => {
    if (selectedExam === 'cat1') return course.modules.filter(m => m.moduleNum <= 2);
    if (selectedExam === 'cat2') return course.modules.filter(m => m.moduleNum === 3 || m.moduleNum === 4);
    return course.modules;
  };

  // Find active course
  const activeCourse = courses.find(c => c.id === selectedCourseId) || courses[0];
  const activeCourseModules = activeCourse ? getExamModules(activeCourse) : [];

  // Calculate status counts for active course
  const statusCounts = {
    not_confident: 0,
    need_to_revise: 0,
    yet_to_start: 0,
    strong: 0
  };

  activeCourseModules.forEach(mod => {
    const st = moduleStatuses[mod.id] || mod.status || 'yet_to_start';
    if (statusCounts[st] !== undefined) {
      statusCounts[st]++;
    }
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* Course Selector Tabs - Peaceful OnePlus Horizontal Segment */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-[#22252C]">
        {courses.map(course => {
          const isSelected = course.id === activeCourse.id;
          const courseModCount = getExamModules(course).length;
          return (
            <button
              key={course.id}
              onClick={() => setSelectedCourseId(course.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-t-lg text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-[1px] ${
                isSelected
                  ? 'bg-[#14161C] border-[#EB0029] text-white shadow-sm'
                  : 'bg-transparent border-transparent text-[#8E93A0] hover:text-white hover:bg-[#14161C]/50'
              }`}
            >
              <span>{course.shortTitle || course.title}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                isSelected ? 'bg-[#EB0029]/20 text-[#FF4A5A]' : 'bg-[#1E212B] text-[#656A76]'
              }`}>
                {course.code}
              </span>
              <span className="text-[10px] text-[#555966] font-normal">
                ({courseModCount} mods)
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Course Overview Banner */}
      <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {activeCourse.title}
              </h2>
              <span className="px-2 py-0.5 text-xs font-bold font-mono rounded bg-[#1E212B] text-white border border-[#2B2F3A]">
                {activeCourse.code}
              </span>
              <span className="px-2 py-0.5 text-xs font-medium rounded bg-[#EB0029]/10 text-[#FF4A5A] border border-[#EB0029]/30">
                {activeCourse.badge || `${activeCourse.modules.length} Modules`}
              </span>
              {activeCourse.isMCQExam && (
                <span className="px-2.5 py-0.5 text-xs font-bold rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  CBT MCQ Online Exam
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#8E93A0] mt-1">
              {activeCourse.description}
            </p>
          </div>

          {/* Quick Practice Mode for EVS or Master Formulas */}
          {activeCourse.isMCQExam && onSwitchToMCQPractice && (
            <button
              onClick={onSwitchToMCQPractice}
              className="px-4 py-2 rounded-lg bg-[#EB0029] hover:bg-[#D00024] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Launch EVS CBT MCQ Drill</span>
            </button>
          )}
        </div>

        {/* Category Status Tally */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[#1C1F26]">
          {[
            { id: 'not_confident', label: 'Not Confident', count: statusCounts.not_confident, color: 'text-[#FF4A5A]', dot: 'bg-[#EB0029]' },
            { id: 'need_to_revise', label: 'Need to Revise', count: statusCounts.need_to_revise, color: 'text-amber-400', dot: 'bg-amber-400' },
            { id: 'yet_to_start', label: 'Yet to Start', count: statusCounts.yet_to_start, color: 'text-zinc-300', dot: 'bg-zinc-400' },
            { id: 'strong', label: 'Strong', count: statusCounts.strong, color: 'text-emerald-400', dot: 'bg-emerald-400' }
          ].map(cat => (
            <div key={cat.id} className="flex items-center gap-2 bg-[#0B0C0E]/60 border border-[#22252C] rounded-lg px-3 py-2">
              <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
              <span className="text-xs text-[#8E93A0]">{cat.label}:</span>
              <span className={`text-xs font-bold font-mono ml-auto ${cat.color}`}>{cat.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Module Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeCourseModules.map(mod => {
          const currentStatus = moduleStatuses[mod.id] || mod.status || 'yet_to_start';
          const statusMeta = STATUS_CONFIG[currentStatus] || STATUS_CONFIG.yet_to_start;

          return (
            <div 
              key={mod.id} 
              className="bg-[#14161C] border border-[#22252C] hover:border-[#303442] rounded-xl p-5 flex flex-col justify-between transition-all duration-200 group"
            >
              <div className="space-y-3.5">
                
                {/* Header: Module Number & Status Indicator */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs font-bold font-mono rounded bg-[#1B1E26] text-white border border-[#2B2F3A]">
                      MOD {mod.moduleNum}
                    </span>
                    <span className="px-1.5 py-0.5 text-[10px] font-semibold text-[#8E93A0] rounded bg-[#1B1E26]">
                      {mod.co}
                    </span>
                    <span className="text-[11px] text-[#656A76]">
                      {mod.weightage}
                    </span>
                  </div>

                  {/* Current Active Status Pill */}
                  <span className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-md border flex items-center gap-1.5 ${statusMeta.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.dot || 'bg-white'}`} />
                    <span>{statusMeta.label}</span>
                  </span>
                </div>

                {/* Module Title */}
                <h3 className="text-base font-bold text-white group-hover:text-white transition-colors">
                  {mod.title}
                </h3>

                {/* Syllabus Scope Summary */}
                <p className="text-xs text-[#8E93A0] leading-relaxed line-clamp-3">
                  {mod.scope}
                </p>

                {/* 4 Category Quick Switcher Buttons */}
                <div className="pt-2">
                  <div className="text-[10px] text-[#656A76] uppercase tracking-wider font-semibold mb-1.5">
                    Categorize Status:
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { id: 'not_confident', label: 'Not Confident', dot: 'bg-[#EB0029]' },
                      { id: 'need_to_revise', label: 'Need Revise', dot: 'bg-amber-400' },
                      { id: 'yet_to_start', label: 'Yet to Start', dot: 'bg-zinc-400' },
                      { id: 'strong', label: 'Strong', dot: 'bg-emerald-400' }
                    ].map(st => {
                      const isSelected = currentStatus === st.id;
                      return (
                        <button
                          key={st.id}
                          onClick={() => onUpdateModuleStatus(mod.id, st.id)}
                          className={`px-2 py-1.5 rounded-md text-[10px] font-medium transition-all flex items-center justify-center gap-1 border ${
                            isSelected
                              ? 'bg-[#1E212B] border-white/30 text-white font-bold shadow-sm'
                              : 'bg-[#0B0C0E]/50 border-[#22252C] text-[#8E93A0] hover:text-white hover:border-[#333744]'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                          <span className="truncate">{st.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Actions: Open Full PDF Book (1-Click) */}
              <div className="pt-4 mt-4 border-t border-[#1C1F26] flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenModule(activeCourse.id, mod.id)}
                  className="flex-1 px-4 py-2 rounded-lg bg-[#EB0029] hover:bg-[#D00024] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Open Official PDF Book</span>
                </button>

                {mod.pdfUrl && (() => {
                  const bUrl = import.meta.env.BASE_URL || '/';
                  const resolvedUrl = mod.pdfUrl.startsWith('/') ? `${bUrl.replace(/\/$/, '')}${mod.pdfUrl}` : mod.pdfUrl;
                  return (
                    <>
                      <a
                        href={resolvedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#1B1E26] hover:bg-[#252834] border border-[#2B2F3A] text-[#8E93A0] hover:text-white transition-colors"
                        title="Open PDF in browser tab"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={resolvedUrl}
                        download
                        className="p-2 rounded-lg bg-[#1B1E26] hover:bg-[#252834] border border-[#2B2F3A] text-[#8E93A0] hover:text-white transition-colors"
                        title="Download PDF"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </>
                  );
                })()}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}

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
  Layers,
  FileText,
  ChevronDown,
  ChevronUp,
  Award,
  Zap,
  BookMarked,
  Plus,
  Check
} from 'lucide-react';
import { allCourses, STATUS_CONFIG } from '../data/courses/index.js';
import KaTeXMath, { FormattedText } from './KaTeXMath.jsx';

export default function ModuleMatrix({
  courses = allCourses,
  moduleStatuses,
  onUpdateModuleStatus,
  onOpenModule,
  readinessPercentage,
  selectedExam,
  onSwitchToMCQPractice,
  onQuickAddToChecklist
}) {
  const [selectedCourseId, setSelectedCourseId] = useState(() => {
    return courses[0]?.id || 'BAMAT101';
  });

  const [addedNoticeModuleId, setAddedNoticeModuleId] = useState(null);

  // Exactly the 3 sections requested: 'books' | 'skim' | 'pyqs'
  const [activeSection, setActiveSection] = useState('books');
  const [expandedSolutions, setExpandedSolutions] = useState({});

  // Filter modules based on selected exam mode
  const getExamModules = (course) => {
    if (selectedExam === 'cat1') return course.modules.filter(m => m.moduleNum <= 2);
    if (selectedExam === 'cat2') return course.modules.filter(m => m.moduleNum === 3 || m.moduleNum === 4);
    return course.modules;
  };

  // Find active course
  const activeCourse = courses.find(c => c.id === selectedCourseId) || courses[0];
  const activeCourseModules = activeCourse ? getExamModules(activeCourse) : [];

  const toggleDropdownSolution = (id) => {
    setExpandedSolutions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* 1. Course Selector Tabs - Peaceful OnePlus Horizontal Segment */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-[#36363B]">
        {courses.map(course => {
          const isSelected = course.id === activeCourse.id;
          const courseModCount = getExamModules(course).length;
          return (
            <button
              key={course.id}
              onClick={() => setSelectedCourseId(course.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-t-lg text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-[1px] ${
                isSelected
                  ? 'bg-[#232326] border-[#E05656] text-[#F4F4F6] shadow-sm'
                  : 'bg-transparent border-transparent text-[#85858D] hover:text-[#F4F4F6] hover:bg-[#232326]/50'
              }`}
            >
              <span>{course.shortTitle || course.title}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                isSelected ? 'bg-[#E05656]/20 text-[#E05656]' : 'bg-[#2C2C30] text-[#6E6E78]'
              }`}>
                {course.code}
              </span>
              <span className="text-[10px] text-[#6E6E78] font-normal">
                ({courseModCount} mods)
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Active Course Header Card */}
      <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#F4F4F6] tracking-tight">
                {activeCourse.title}
              </h2>
              <span className="px-2 py-0.5 text-xs font-bold font-mono rounded bg-[#2C2C30] text-[#F4F4F6] border border-[#36363B]">
                {activeCourse.code}
              </span>
              <span className="px-2 py-0.5 text-xs font-medium rounded bg-[#E05656]/10 text-[#E05656] border border-[#E05656]/30">
                {activeCourse.badge || `${activeCourse.modules.length} Modules`}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#85858D] mt-1 max-w-3xl">
              {activeCourse.description}
            </p>
          </div>

          {activeCourse.isMCQExam && onSwitchToMCQPractice && (
            <button
              onClick={onSwitchToMCQPractice}
              className="px-4 py-2 rounded-lg bg-[#E05656] hover:bg-[#C94545] text-[#F4F4F6] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Launch EVS CBT MCQ Simulator</span>
            </button>
          )}
        </div>

        {/* 3. The 3 Sections Required: Full Detailed Books | Skim Notes | FAT PYQs with Dropdown */}
        <div className="flex items-center gap-2 pt-2 border-t border-[#2A2A2E]">
          <span className="text-xs font-semibold text-[#85858D] mr-1 hidden sm:inline">Section:</span>
          
          <button
            onClick={() => setActiveSection('books')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === 'books'
                ? 'bg-[#E05656] text-[#F4F4F6] shadow-sm'
                : 'bg-[#18181A] border border-[#36363B] text-[#85858D] hover:text-[#F4F4F6]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>📚 Full Detailed Books (Module-wise)</span>
          </button>

          <button
            onClick={() => setActiveSection('skim')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === 'skim'
                ? 'bg-[#E05656] text-[#F4F4F6] shadow-sm'
                : 'bg-[#18181A] border border-[#36363B] text-[#85858D] hover:text-[#F4F4F6]'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>⚡ Skim Notes (Module-wise)</span>
          </button>

          <button
            onClick={() => setActiveSection('pyqs')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === 'pyqs'
                ? 'bg-[#E05656] text-[#F4F4F6] shadow-sm'
                : 'bg-[#18181A] border border-[#36363B] text-[#85858D] hover:text-[#F4F4F6]'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>🎯 FAT PYQs (with Dropdown Solutions)</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: FULL DETAILED BOOKS (MODULE-WISE) */}
      {activeSection === 'books' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#85858D] px-1">
            <span>Direct access to unabridged, comprehensive module textbooks:</span>
            <span>{activeCourseModules.length} Modules Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCourseModules.map(mod => {
              const currentStatus = moduleStatuses[mod.id] || mod.status || 'yet_to_start';
              const statusMeta = STATUS_CONFIG[currentStatus] || STATUS_CONFIG.yet_to_start;
              const baseUrl = import.meta.env.BASE_URL || '/';
              const rawUrl = mod.pdfUrl || '';
              const finalPdfUrl = rawUrl.startsWith('/') ? `${baseUrl.replace(/\/$/, '')}${rawUrl}` : rawUrl;

              return (
                <div 
                  key={mod.id}
                  className="bg-[#232326] border border-[#36363B] hover:border-[#4A4A52] rounded-xl p-6 flex flex-col justify-between space-y-4 transition-all"
                >
                  <div className="space-y-3.5">
                    {/* Top Tag Row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded text-xs font-bold font-mono bg-[#2C2C30] text-[#F4F4F6]">
                          MOD {mod.moduleNum}
                        </span>
                        <span className="text-xs font-semibold text-[#E05656]">
                          {mod.co}
                        </span>
                        {mod.weightage && (
                          <span className="text-xs text-[#85858D] font-mono">
                            • {mod.weightage}
                          </span>
                        )}
                      </div>

                      {/* Mastery Pill */}
                      <span className={`px-2.5 py-0.5 rounded text-xs font-semibold border ${statusMeta.badge}`}>
                        {statusMeta.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#F4F4F6] tracking-tight">
                      {mod.title}
                    </h3>

                    {/* Card Summary & Key Topics */}
                    <div className="space-y-2.5">
                      <p className="text-sm text-[#D1D1D6] leading-relaxed line-clamp-3">
                        {mod.summary || mod.description || mod.scope}
                      </p>
                      
                      {mod.topics && mod.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {mod.topics.map((t, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#1C1C1F] text-[#BFBFC5] border border-[#2E2E33]"
                            >
                              {typeof t === 'string' ? t : t.title || t.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action & Classification Footer */}
                  <div className="pt-4 border-t border-[#2A2A2E] space-y-3.5">
                    
                    {/* 4 Classification Buttons */}
                    <div className="flex items-center justify-between gap-1 bg-[#18181A] p-1 rounded-lg border border-[#36363B]">
                      {[
                        { id: 'not_confident', label: '🔴 Not Confident' },
                        { id: 'need_to_revise', label: '🟡 Need to Revise' },
                        { id: 'yet_to_start', label: '⚪ Yet to Start' },
                        { id: 'strong', label: '🟢 Strong' }
                      ].map(cat => {
                        const isSelected = currentStatus === cat.id;
                        return (
                          <button
                            key={cat.id}
                            onClick={() => onUpdateModuleStatus(mod.id, cat.id)}
                            className={`flex-1 py-1 rounded text-[10px] font-medium transition-all ${
                              isSelected 
                                ? 'bg-[#2C2C30] text-[#F4F4F6] font-bold border border-[#333744]' 
                                : 'text-[#6E6E78] hover:text-[#B0B5C2]'
                            }`}
                          >
                            {cat.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Primary Button: Read Full Detailed Book + Add to Checklist */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenModule(activeCourse.id, mod.id)}
                        className="flex-1 py-2 px-3 sm:px-4 rounded-lg bg-[#E05656] hover:bg-[#C94545] text-[#F4F4F6] text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Read Full Book</span>
                      </button>

                      {onQuickAddToChecklist && (
                        <button
                          onClick={() => {
                            onQuickAddToChecklist(activeCourse, mod);
                            setAddedNoticeModuleId(mod.id);
                            setTimeout(() => setAddedNoticeModuleId(null), 1500);
                          }}
                          className="py-2 px-2.5 rounded-lg bg-[#2C2C30] hover:bg-[#36363B] border border-[#36363B] text-xs font-semibold text-[#BFBFC5] hover:text-[#F4F4F6] transition-colors flex items-center gap-1.5 shrink-0"
                          title="Add this module to Today's Checklist"
                        >
                          {addedNoticeModuleId === mod.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 text-[11px]">Added!</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline text-[11px]">Checklist</span>
                            </>
                          )}
                        </button>
                      )}

                      {finalPdfUrl && (
                        <a
                          href={finalPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#2C2C30] hover:bg-[#34343A] border border-[#36363B] text-[#85858D] hover:text-[#F4F4F6] transition-colors"
                          title="Open PDF in new tab"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION 2: SKIM NOTES (MODULE-WISE) */}
      {activeSection === 'skim' && (
        <div className="space-y-6">
          <div className="text-xs text-[#85858D] px-1">
            High-yield formulas, core substitution identities, and faculty exam traps for rapid revision:
          </div>

          <div className="space-y-6">
            {activeCourseModules.map(mod => (
              <div key={mod.id} className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-4">
                
                {/* Module Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2A2A2E] pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <h3 className="text-base font-serif font-bold text-[#F4F4F6]">
                      Module {mod.moduleNum}: {mod.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenModule(activeCourse.id, mod.id)}
                      className="px-2.5 py-1 rounded bg-[#E05656]/15 hover:bg-[#E05656] text-[#E05656] hover:text-[#F4F4F6] text-xs font-bold transition-all flex items-center gap-1 border border-[#E05656]/30"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Launch Book</span>
                    </button>
                    {onQuickAddToChecklist && (
                      <button
                        onClick={() => {
                          onQuickAddToChecklist(activeCourse, mod);
                          setAddedNoticeModuleId(mod.id);
                          setTimeout(() => setAddedNoticeModuleId(null), 1500);
                        }}
                        className="px-2.5 py-1 rounded bg-[#2C2C30] hover:bg-[#36363B] text-xs font-medium text-[#BFBFC5] hover:text-[#F4F4F6] transition-colors border border-[#36363B] flex items-center gap-1"
                      >
                        {addedNoticeModuleId === mod.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Plus className="w-3 h-3" />}
                        <span>{addedNoticeModuleId === mod.id ? 'Added!' : 'Checklist'}</span>
                      </button>
                    )}
                    <span className="text-xs font-mono text-[#85858D]">{mod.weightage}</span>
                  </div>
                </div>

                {/* Syllabus Topics Breakdown */}
                {mod.topics && mod.topics.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Layers className="w-4 h-4" />
                      <span>Syllabus Breakdown ({mod.topics.length} Key Topics)</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((top, tIdx) => (
                        <div key={tIdx} className="bg-[#18181A] px-3 py-2 rounded-lg border border-[#36363B] flex items-center gap-2 text-xs text-[#D1D1D6]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span>{typeof top === 'string' ? top : top.title || top.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Master Formulas Cards */}
                {mod.formulaSheet && mod.formulaSheet.length > 0 && (
                  <div className="space-y-3 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      <span>Key Formulas & Master Substitution Cards</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mod.formulaSheet.map((f, fIdx) => (
                        <div key={fIdx} className="bg-[#18181A] p-4 sm:p-5 rounded-xl border border-[#36363B] space-y-2.5">
                          <div className="flex items-center justify-between text-sm font-bold text-[#F4F4F6] flex-wrap gap-1">
                            <span>{f.name}</span>
                            {f.note && <span className="text-xs text-[#A1A1AA] italic font-normal">{f.note}</span>}
                          </div>
                          <div className="text-center p-3 bg-[#141416] rounded-lg border border-[#2E2E33] text-sm sm:text-base text-[#F4F4F6] overflow-x-auto">
                            <KaTeXMath math={f.formula} display={true} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Faculty Traps & Warnings */}
                {mod.examInsights && mod.examInsights.length > 0 && (
                  <div className="space-y-3 pt-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Faculty Exam Insights & High-Scoring Techniques</span>
                    </h4>
                    <div className="space-y-3">
                      {mod.examInsights.map((ins, insIdx) => (
                        <div key={insIdx} className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 sm:p-5 space-y-2">
                          <span className="font-bold text-amber-300 text-sm sm:text-base block">{ins.title}</span>
                          <div className="text-sm text-[#E4E4E7] leading-relaxed">
                            <FormattedText text={ins.desc} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: FAT PYQs (WITH DROPDOWN SOLUTIONS) */}
      {activeSection === 'pyqs' && (
        <div className="space-y-6">
          <div className="text-xs text-[#85858D] px-1">
            Department Question Bank and past FAT exam questions with collapsible/dropdown solutions:
          </div>

          <div className="space-y-6">
            {activeCourseModules.map(mod => {
              const hasPyqs = mod.pyqs && mod.pyqs.length > 0;
              const hasMcqs = mod.mcqs && mod.mcqs.length > 0;

              return (
                <div key={mod.id} className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-4">
                  
                  {/* Module Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2A2A2E] pb-3 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <h3 className="text-base font-serif font-bold text-[#F4F4F6]">
                        Module {mod.moduleNum}: {mod.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenModule(activeCourse.id, mod.id)}
                        className="px-2.5 py-1 rounded bg-[#E05656]/15 hover:bg-[#E05656] text-[#E05656] hover:text-[#F4F4F6] text-xs font-bold transition-all flex items-center gap-1 border border-[#E05656]/30"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Launch Book</span>
                      </button>
                      {onQuickAddToChecklist && (
                        <button
                          onClick={() => {
                            onQuickAddToChecklist(activeCourse, mod);
                            setAddedNoticeModuleId(mod.id);
                            setTimeout(() => setAddedNoticeModuleId(null), 1500);
                          }}
                          className="px-2.5 py-1 rounded bg-[#2C2C30] hover:bg-[#36363B] text-xs font-medium text-[#BFBFC5] hover:text-[#F4F4F6] transition-colors border border-[#36363B] flex items-center gap-1"
                        >
                          {addedNoticeModuleId === mod.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Plus className="w-3 h-3" />}
                          <span>{addedNoticeModuleId === mod.id ? 'Added!' : 'Checklist'}</span>
                        </button>
                      )}
                      <span className="text-xs font-mono text-emerald-400 font-bold">
                        {(mod.pyqs?.length || mod.mcqs?.length || 0)} Solved Problems
                      </span>
                    </div>
                  </div>

                  {/* Question Cards with Dropdown Solutions */}
                  {hasPyqs ? (
                    <div className="space-y-3">
                      {mod.pyqs.map((q, qIdx) => {
                        const isExpanded = !!expandedSolutions[q.id];
                        return (
                          <div key={q.id || qIdx} className="bg-[#18181A] border border-[#36363B] rounded-lg overflow-hidden transition-all">
                            
                            {/* Question Header & Toggle Bar */}
                            <div className="p-4 space-y-2.5">
                              <div className="flex items-center justify-between gap-2 flex-wrap">
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                    {q.marks || '10 Marks'}
                                  </span>
                                  <span className="text-xs font-mono text-[#85858D]">
                                    {q.exam}
                                  </span>
                                </div>

                                <button
                                  onClick={() => toggleDropdownSolution(q.id)}
                                  className="px-3 py-1 rounded bg-[#2C2C30] hover:bg-[#34343A] text-xs font-semibold text-[#85858D] hover:text-[#F4F4F6] transition-colors flex items-center gap-1.5"
                                >
                                  <span>{isExpanded ? 'Hide Solution ▲' : 'View Dropdown Solution ▼'}</span>
                                </button>
                              </div>

                              {/* Question Text */}
                              <div className="text-sm sm:text-base font-semibold text-[#F4F4F6] leading-relaxed pt-1">
                                <FormattedText text={q.question} />
                              </div>
                            </div>

                            {/* Dropdown Solution */}
                            {isExpanded && (
                              <div className="bg-[#18181A] p-5 sm:p-6 border-t border-[#36363B] space-y-3.5 animate-in fade-in duration-150">
                                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 pb-1 border-b border-[#2A2A2E]">
                                  <CheckCircle2 className="w-4 h-4" />
                                  <span>Complete Step-by-Step Solution & Derivations:</span>
                                </div>
                                <div className="text-sm sm:text-[15px] text-[#D1D1D6] leading-relaxed font-sans">
                                  <FormattedText text={q.solution} />
                                </div>
                              </div>
                            )}

                          </div>
                        );
                      })}
                    </div>
                  ) : hasMcqs ? (
                    /* EVS / CBT MCQ Dropdown Questions */
                    <div className="space-y-3">
                      {mod.mcqs.map((mcq, mIdx) => {
                        const isExpanded = !!expandedSolutions[mcq.id];
                        return (
                          <div key={mcq.id || mIdx} className="bg-[#18181A] border border-[#36363B] rounded-lg p-4 space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="text-xs sm:text-sm font-bold text-[#F4F4F6]">
                                {mIdx + 1}. {mcq.question}
                              </h4>
                              <button
                                onClick={() => toggleDropdownSolution(mcq.id)}
                                className="px-2.5 py-1 rounded bg-[#2C2C30] hover:bg-[#34343A] text-[11px] font-semibold text-[#85858D] hover:text-[#F4F4F6] transition-colors shrink-0"
                              >
                                {isExpanded ? 'Hide Answer ▲' : 'Show Answer ▼'}
                              </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              {mcq.options.map((opt, oIdx) => (
                                <div key={oIdx} className="p-2.5 rounded bg-[#232326] border border-[#2A2A2E] text-[#BFBFC5]">
                                  {opt}
                                </div>
                              ))}
                            </div>

                            {isExpanded && (
                              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded p-3 text-xs space-y-1">
                                <span className="text-emerald-400 font-bold block">Correct Option: {mcq.correct}</span>
                                <p className="text-[#B0B5C2]">{mcq.rationale}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-[#85858D] italic">No past paper questions recorded for this module yet.</p>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  ExternalLink, 
  Download, 
  FileText, 
  BookOpen, 
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Search,
  Book,
  Sparkles,
  HelpCircle,
  ArrowRight,
  ListOrdered,
  Layers,
  Award
} from 'lucide-react';
import { STATUS_CONFIG } from '../data/courses/index.js';
import KaTeXMath, { FormattedText } from './KaTeXMath.jsx';
import { englishWordBank } from '../data/courses/englishWordBank.js';

export default function ModuleReaderModal({
  isOpen,
  onClose,
  course,
  module,
  currentStatus,
  onUpdateStatus
}) {
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' | 'pyqs' | 'formulas' | 'insights' | 'wordbank' | 'mcqs'
  const [expandedSolutions, setExpandedSolutions] = useState({});
  const [wordBankSearch, setWordBankSearch] = useState('');
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [revealedRationales, setRevealedRationales] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Reset default tab to PDF when opening a new module
      setActiveTab('pdf');
      setExpandedSolutions({});
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, module?.id, onClose]);

  if (!isOpen || !course || !module) return null;

  const statusConfig = STATUS_CONFIG[currentStatus] || STATUS_CONFIG.yet_to_start;
  const pdfFileName = module.pdfUrl ? module.pdfUrl.split('/').pop() : `Module-${module.moduleNum}.pdf`;

  const rawUrl = module.pdfUrl || '';
  const baseUrl = import.meta.env.BASE_URL || '/';
  const finalPdfUrl = rawUrl.startsWith('/')
    ? `${baseUrl.replace(/\/$/, '')}${rawUrl}`
    : rawUrl;

  const handleOpenNewTab = () => {
    if (finalPdfUrl) {
      window.open(finalPdfUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const toggleSolution = (id) => {
    setExpandedSolutions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectMCQ = (qId, optionKey) => {
    setMcqAnswers(prev => ({
      ...prev,
      [qId]: optionKey
    }));
    setRevealedRationales(prev => ({
      ...prev,
      [qId]: true
    }));
  };

  const isEnglishCourse = course.id === 'BAENG101' || course.code === 'BAENG101';
  const isEvsCourse = course.id === 'BCHY102' || course.id === 'BACHY101' || course.code.includes('CHY10') || course.isMCQExam;

  const pyqCount = module.pyqs ? module.pyqs.length : 0;
  const mcqCount = module.mcqs ? module.mcqs.length : 0;

  // Filter word bank if in English course
  const filteredWords = englishWordBank.filter(item => {
    const q = wordBankSearch.toLowerCase().trim();
    if (!q) return true;
    return item.term.toLowerCase().includes(q) || 
           item.class.toLowerCase().includes(q) || 
           item.differentia.toLowerCase().includes(q);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-150">
      
      {/* Fullscreen PDF Textbook Viewer Modal */}
      <div className="relative w-full max-w-7xl h-[96vh] flex flex-col bg-[#0B0C0E] border border-[#22252C] rounded-xl shadow-2xl overflow-hidden font-sans">
        
        {/* Top Header Bar */}
        <div className="flex-shrink-0 bg-[#14161C] border-b border-[#22252C] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          
          {/* Module Identification */}
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded text-xs font-bold font-mono uppercase bg-[#1B1E26] text-white border border-[#2B2F3A]">
              {course.code}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Module {module.moduleNum}: {module.title}
                </h3>
                <span className="text-xs font-semibold text-[#EB0029]">
                  ({module.co})
                </span>
              </div>
              <div className="text-[11px] text-[#8E93A0] flex items-center gap-2">
                <span>VIT Complete Textbook</span>
                <span className="text-[#555966]">•</span>
                <span className="text-[#B0B5C2] font-mono text-[10px]">{pdfFileName}</span>
              </div>
            </div>
          </div>

          {/* Action & Category Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            
            {/* The 4 Category Selection Buttons */}
            <div className="flex items-center gap-1 bg-[#0B0C0E] p-1 rounded-lg border border-[#22252C]">
              <span className="text-[10px] text-[#656A76] pl-1.5 font-medium hidden md:inline">Status:</span>
              {[
                { id: 'not_confident', label: '🔴 Not Confident' },
                { id: 'need_to_revise', label: '🟡 Need to Revise' },
                { id: 'yet_to_start', label: '⚪ Yet to Start' },
                { id: 'strong', label: '🟢 Strong' }
              ].map(cat => {
                const isSelected = currentStatus === cat.id;
                const cfg = STATUS_CONFIG[cat.id];
                return (
                  <button
                    key={cat.id}
                    onClick={() => onUpdateStatus(module.id, cat.id)}
                    className={`px-2.5 py-1 rounded text-[10px] sm:text-xs font-medium transition-all border ${
                      isSelected 
                        ? `${cfg.bg} ${cfg.text} ${cfg.border} font-bold shadow-sm` 
                        : 'bg-[#14161C] border-[#22252C] text-[#8E93A0] hover:text-white'
                    }`}
                    title={`Classify module as ${cat.label}`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Open in New Window/Tab */}
            <button
              onClick={handleOpenNewTab}
              className="p-1.5 sm:px-3 sm:py-1 rounded-lg bg-[#1B1E26] hover:bg-[#252834] text-[#8E93A0] hover:text-white border border-[#2B2F3A] transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Open full PDF textbook in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in New Tab</span>
            </button>

            {/* Direct PDF Download */}
            <a
              href={finalPdfUrl}
              download={pdfFileName}
              className="p-1.5 sm:px-3 sm:py-1 rounded-lg bg-[#1B1E26] hover:bg-[#252834] text-[#8E93A0] hover:text-white border border-[#2B2F3A] transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Download module PDF notes"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1B1E26] hover:bg-[#EB0029]/20 text-[#8E93A0] hover:text-white border border-[#2B2F3A] transition-colors"
              title="Close PDF Viewer (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Navigation Tab Bar */}
        <div className="flex-shrink-0 bg-[#0F1117] border-b border-[#22252C] px-4 sm:px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
          
          {/* Tab 1: PDF Textbook */}
          <button
            onClick={() => setActiveTab('pdf')}
            className={`py-2.5 px-3.5 text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
              activeTab === 'pdf'
                ? 'border-[#EB0029] text-white bg-[#14161C]/50'
                : 'border-transparent text-[#8E93A0] hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#EB0029]" />
            <span>📖 Unabridged PDF Book</span>
          </button>

          {/* Tab 2: Question Bank & Past FAT PYQs */}
          <button
            onClick={() => setActiveTab('pyqs')}
            className={`py-2.5 px-3.5 text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
              activeTab === 'pyqs'
                ? 'border-[#EB0029] text-white bg-[#14161C]/50'
                : 'border-transparent text-[#8E93A0] hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>🎯 Question Bank & FAT PYQs</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-[#1E212B] text-emerald-300">
              {pyqCount || mcqCount} Solved
            </span>
          </button>

          {/* Tab 3: Master Formula Sheet & Blueprint */}
          {module.formulaSheet && module.formulaSheet.length > 0 && (
            <button
              onClick={() => setActiveTab('formulas')}
              className={`py-2.5 px-3.5 text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
                activeTab === 'formulas'
                  ? 'border-[#EB0029] text-white bg-[#14161C]/50'
                  : 'border-transparent text-[#8E93A0] hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>📐 Master Formulas & Blueprint</span>
            </button>
          )}

          {/* Tab 4: Faculty Exam Traps & Insights */}
          {module.examInsights && module.examInsights.length > 0 && (
            <button
              onClick={() => setActiveTab('insights')}
              className={`py-2.5 px-3.5 text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
                activeTab === 'insights'
                  ? 'border-[#EB0029] text-white bg-[#14161C]/50'
                  : 'border-transparent text-[#8E93A0] hover:text-white'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>💡 Exam Traps & Faculty Advice</span>
            </button>
          )}

          {/* Special Tab 5: 100-Word Official Definition Bank (For English) */}
          {isEnglishCourse && (
            <button
              onClick={() => setActiveTab('wordbank')}
              className={`py-2.5 px-3.5 text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
                activeTab === 'wordbank'
                  ? 'border-[#EB0029] text-white bg-[#14161C]/50'
                  : 'border-transparent text-[#8E93A0] hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>🔤 100-Word Definition Bank (FAT Q5)</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-pink-950/50 text-pink-300">
                100 Words
              </span>
            </button>
          )}

          {/* Special Tab 6: CBT MCQs (For Environmental Sciences) */}
          {isEvsCourse && (
            <button
              onClick={() => setActiveTab('mcqs')}
              className={`py-2.5 px-3.5 text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
                activeTab === 'mcqs'
                  ? 'border-[#EB0029] text-white bg-[#14161C]/50'
                  : 'border-transparent text-[#8E93A0] hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>⚡ CBT MCQ Practice Test</span>
            </button>
          )}

        </div>

        {/* Modal Main Body Content */}
        <div className="relative flex-1 w-full h-full bg-[#0B0C0E] overflow-hidden flex flex-col">
          
          {/* TAB 1: PDF Viewer View with Quick Jump Banner */}
          {activeTab === 'pdf' && (
            <div className="relative w-full h-full flex flex-col">
              
              {/* Quick Jump Bar directly linking to Worked Questions & PYQs */}
              <div className="flex-shrink-0 bg-[#14161C] border-b border-[#22252C] px-4 py-2 flex items-center justify-between text-xs">
                <span className="text-[#8E93A0] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#EB0029]" />
                  <span>Viewing authentic unabridged PDF textbook for <strong>Module {module.moduleNum}</strong>.</span>
                </span>
                <button
                  onClick={() => setActiveTab('pyqs')}
                  className="px-3 py-1 rounded bg-[#EB0029] hover:bg-[#d00024] text-white font-bold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Go to Question Bank & Worked PYQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Embedded PDF iframe */}
              <div className="relative flex-1 w-full h-full bg-[#0B0C0E] overflow-hidden">
                {finalPdfUrl ? (
                  <iframe
                    src={`${finalPdfUrl}#toolbar=1&navpanes=1&view=FitH`}
                    title={`Module ${module.moduleNum} Textbook`}
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4">
                    <BookOpen className="w-16 h-16 text-[#EB0029] opacity-40" />
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        PDF Textbook Compiling
                      </h4>
                      <p className="text-xs text-[#8E93A0] max-w-md">
                        This module's textbook is being formatted according to the official VIT syllabus.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: Worked Question Bank & Past FAT PYQs */}
          {activeTab === 'pyqs' && (
            <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
              
              {/* Header Banner */}
              <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Module {module.moduleNum} Question Bank & Past FAT Vault
                    </h3>
                  </div>
                  <p className="text-xs text-[#8E93A0]">
                    Fully worked, step-by-step solutions to official VIT Department Question Bank and recent FAT exam papers.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('pdf')}
                  className="px-3 py-1.5 rounded-lg bg-[#1B1E26] hover:bg-[#252834] text-[#8E93A0] hover:text-white border border-[#2B2F3A] text-xs font-medium transition-colors flex items-center gap-2 shrink-0"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#EB0029]" />
                  <span>Back to PDF Textbook</span>
                </button>
              </div>

              {/* Solved Problems List */}
              {module.pyqs && module.pyqs.length > 0 ? (
                <div className="space-y-4">
                  {module.pyqs.map((q, qIdx) => {
                    const isExpanded = expandedSolutions[q.id] !== false; // default expanded
                    return (
                      <div 
                        key={q.id || qIdx}
                        className="bg-[#14161C] border border-[#22252C] rounded-xl overflow-hidden transition-all"
                      >
                        {/* Question Header */}
                        <div className="p-4 sm:p-5 border-b border-[#1C1F26] space-y-3">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                {q.marks || '10 Marks'}
                              </span>
                              <span className="text-xs font-mono text-[#8E93A0]">
                                {q.exam}
                              </span>
                            </div>
                            <button
                              onClick={() => toggleSolution(q.id)}
                              className="text-xs text-[#8E93A0] hover:text-white flex items-center gap-1 font-medium transition-colors"
                            >
                              <span>{isExpanded ? 'Hide Solution' : 'Reveal Solution'}</span>
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>
                          </div>

                          {/* The Problem Statement with KaTeX math */}
                          <div className="text-sm font-semibold text-white leading-relaxed">
                            <FormattedText text={q.question} />
                          </div>
                        </div>

                        {/* Step-by-Step Solution */}
                        {isExpanded && (
                          <div className="bg-[#0B0C0E]/70 p-4 sm:p-5 border-t border-[#1C1F26] space-y-3 animate-in fade-in duration-100">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Step-by-Step Rigorous Derivation / Solution:</span>
                            </div>
                            
                            <div className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed font-sans space-y-2">
                              <FormattedText text={q.solution} />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : module.mcqs && module.mcqs.length > 0 ? (
                /* If module has MCQs instead of traditional written PYQs (e.g. EVS) */
                <div className="space-y-4">
                  {module.mcqs.map((mcq, mIdx) => {
                    const selected = mcqAnswers[mcq.id];
                    const isRevealed = revealedRationales[mcq.id];
                    return (
                      <div key={mcq.id || mIdx} className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-sm font-bold text-white leading-snug">
                            {mIdx + 1}. {mcq.question}
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mcq.options.map((opt, optIdx) => {
                            const optKey = opt.charAt(0);
                            const isCorrectOpt = optKey === mcq.correct;
                            const isSelectedOpt = selected === optKey;

                            let optStyle = 'bg-[#0B0C0E] border-[#22252C] text-[#D1D5DB] hover:border-[#383D4D]';
                            if (isRevealed) {
                              if (isCorrectOpt) {
                                optStyle = 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 font-bold';
                              } else if (isSelectedOpt && !isCorrectOpt) {
                                optStyle = 'bg-red-950/40 border-red-500/50 text-red-300';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectMCQ(mcq.id, optKey)}
                                className={`p-3 rounded-lg border text-left text-xs transition-all flex items-start gap-2 ${optStyle}`}
                              >
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {isRevealed && (
                          <div className="bg-[#0B0C0E] p-3 rounded-lg border border-[#22252C] text-xs text-[#8E93A0] space-y-1">
                            <span className="text-emerald-400 font-bold">Correct Answer: Option {mcq.correct}</span>
                            <p>{mcq.rationale}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-8 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#8E93A0] mx-auto opacity-40" />
                  <p className="text-xs text-[#8E93A0]">Additional solved problems for this module are being formatted into the database.</p>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: Master Formula Sheet & Blueprint */}
          {activeTab === 'formulas' && (
            <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
              
              {/* Module Blueprint */}
              {module.blueprint && (
                <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#EB0029]" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      VIT FAT Exam Weightage & Question Archetypes
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-[#EB0029]">
                    Total Weightage: {module.blueprint.marksTotal}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {module.blueprint.questionTypes.map((qt, qtIdx) => (
                      <div key={qtIdx} className="bg-[#0B0C0E] p-3 rounded-lg border border-[#22252C] space-y-1">
                        <span className="text-xs font-bold text-white block">{qt.type}</span>
                        <p className="text-[11px] text-[#8E93A0] leading-relaxed">
                          <FormattedText text={qt.desc} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Master Formula Cards */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Master Formulas & Substitution Identities</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {module.formulaSheet.map((f, fIdx) => (
                    <div key={fIdx} className="bg-[#14161C] rounded-xl p-4 border border-[#22252C] space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-white">
                        <span>{f.name}</span>
                        {f.note && <span className="text-[10px] text-[#8E93A0] italic font-normal">{f.note}</span>}
                      </div>
                      <div className="bg-[#0B0C0E] p-3 rounded-lg border border-[#22252C] overflow-x-auto text-center text-xs text-white">
                        <KaTeXMath math={f.formula} display={true} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: Faculty Exam Traps & Insights */}
          {activeTab === 'insights' && (
            <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-4 max-w-5xl mx-auto">
              <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">
                    Faculty Exam Insights & High-Scoring Techniques
                  </h3>
                </div>
                <p className="text-xs text-[#8E93A0]">
                  Common evaluation traps where VIT examiners deduct marks, and exact presentation guidelines to secure full 10/10.
                </p>
              </div>

              <div className="space-y-3">
                {module.examInsights.map((ins, insIdx) => (
                  <div key={insIdx} className="bg-[#14161C] border border-amber-500/20 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{ins.title}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed pl-6">
                      <FormattedText text={ins.desc} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SPECIAL TAB 5: 100-Word Official Definition Bank (English Q5) */}
          {activeTab === 'wordbank' && (
            <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
              
              {/* Header & Search */}
              <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-5 h-5 text-pink-400" />
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        BAENG101 Official Definition Word Bank (100 Words)
                      </h3>
                    </div>
                    <p className="text-xs text-[#8E93A0]">
                      FAT Question 5 carries 10 Marks testing these exact 100 words. Format strictly as: <strong>Term = Class (Genus) + Differentia</strong>.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-pink-950/40 text-pink-300 border border-pink-500/30 shrink-0">
                    {filteredWords.length} / 100 Words
                  </span>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 text-[#8E93A0] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search any word (e.g. satellite, drone, walkalator, phishing, renewable energy)..."
                    value={wordBankSearch}
                    onChange={(e) => setWordBankSearch(e.target.value)}
                    className="w-full bg-[#0B0C0E] border border-[#22252C] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#656A76] focus:outline-none focus:border-[#EB0029]"
                  />
                </div>
              </div>

              {/* 100 Words Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredWords.map((item) => (
                  <div key={item.id} className="bg-[#14161C] border border-[#22252C] hover:border-[#383D4D] rounded-xl p-4 space-y-2.5 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="text-xs font-mono text-[#EB0029]">#{item.id}</span>
                        <span>{item.term}</span>
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs bg-[#0B0C0E] p-3 rounded-lg border border-[#22252C]">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-emerald-400 block">Class / Genus:</span>
                        <span className="text-[#D1D5DB]">{item.class}</span>
                      </div>
                      <div className="pt-1">
                        <span className="text-[10px] uppercase font-bold text-blue-400 block">Differentia:</span>
                        <span className="text-[#D1D5DB]">{item.differentia}</span>
                      </div>
                    </div>

                    <div className="pt-1 border-t border-[#1C1F26]">
                      <span className="text-[10px] uppercase font-bold text-[#8E93A0] block mb-0.5">Exam Formal Definition:</span>
                      <p className="text-xs text-[#E5E7EB] font-medium leading-relaxed italic">
                        "{item.formalDefinition}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* SPECIAL TAB 6: CBT MCQs (For Environmental Sciences) */}
          {activeTab === 'mcqs' && (
            <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
              <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Layers className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Online CBT MCQ Exam Simulator (Module {module.moduleNum})
                    </h3>
                  </div>
                  <p className="text-xs text-[#8E93A0]">
                    Official 1-hour MCQ test on Nov 21. Practice with instant feedback and statutory explanations.
                  </p>
                </div>
              </div>

              {module.mcqs && module.mcqs.length > 0 ? (
                <div className="space-y-4">
                  {module.mcqs.map((mcq, mIdx) => {
                    const selected = mcqAnswers[mcq.id];
                    const isRevealed = revealedRationales[mcq.id];
                    return (
                      <div key={mcq.id || mIdx} className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 space-y-4">
                        <h4 className="text-sm font-bold text-white leading-snug">
                          {mIdx + 1}. {mcq.question}
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mcq.options.map((opt, optIdx) => {
                            const optKey = opt.charAt(0);
                            const isCorrectOpt = optKey === mcq.correct;
                            const isSelectedOpt = selected === optKey;

                            let optStyle = 'bg-[#0B0C0E] border-[#22252C] text-[#D1D5DB] hover:border-[#383D4D]';
                            if (isRevealed) {
                              if (isCorrectOpt) {
                                optStyle = 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 font-bold';
                              } else if (isSelectedOpt && !isCorrectOpt) {
                                optStyle = 'bg-red-950/40 border-red-500/50 text-red-300';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectMCQ(mcq.id, optKey)}
                                className={`p-3 rounded-lg border text-left text-xs transition-all flex items-start gap-2 ${optStyle}`}
                              >
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {isRevealed && (
                          <div className="bg-[#0B0C0E] p-3 rounded-lg border border-[#22252C] text-xs text-[#8E93A0] space-y-1">
                            <span className="text-emerald-400 font-bold">Correct Answer: Option {mcq.correct}</span>
                            <p>{mcq.rationale}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-8 text-center space-y-2">
                  <p className="text-xs text-[#8E93A0]">Loading question bank...</p>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

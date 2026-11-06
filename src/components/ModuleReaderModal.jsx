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
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' | 'skim' | 'pyqs'
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

        {/* Strict 3-Category Navigation Tab Bar */}
        <div className="flex-shrink-0 bg-[#0F1117] border-b border-[#22252C] px-4 sm:px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
          
          {/* Category 1: Full Detailed Books (Unabridged PDF) */}
          <button
            onClick={() => setActiveTab('pdf')}
            className={`py-2.5 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
              activeTab === 'pdf'
                ? 'border-[#EB0029] text-white bg-[#14161C]/50'
                : 'border-transparent text-[#8E93A0] hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#EB0029]" />
            <span>📚 Full Detailed Book</span>
          </button>

          {/* Category 2: Skim Notes (Formulas + Blueprint + Faculty Traps) */}
          <button
            onClick={() => setActiveTab('skim')}
            className={`py-2.5 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
              activeTab === 'skim'
                ? 'border-[#EB0029] text-white bg-[#14161C]/50'
                : 'border-transparent text-[#8E93A0] hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>⚡ Skim Notes</span>
          </button>

          {/* Category 3: FAT PYQ with Dropdown Solutions */}
          <button
            onClick={() => setActiveTab('pyqs')}
            className={`py-2.5 px-4 text-xs font-bold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
              activeTab === 'pyqs'
                ? 'border-[#EB0029] text-white bg-[#14161C]/50'
                : 'border-transparent text-[#8E93A0] hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>🎯 FAT PYQ with Dropdown Solutions</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-[#1E212B] text-emerald-300">
              {pyqCount || mcqCount} Solved
            </span>
          </button>

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

          {/* CATEGORY 2: Skim Notes (Formulas, Blueprint & Faculty Traps Combined) */}
          {activeTab === 'skim' && (
            <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
              
              {/* Header Banner */}
              <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Module {module.moduleNum} Skim Notes & Quick Reference
                    </h3>
                  </div>
                  <p className="text-xs text-[#8E93A0]">
                    High-yield summary: Master formulas, official FAT question archetypes, and faculty evaluation traps.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('pyqs')}
                  className="px-3.5 py-1.5 rounded-lg bg-[#EB0029] hover:bg-[#d00024] text-white text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>Practice FAT PYQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 1. Exam Blueprint & Weightage */}
              {module.blueprint && (
                <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#EB0029]" />
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        VIT FAT Exam Blueprint & Question Distribution
                      </h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold font-mono bg-[#EB0029]/10 text-[#FF4A5A] border border-[#EB0029]/30">
                      Total Weightage: {module.blueprint.marksTotal}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {module.blueprint.questionTypes?.map((qt, qtIdx) => (
                      <div key={qtIdx} className="bg-[#0B0C0E] p-3.5 rounded-lg border border-[#22252C] space-y-1">
                        <span className="text-xs font-bold text-white block">{qt.type}</span>
                        <p className="text-[11px] text-[#8E93A0] leading-relaxed">
                          <FormattedText text={qt.desc} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Master Formulas Sheet */}
              {module.formulaSheet && module.formulaSheet.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>Master Formulas & Substitution Identities</span>
                  </h4>
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
              )}

              {/* 3. Faculty Exam Traps & Evaluation Insights */}
              {module.examInsights && module.examInsights.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>Faculty Exam Traps & Evaluation Guidelines</span>
                  </h4>
                  <div className="space-y-3">
                    {module.examInsights.map((ins, insIdx) => (
                      <div key={insIdx} className="bg-[#14161C] border border-amber-500/20 rounded-xl p-4 sm:p-5 space-y-2">
                        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>{ins.title}</span>
                        </div>
                        <div className="text-xs text-[#D1D5DB] leading-relaxed pl-6">
                          <FormattedText text={ins.desc} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Addition: 100-Word Official Definition Bank (Integrated inside Skim Notes for English Mod 3) */}
              {isEnglishCourse && module.moduleNum === 3 && (
                <div className="space-y-4 pt-4 border-t border-[#22252C]">
                  <div className="bg-[#14161C] border border-pink-500/30 rounded-xl p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Sparkles className="w-5 h-5 text-pink-400" />
                          <h4 className="text-sm sm:text-base font-bold text-white">
                            BAENG101 Official Definition Word Bank (100 Words)
                          </h4>
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
                        className="w-full bg-[#0B0C0E] border border-[#22252C] rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-[#656A76] focus:outline-none focus:border-[#EB0029]"
                      />
                    </div>
                  </div>

                  {/* Words Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                    {filteredWords.slice(0, 30).map((item) => (
                      <div key={item.id} className="bg-[#14161C] border border-[#22252C] rounded-lg p-3 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between font-bold text-white">
                          <span className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-[#EB0029]">#{item.id}</span>
                            <span>{item.term}</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8E93A0] italic">
                          "{item.formalDefinition}"
                        </p>
                      </div>
                    ))}
                  </div>
                  {filteredWords.length > 30 && (
                    <p className="text-center text-xs text-[#8E93A0] italic">
                      Showing first 30 matching words. All 100 complete words are printed inside the Module 3 PDF Book!
                    </p>
                  )}
                </div>
              )}

            </div>
          )}

          {/* CATEGORY 3: FAT PYQ with Dropdown Solutions */}
          {activeTab === 'pyqs' && (
            <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
              
              {/* Header Banner */}
              <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Module {module.moduleNum} FAT PYQs & Dropdown Solutions
                    </h3>
                  </div>
                  <p className="text-xs text-[#8E93A0]">
                    Authentic VIT past paper questions and pattern problems. Click any problem to toggle its complete step-by-step dropdown solution.
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
                    const isExpanded = !!expandedSolutions[q.id];
                    return (
                      <div 
                        key={q.id || qIdx}
                        className="bg-[#14161C] border border-[#22252C] hover:border-[#383D4D] rounded-xl overflow-hidden transition-all"
                      >
                        {/* Question Header */}
                        <div className="p-4 sm:p-5 space-y-3">
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
                              className="px-3 py-1 rounded bg-[#1B1E26] hover:bg-[#252834] text-xs font-semibold text-[#8E93A0] hover:text-white transition-colors flex items-center gap-1.5"
                            >
                              <span>{isExpanded ? 'Hide Solution ▲' : 'View Dropdown Solution ▼'}</span>
                            </button>
                          </div>

                          {/* The Problem Statement with KaTeX math */}
                          <div className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                            <FormattedText text={q.question} />
                          </div>
                        </div>

                        {/* Dropdown Step-by-Step Solution */}
                        {isExpanded && (
                          <div className="bg-[#0B0C0E] p-4 sm:p-5 border-t border-[#1C1F26] space-y-3 animate-in fade-in duration-100">
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
                /* CBT MCQs with dropdown answers */
                <div className="space-y-4">
                  {module.mcqs.map((mcq, mIdx) => {
                    const isExpanded = !!expandedSolutions[mcq.id];
                    return (
                      <div key={mcq.id || mIdx} className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-sm font-bold text-white leading-snug">
                            {mIdx + 1}. {mcq.question}
                          </h4>
                          <button
                            onClick={() => toggleSolution(mcq.id)}
                            className="px-3 py-1 rounded bg-[#1B1E26] hover:bg-[#252834] text-xs font-semibold text-[#8E93A0] hover:text-white transition-colors shrink-0"
                          >
                            <span>{isExpanded ? 'Hide Answer ▲' : 'Show Answer ▼'}</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {mcq.options.map((opt, optIdx) => (
                            <div key={optIdx} className="p-3 rounded-lg border border-[#22252C] bg-[#0B0C0E] text-[#D1D5DB]">
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        {isExpanded && (
                          <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-lg p-3 text-xs space-y-1">
                            <span className="text-emerald-400 font-bold">Correct Answer: Option {mcq.correct}</span>
                            <p className="text-[#B0B5C2]">{mcq.rationale}</p>
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

        </div>

      </div>
    </div>
  );
}

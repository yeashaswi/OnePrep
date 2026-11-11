import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  X, 
  ExternalLink, 
  Download, 
  FileText, 
  BookOpen, 
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Sparkles, 
  ArrowRight, 
  Award,
  Maximize2,
  Minimize2,
  Eye,
  Sun,
  Moon,
  Layers
} from 'lucide-react';
import { STATUS_CONFIG } from '../data/courses/index.js';
import KaTeXMath, { FormattedText } from './KaTeXMath.jsx';
import { englishWordBank, topTrickyDefinitions, wordBankClusters } from '../data/courses/englishWordBank.js';

export default function ModuleReaderModal({
  isOpen,
  onClose,
  course,
  module,
  currentStatus,
  onUpdateStatus,
  onSwitchModule
}) {
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' | 'skim' | 'pyqs'
  const [expandedSolutions, setExpandedSolutions] = useState({});
  const [wordBankSearch, setWordBankSearch] = useState('');
  const [selectedCluster, setSelectedCluster] = useState('All');
  
  // Custom reading mode controls
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFocusReadingMode, setIsFocusReadingMode] = useState(false);
  const [readingFilter, setReadingFilter] = useState('normal'); // 'normal' | 'dark' | 'sepia'
  const [zoomLevel, setZoomLevel] = useState('FitH'); // 'FitH' | 'Fit' | '100' | '125' | '150'
  
  const backdropRef = useRef(null);

  // Module navigation within course
  const allModules = course?.modules || [];
  const currentModIndex = allModules.findIndex(m => m.id === module?.id);
  const prevModule = currentModIndex > 0 ? allModules[currentModIndex - 1] : null;
  const nextModule = currentModIndex >= 0 && currentModIndex < allModules.length - 1 ? allModules[currentModIndex + 1] : null;

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      setIsFullscreen(false);
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      if (!document.fullscreenElement && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, [isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFocusReadingMode) {
          setIsFocusReadingMode(false);
        } else if (isFullscreen) {
          toggleFullscreen();
        } else {
          onClose();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          toggleFullscreen();
        }
      } else if (e.key === '[' || (e.altKey && e.key === 'ArrowLeft')) {
        if (prevModule && onSwitchModule) {
          e.preventDefault();
          onSwitchModule(prevModule.id);
        }
      } else if (e.key === ']' || (e.altKey && e.key === 'ArrowRight')) {
        if (nextModule && onSwitchModule) {
          e.preventDefault();
          onSwitchModule(nextModule.id);
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Reset tab to PDF when opening new module
      setActiveTab('pdf');
      setExpandedSolutions({});
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, module?.id, onClose, isFullscreen, isFocusReadingMode, prevModule, nextModule, onSwitchModule]);

  if (!isOpen || !course || !module) return null;

  const statusConfig = STATUS_CONFIG[currentStatus] || STATUS_CONFIG.yet_to_start;
  const pdfFileName = module.pdfUrl ? module.pdfUrl.split('/').pop() : `Module-${module.moduleNum}.pdf`;

  const rawUrl = module.pdfUrl || '';
  const baseUrl = import.meta.env.BASE_URL || '/';
  const finalPdfUrl = rawUrl.startsWith('/')
    ? `${baseUrl.replace(/\/$/, '')}${rawUrl}`
    : rawUrl;

  const pdfViewParam = zoomLevel === 'FitH' ? 'view=FitH' : zoomLevel === 'Fit' ? 'view=Fit' : `zoom=${zoomLevel}`;
  const iframeSrc = finalPdfUrl ? `${finalPdfUrl}#toolbar=1&navpanes=1&${pdfViewParam}` : '';

  const getFilterStyle = () => {
    if (readingFilter === 'dark') {
      return { filter: 'invert(0.9) hue-rotate(180deg) brightness(0.95) contrast(1.05)' };
    }
    if (readingFilter === 'sepia') {
      return { filter: 'sepia(0.35) contrast(1.05) brightness(0.95)' };
    }
    return {};
  };

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

  const isEnglishCourse = course.id === 'BAENG101' || course.code === 'BAENG101';
  const pyqCount = module.pyqs ? module.pyqs.length : 0;
  const mcqCount = module.mcqs ? module.mcqs.length : 0;

  // Filter word bank if in English course with cluster and query matching
  const filteredWords = englishWordBank.filter(item => {
    const q = wordBankSearch.toLowerCase().trim();
    const matchesCluster = selectedCluster === 'All' || item.cluster === selectedCluster;
    if (!matchesCluster) return false;
    if (!q) return true;
    return item.term.toLowerCase().includes(q) || 
           item.class.toLowerCase().includes(q) || 
           item.differentia.toLowerCase().includes(q) ||
           (item.cluster && item.cluster.toLowerCase().includes(q)) ||
           (item.contrastWith && item.contrastWith.toLowerCase().includes(q));
  });

  return (
    <div 
      ref={backdropRef}
      onClick={(e) => {
        if (e.target === backdropRef.current && !isFullscreen) {
          onClose();
        }
      }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-150 ${
        isFullscreen ? 'p-0' : 'p-2 sm:p-4'
      }`}
    >
      
      {/* Top-Right Floating Controls Pill (Always right at top-right edge of browser viewport!) */}
      <div className="fixed top-3 right-4 z-[60] flex items-center gap-2">
        <button
          onClick={toggleFullscreen}
          className="px-3 py-1.5 rounded-lg bg-[#232326]/95 hover:bg-[#2C2C30] text-[#85858D] hover:text-[#F4F4F6] border border-[#36363B] shadow-xl transition-all flex items-center gap-1.5 text-xs font-medium backdrop-blur-md"
          title={isFullscreen ? "Exit Fullscreen (F / Esc)" : "True Fullscreen Reading Mode (F)"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 text-[#E05656]" /> : <Maximize2 className="w-4 h-4 text-[#E05656]" />}
          <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
          <kbd className="hidden md:inline text-[9px] px-1 py-0.2 rounded bg-[#18181A] border border-[#36363B] font-mono text-[#85858D]">F</kbd>
        </button>

        <button
          onClick={onClose}
          className="px-3 py-1.5 rounded-lg bg-[#232326]/95 hover:bg-[#E05656] text-[#85858D] hover:text-[#F4F4F6] border border-[#36363B] hover:border-[#E05656] shadow-xl transition-all flex items-center gap-1.5 text-xs font-bold backdrop-blur-md group"
          title="Close Reader (Esc)"
        >
          <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
          <span>Close</span>
          <kbd className="hidden sm:inline text-[9px] px-1 py-0.2 rounded bg-[#18181A] border border-[#36363B] font-mono text-[#85858D] group-hover:text-white">Esc</kbd>
        </button>
      </div>

      {/* Main Reader Box */}
      <div 
        className={`relative flex flex-col bg-[#18181A] shadow-2xl overflow-hidden font-sans transition-all duration-150 ${
          isFullscreen 
            ? 'w-screen h-screen rounded-none border-0' 
            : 'w-full max-w-7xl h-[96vh] border border-[#36363B] rounded-xl'
        }`}
      >
        
        {/* Top Header Bar (collapsible if in Focus Reading Mode) */}
        {!isFocusReadingMode && (
          <div className="flex-shrink-0 bg-[#232326] border-b border-[#36363B] px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
            
            {/* Left: Course Badge + Module Title + Navigation Switcher */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="px-2 py-0.5 rounded text-xs font-bold font-mono uppercase bg-[#2C2C30] text-[#F4F4F6] border border-[#36363B]">
                {course.code}
              </span>
              
              {/* Module Selector & Prev/Next Quick Navigation */}
              <div className="flex items-center gap-1.5 bg-[#18181A] p-1 rounded-lg border border-[#36363B]">
                <button
                  disabled={!prevModule}
                  onClick={() => prevModule && onSwitchModule && onSwitchModule(prevModule.id)}
                  className="p-1 rounded hover:bg-[#2C2C30] disabled:opacity-30 disabled:cursor-not-allowed text-[#85858D] hover:text-[#F4F4F6] transition-colors"
                  title={prevModule ? `Go to Mod ${prevModule.moduleNum} (${prevModule.title})` : 'No previous module'}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="relative">
                  <select
                    value={module.id}
                    onChange={(e) => onSwitchModule && onSwitchModule(e.target.value)}
                    className="bg-transparent text-xs font-bold text-[#F4F4F6] pr-4 py-0.5 focus:outline-none cursor-pointer"
                    title="Jump directly to any module of this course"
                  >
                    {allModules.map(m => (
                      <option key={m.id} value={m.id} className="bg-[#1E1E21] text-[#F4F4F6]">
                        Module {m.moduleNum}: {m.title.length > 36 ? m.title.slice(0, 36) + '...' : m.title}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  disabled={!nextModule}
                  onClick={() => nextModule && onSwitchModule && onSwitchModule(nextModule.id)}
                  className="p-1 rounded hover:bg-[#2C2C30] disabled:opacity-30 disabled:cursor-not-allowed text-[#85858D] hover:text-[#F4F4F6] transition-colors"
                  title={nextModule ? `Go to Mod ${nextModule.moduleNum} (${nextModule.title})` : 'No next module'}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {module.co && (
                <span className="text-xs font-semibold text-[#E05656] hidden lg:inline">
                  ({module.co})
                </span>
              )}
            </div>

            {/* Right: Status Pills & Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 pr-28 sm:pr-36">
              
              {/* 4 Status Buttons */}
              <div className="flex items-center gap-1 bg-[#18181A] p-0.5 rounded-lg border border-[#36363B]">
                {[
                  { id: 'not_confident', label: '🔴 Not Confident' },
                  { id: 'need_to_revise', label: '🟡 Revise' },
                  { id: 'yet_to_start', label: '⚪ New' },
                  { id: 'strong', label: '🟢 Strong' }
                ].map(cat => {
                  const isSelected = currentStatus === cat.id;
                  const cfg = STATUS_CONFIG[cat.id];
                  return (
                    <button
                      key={cat.id}
                      onClick={() => onUpdateStatus(module.id, cat.id)}
                      className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium transition-all ${
                        isSelected 
                          ? `${cfg.bg} ${cfg.text} font-bold shadow-sm border border-[#4A4A52]` 
                          : 'text-[#85858D] hover:text-[#F4F4F6]'
                      }`}
                      title={`Classify module as ${cat.label}`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Focus Reading Mode Toggle */}
              <button
                onClick={() => setIsFocusReadingMode(!isFocusReadingMode)}
                className="p-1 sm:px-2.5 sm:py-1 rounded-lg bg-[#2C2C30] hover:bg-[#34343A] text-[#85858D] hover:text-[#F4F4F6] border border-[#36363B] transition-colors flex items-center gap-1 text-xs font-medium"
                title="Distraction-Free Focus Reading (Maximizes book canvas)"
              >
                <Eye className="w-3.5 h-3.5 text-[#E05656]" />
                <span className="hidden md:inline">Focus Mode</span>
              </button>

              {/* Open in New Window/Tab */}
              <button
                onClick={handleOpenNewTab}
                className="p-1 sm:px-2.5 sm:py-1 rounded-lg bg-[#2C2C30] hover:bg-[#34343A] text-[#85858D] hover:text-[#F4F4F6] border border-[#36363B] transition-colors flex items-center gap-1 text-xs font-medium"
                title="Open full PDF in a new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">New Tab</span>
              </button>

              {/* Direct PDF Download */}
              <a
                href={finalPdfUrl}
                download={pdfFileName}
                className="p-1 sm:px-2.5 sm:py-1 rounded-lg bg-[#2C2C30] hover:bg-[#34343A] text-[#85858D] hover:text-[#F4F4F6] border border-[#36363B] transition-colors flex items-center gap-1 text-xs font-medium"
                title="Download module PDF notes"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Download</span>
              </a>
            </div>
          </div>
        )}

        {/* Focus Reading Mode Slim Floating Bar */}
        {isFocusReadingMode && (
          <div className="flex-shrink-0 bg-[#232326] border-b border-[#36363B] px-4 py-2 flex items-center justify-between text-xs text-[#F4F4F6] pr-28 sm:pr-36">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-[#E05656]/20 text-[#E05656] font-bold">
                FOCUS READING MODE
              </span>
              <span className="font-bold">
                {course.code} • Module {module.moduleNum}: {module.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={!prevModule}
                onClick={() => prevModule && onSwitchModule && onSwitchModule(prevModule.id)}
                className="px-2 py-1 rounded bg-[#18181A] disabled:opacity-30 border border-[#36363B] hover:bg-[#2C2C30] flex items-center gap-1"
                title="Previous Module ([)"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <button
                disabled={!nextModule}
                onClick={() => nextModule && onSwitchModule && onSwitchModule(nextModule.id)}
                className="px-2 py-1 rounded bg-[#18181A] disabled:opacity-30 border border-[#36363B] hover:bg-[#2C2C30] flex items-center gap-1"
                title="Next Module (])"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsFocusReadingMode(false)}
                className="px-2.5 py-1 rounded bg-[#2C2C30] hover:bg-[#34343A] border border-[#36363B] text-xs font-medium"
              >
                Show Tabs
              </button>
            </div>
          </div>
        )}

        {/* Strict 3-Category Navigation Tab Bar (Hidden in Focus Mode) */}
        {!isFocusReadingMode && (
          <div className="flex-shrink-0 bg-[#1E1E21] border-b border-[#36363B] px-4 sm:px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
            
            {/* Category 1: Full Detailed Books (Unabridged PDF) */}
            <button
              onClick={() => setActiveTab('pdf')}
              className={`py-2 px-3 text-xs font-bold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
                activeTab === 'pdf'
                  ? 'border-[#E05656] text-[#F4F4F6] bg-[#232326]/50'
                  : 'border-transparent text-[#85858D] hover:text-[#F4F4F6]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#E05656]" />
              <span>📚 Full Detailed Book</span>
            </button>

            {/* Category 2: Skim Notes (Formulas + Blueprint + Faculty Traps) */}
            <button
              onClick={() => setActiveTab('skim')}
              className={`py-2 px-3 text-xs font-bold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
                activeTab === 'skim'
                  ? 'border-[#E05656] text-[#F4F4F6] bg-[#232326]/50'
                  : 'border-transparent text-[#85858D] hover:text-[#F4F4F6]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>⚡ Skim Notes</span>
            </button>

            {/* Category 3: FAT PYQ with Dropdown Solutions */}
            <button
              onClick={() => setActiveTab('pyqs')}
              className={`py-2 px-3 text-xs font-bold whitespace-nowrap transition-all border-b-2 -mb-[1px] flex items-center gap-2 ${
                activeTab === 'pyqs'
                  ? 'border-[#E05656] text-[#F4F4F6] bg-[#232326]/50'
                  : 'border-transparent text-[#85858D] hover:text-[#F4F4F6]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>🎯 FAT PYQ with Dropdown Solutions</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-[#2C2C30] text-emerald-300">
                {pyqCount || mcqCount} Solved
              </span>
            </button>
          </div>
        )}

        {/* Modal Main Body Content */}
        <div className="relative flex-1 w-full h-full bg-[#18181A] overflow-hidden flex flex-col">
          
          {/* TAB 1: PDF Viewer View with Custom Reading Toolbar */}
          {activeTab === 'pdf' && (
            <div className="relative w-full h-full flex flex-col">
              
              {/* Custom Reading Mode Toolbar */}
              <div className="flex-shrink-0 bg-[#232326] border-b border-[#36363B] px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                
                {/* Left: Reading Theme / Tint Controller */}
                <div className="flex items-center gap-2">
                  <span className="text-[#85858D] font-medium hidden sm:inline">Theme:</span>
                  <div className="flex items-center gap-1 bg-[#18181A] p-0.5 rounded-lg border border-[#36363B]">
                    <button
                      onClick={() => setReadingFilter('normal')}
                      className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                        readingFilter === 'normal' 
                          ? 'bg-[#2C2C30] text-[#F4F4F6] font-bold shadow-sm' 
                          : 'text-[#85858D] hover:text-[#F4F4F6]'
                      }`}
                      title="Authentic original PDF colors"
                    >
                      Default
                    </button>
                    <button
                      onClick={() => setReadingFilter('dark')}
                      className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all flex items-center gap-1 ${
                        readingFilter === 'dark' 
                          ? 'bg-[#2C2C30] text-[#F4F4F6] font-bold shadow-sm' 
                          : 'text-[#85858D] hover:text-[#F4F4F6]'
                      }`}
                      title="Soft inverted dark reading filter for night study"
                    >
                      <Moon className="w-3 h-3 text-blue-400" />
                      <span>Night Dark</span>
                    </button>
                    <button
                      onClick={() => setReadingFilter('sepia')}
                      className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all flex items-center gap-1 ${
                        readingFilter === 'sepia' 
                          ? 'bg-[#2C2C30] text-[#F4F4F6] font-bold shadow-sm' 
                          : 'text-[#85858D] hover:text-[#F4F4F6]'
                      }`}
                      title="Warm paper tone for easy eye strain relief"
                    >
                      <Sun className="w-3 h-3 text-amber-400" />
                      <span>Sepia</span>
                    </button>
                  </div>
                </div>

                {/* Center / Right: Zoom & Navigation jump */}
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#85858D] text-[11px] hidden md:inline">Fit:</span>
                    <select
                      value={zoomLevel}
                      onChange={(e) => setZoomLevel(e.target.value)}
                      className="bg-[#18181A] border border-[#36363B] text-[11px] text-[#F4F4F6] rounded-md px-2 py-1 focus:outline-none focus:border-[#E05656] cursor-pointer"
                    >
                      <option value="FitH">Fit Width</option>
                      <option value="Fit">Fit Page</option>
                      <option value="100">100%</option>
                      <option value="125">125%</option>
                      <option value="150">150%</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setActiveTab('pyqs')}
                    className="px-2.5 py-1 rounded bg-[#E05656] hover:bg-[#C94545] text-[#F4F4F6] font-bold transition-all flex items-center gap-1 shadow-sm text-[11px]"
                  >
                    <span>Practice FAT PYQs</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Embedded PDF iframe */}
              <div className="relative flex-1 w-full h-full bg-[#18181A] overflow-hidden">
                {finalPdfUrl ? (
                  <iframe
                    key={`${finalPdfUrl}-${zoomLevel}`}
                    src={iframeSrc}
                    title={`Module ${module.moduleNum} Textbook`}
                    className="w-full h-full border-0 transition-all duration-200"
                    style={getFilterStyle()}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4">
                    <BookOpen className="w-16 h-16 text-[#E05656] opacity-40" />
                    <div>
                      <h4 className="text-base font-bold text-[#F4F4F6] mb-1">
                        PDF Textbook Compiling
                      </h4>
                      <p className="text-xs text-[#85858D] max-w-md">
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
              <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#F4F4F6]">
                      Module {module.moduleNum} Skim Notes & Quick Reference
                    </h3>
                  </div>
                  <p className="text-xs text-[#85858D]">
                    High-yield summary: Master formulas, official FAT question archetypes, and faculty evaluation traps.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('pyqs')}
                  className="px-3.5 py-1.5 rounded-lg bg-[#E05656] hover:bg-[#C94545] text-[#F4F4F6] text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>Practice FAT PYQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 1. Exam Blueprint & Weightage */}
              {module.blueprint && (
                <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#E05656]" />
                      <h4 className="text-xs font-bold text-[#F4F4F6] uppercase tracking-wider">
                        VIT FAT Exam Blueprint & Question Distribution
                      </h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold font-mono bg-[#E05656]/10 text-[#E05656] border border-[#E05656]/30">
                      Total Weightage: {module.blueprint.marksTotal}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {module.blueprint.questionTypes?.map((qt, qtIdx) => (
                      <div key={qtIdx} className="bg-[#18181A] p-3.5 rounded-lg border border-[#36363B] space-y-1">
                        <span className="text-xs font-bold text-[#F4F4F6] block">{qt.type}</span>
                        <p className="text-[11px] text-[#85858D] leading-relaxed">
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>Master Formulas & Substitution Identities</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module.formulaSheet.map((f, fIdx) => (
                      <div key={fIdx} className="bg-[#232326] rounded-xl p-4 sm:p-5 border border-[#36363B] space-y-2.5">
                        <div className="flex items-center justify-between text-sm font-bold text-[#F4F4F6] flex-wrap gap-1">
                          <span>{f.name}</span>
                          {f.note && <span className="text-xs text-[#A1A1AA] italic font-normal">{f.note}</span>}
                        </div>
                        <div className="bg-[#18181A] p-3.5 rounded-lg border border-[#2E2E33] overflow-x-auto text-center text-sm sm:text-base text-[#F4F4F6]">
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
                      <div key={insIdx} className="bg-[#232326] border border-amber-500/25 rounded-xl p-5 space-y-2">
                        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>{ins.title}</span>
                        </div>
                        <div className="text-sm text-[#E4E4E7] leading-relaxed pl-6">
                          <FormattedText text={ins.desc} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Addition: 100-Word Official Definition Bank (Integrated inside Skim Notes for English Mod 3) */}
              {isEnglishCourse && module.moduleNum === 3 && (
                <div className="space-y-6 pt-4 border-t border-[#36363B]">
                  
                  {/* Top 15 Tricky & Confusable Words Card */}
                  <div className="bg-[#232326] border border-amber-500/30 rounded-xl p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <AlertTriangle className="w-5 h-5 text-amber-400" />
                          <h4 className="text-sm sm:text-base font-bold text-[#F4F4F6]">
                            Top 15 Tricky & Obscure Definitions (Highest Faculty Trap Probability)
                          </h4>
                        </div>
                        <p className="text-xs text-[#85858D]">
                          Words most students struggle to define formally or confuse with similar concepts (e.g., <em>Bionote vs Resume</em>, <em>Walkalator vs Escalator</em>, <em>Dias vs Stage</em>, <em>Emoticon vs Emoji</em>).
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 shrink-0">
                        15 High-Yield Traps
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {topTrickyDefinitions.map((item) => (
                        <div key={item.id} className="bg-[#18181A] border border-amber-500/20 rounded-lg p-3.5 space-y-2 text-xs">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-1.5 font-bold text-[#F4F4F6]">
                              <span className="text-[10px] font-mono text-amber-400">#{item.id}</span>
                              <span className="text-amber-200">{item.term}</span>
                              {item.phonetic && (
                                <span className="text-[10px] text-[#85858D] font-mono">[{item.phonetic}]</span>
                              )}
                            </div>
                            {item.contrastWith && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded font-mono bg-red-950/40 text-red-300 border border-red-500/30">
                                ⚠️ Contrast: {item.contrastWith}
                              </span>
                            )}
                          </div>
                          <div className="space-y-1 text-[11px] text-[#A0A5B5] leading-relaxed">
                            <div><strong className="text-gray-300">Class:</strong> {item.class}</div>
                            <div><strong className="text-gray-300">Differentia:</strong> {item.differentia}</div>
                            <div className="pt-1 text-[#E5E7EB] italic bg-[#232326]/60 p-2 rounded border border-[#36363B]">
                              "{item.formalDefinition}"
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Complete 100-Word Bank Filterable System */}
                  <div className="bg-[#232326] border border-pink-500/30 rounded-xl p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Sparkles className="w-5 h-5 text-pink-400" />
                          <h4 className="text-sm sm:text-base font-bold text-[#F4F4F6]">
                            BAENG101 Complete 100-Word Definition Bank (Semantic Clusters)
                          </h4>
                          <span className="text-xs text-[#85858D]">
                            Official syllabus words classified by domain. Includes pronunciation and formal 3-part definition.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Semantic Cluster Filter Pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
                      <button
                        onClick={() => setSelectedCluster('All')}
                        className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                          selectedCluster === 'All'
                            ? 'bg-pink-600 text-[#F4F4F6]'
                            : 'bg-[#18181A] border border-[#36363B] text-[#85858D] hover:text-[#F4F4F6]'
                        }`}
                      >
                        All (100)
                      </button>
                      {wordBankClusters.map(c => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedCluster(c.name)}
                          className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                            selectedCluster === c.name
                              ? 'bg-pink-600 text-[#F4F4F6]'
                              : 'bg-[#18181A] border border-[#36363B] text-[#85858D] hover:text-[#F4F4F6]'
                          }`}
                        >
                          {c.name} ({c.count})
                        </button>
                      ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                      <Search className="w-4 h-4 text-[#85858D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search any word or concept (e.g. satellite, drone, walkalator, phishing, renewable energy)..."
                        value={wordBankSearch}
                        onChange={(e) => setWordBankSearch(e.target.value)}
                        className="w-full bg-[#18181A] border border-[#36363B] rounded-xl pl-10 pr-4 py-2 text-xs text-[#F4F4F6] placeholder-[#6E6E78] focus:outline-none focus:border-[#E05656]"
                      />
                    </div>
                  </div>

                  {/* Words Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1">
                    {filteredWords.map((item) => (
                      <div key={item.id} className="bg-[#232326] border border-[#36363B] rounded-lg p-3 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between gap-2 flex-wrap font-bold text-[#F4F4F6]">
                          <span className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-[#E05656]">#{item.id}</span>
                            <span>{item.term}</span>
                            {item.phonetic && (
                              <span className="text-[10px] text-[#6E6E78] font-mono font-normal">[{item.phonetic}]</span>
                            )}
                          </span>
                          {item.contrastWith && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded font-mono bg-[#2C2C30] text-amber-300 border border-amber-500/20">
                              vs {item.contrastWith}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#A0A5B5] leading-relaxed">
                          "{item.formalDefinition}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* CATEGORY 3: FAT PYQ with Dropdown Solutions */}
          {activeTab === 'pyqs' && (
            <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
              
              {/* Header Banner */}
              <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#F4F4F6]">
                      Module {module.moduleNum} FAT PYQs & Dropdown Solutions
                    </h3>
                  </div>
                  <p className="text-xs text-[#85858D]">
                    Authentic VIT past paper questions and pattern problems. Click any problem to toggle its complete step-by-step dropdown solution.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('pdf')}
                  className="px-3 py-1.5 rounded-lg bg-[#2C2C30] hover:bg-[#34343A] text-[#85858D] hover:text-[#F4F4F6] border border-[#36363B] text-xs font-medium transition-colors flex items-center gap-2 shrink-0"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#E05656]" />
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
                        className="bg-[#232326] border border-[#36363B] hover:border-[#4A4A52] rounded-xl overflow-hidden transition-all"
                      >
                        {/* Question Header */}
                        <div className="p-4 sm:p-5 space-y-3">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                {q.marks || '10 Marks'}
                              </span>
                              <span className="text-xs font-mono text-[#85858D]">
                                {q.exam}
                              </span>
                            </div>
                            <button
                              onClick={() => toggleSolution(q.id)}
                              className="px-3 py-1 rounded bg-[#2C2C30] hover:bg-[#34343A] text-xs font-semibold text-[#85858D] hover:text-[#F4F4F6] transition-colors flex items-center gap-1.5"
                            >
                              <span>{isExpanded ? 'Hide Solution ▲' : 'View Dropdown Solution ▼'}</span>
                            </button>
                          </div>

                          {/* The Problem Statement with KaTeX math */}
                          <div className="text-sm sm:text-base font-semibold text-[#F4F4F6] leading-relaxed pt-1">
                            <FormattedText text={q.question} />
                          </div>
                        </div>

                        {/* Dropdown Step-by-Step Solution */}
                        {isExpanded && (
                          <div className="bg-[#18181A] p-5 sm:p-6 border-t border-[#36363B] space-y-3.5 animate-in fade-in duration-150">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 pb-1 border-b border-[#2A2A2E]">
                              <Sparkles className="w-4 h-4" />
                              <span>Step-by-Step Rigorous Derivation / Solution:</span>
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
              ) : module.mcqs && module.mcqs.length > 0 ? (
                /* CBT MCQs with dropdown answers */
                <div className="space-y-4">
                  {module.mcqs.map((mcq, mIdx) => {
                    const isExpanded = !!expandedSolutions[mcq.id];
                    return (
                      <div key={mcq.id || mIdx} className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-sm font-bold text-[#F4F4F6] leading-snug">
                            {mIdx + 1}. {mcq.question}
                          </h4>
                          <button
                            onClick={() => toggleSolution(mcq.id)}
                            className="px-3 py-1 rounded bg-[#2C2C30] hover:bg-[#34343A] text-xs font-semibold text-[#85858D] hover:text-[#F4F4F6] transition-colors shrink-0"
                          >
                            <span>{isExpanded ? 'Hide Answer ▲' : 'Show Answer ▼'}</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {mcq.options.map((opt, optIdx) => (
                            <div key={optIdx} className="p-3 rounded-lg border border-[#36363B] bg-[#18181A] text-[#BFBFC5]">
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
                <div className="bg-[#232326] border border-[#36363B] rounded-xl p-8 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#85858D] mx-auto opacity-40" />
                  <p className="text-xs text-[#85858D]">Additional solved problems for this module are being formatted into the database.</p>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

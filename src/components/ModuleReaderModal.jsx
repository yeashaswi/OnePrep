import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Download, 
  FileText, 
  BookOpen, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { STATUS_CONFIG } from '../data/courses/index.js';
import KaTeXMath from './KaTeXMath.jsx';

export default function ModuleReaderModal({
  isOpen,
  onClose,
  course,
  module,
  currentStatus,
  onUpdateStatus
}) {
  const [showFormulasDrawer, setShowFormulasDrawer] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

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

            {/* Quick Formulas Drawer Toggle */}
            {module.formulaSheet && module.formulaSheet.length > 0 && (
              <button
                onClick={() => setShowFormulasDrawer(!showFormulasDrawer)}
                className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                  showFormulasDrawer
                    ? 'bg-[#EB0029]/15 text-[#EB0029] border-[#EB0029]/40'
                    : 'bg-[#1B1E26] text-[#8E93A0] hover:text-white border-[#2B2F3A]'
                }`}
                title="Toggle Master Formula Sheet"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Formulas</span>
                {showFormulasDrawer ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}

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

        {/* Master Formula Sheet Collapsible Drawer */}
        {showFormulasDrawer && module.formulaSheet && (
          <div className="flex-shrink-0 bg-[#0F1117] border-b border-[#22252C] p-4 max-h-60 overflow-y-auto space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Master Formulas & Key Concepts (Module {module.moduleNum})
              </h4>
              <button
                onClick={() => setShowFormulasDrawer(false)}
                className="text-xs text-[#8E93A0] hover:text-white"
              >
                Hide
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {module.formulaSheet.map((f, fIdx) => (
                <div key={fIdx} className="bg-[#14161C] rounded-lg p-3 border border-[#22252C] space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-white">
                    <span>{f.name}</span>
                    {f.note && <span className="text-[10px] text-[#8E93A0] italic font-normal">{f.note}</span>}
                  </div>
                  <div className="bg-[#0B0C0E] p-2 rounded border border-[#22252C] overflow-x-auto text-center text-xs">
                    <KaTeXMath math={f.formula} display={true} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Embedded Authentic PDF Viewer (iframe) */}
        <div className="relative flex-1 w-full h-full bg-[#0B0C0E] overflow-hidden flex flex-col">
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
    </div>
  );
}

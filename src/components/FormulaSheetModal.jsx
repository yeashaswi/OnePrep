import React, { useState, useEffect } from 'react';
import { 
  X, 
  FileText, 
  Search, 
  Copy, 
  Check, 
  Printer,
  Sparkles
} from 'lucide-react';
import KaTeXMath from './KaTeXMath.jsx';
import { allCourses } from '../data/courses/index.js';

export default function FormulaSheetModal({ isOpen, onClose }) {
  const [activeCourseId, setActiveCourseId] = useState('BMAT101L');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState(null);

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

  if (!isOpen) return null;

  const currentCourse = allCourses.find(c => c.id === activeCourseId) || allCourses[0];

  // Gather all formulas for active course or search across all
  const formulasToDisplay = [];
  allCourses.forEach(course => {
    if (searchTerm || course.id === activeCourseId) {
      course.modules.forEach(mod => {
        if (mod.formulaSheet) {
          mod.formulaSheet.forEach((f, idx) => {
            const matches = !searchTerm || 
              f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              f.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (f.note && f.note.toLowerCase().includes(searchTerm.toLowerCase())) ||
              course.title.toLowerCase().includes(searchTerm.toLowerCase());
            
            if (matches) {
              formulasToDisplay.push({
                ...f,
                id: `${course.id}-${mod.id}-${idx}`,
                courseCode: course.code,
                courseShort: course.shortTitle,
                moduleNum: mod.moduleNum,
                moduleTitle: mod.title
              });
            }
          });
        }
      });
    }
  });

  const copyFormula = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-5xl h-[90vh] flex flex-col bg-[#14161C] border border-[#22252C] rounded-xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex-shrink-0 bg-[#14161C] px-6 py-4 border-b border-[#22252C] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EB0029]" />
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>Master Formula & Reference Sheet</span>
              </h2>
              <p className="text-xs text-[#8E93A0]">
                Formula banks, coordinate transformations, and evaluation rules across all courses.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-1.5 rounded-lg bg-[#1B1E26] text-[#8E93A0] hover:text-white border border-[#2B2F3A] transition-colors"
              title="Print Formula Sheet"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1B1E26] hover:bg-[#EB0029]/20 text-[#8E93A0] hover:text-white border border-[#2B2F3A] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Course Filter Tabs & Search */}
        <div className="flex-shrink-0 bg-[#0B0C0E]/70 p-4 border-b border-[#22252C] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {allCourses.map(c => {
              const isActive = c.id === activeCourseId && !searchTerm;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCourseId(c.id);
                    setSearchTerm('');
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap border ${
                    isActive 
                      ? 'bg-[#EB0029] border-[#EB0029] text-white shadow-sm' 
                      : 'bg-[#14161C] border-[#22252C] text-[#8E93A0] hover:text-white'
                  }`}
                >
                  {c.shortTitle}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#656A76] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search formulas or rules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#14161C] border border-[#22252C] rounded-md pl-9 pr-3 py-1.5 text-xs text-white placeholder-[#656A76] focus:outline-none focus:border-[#EB0029]"
            />
          </div>
        </div>

        {/* Formula Cards Grid */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {formulasToDisplay.length === 0 ? (
            <div className="text-center py-12 text-[#656A76] text-xs">
              No formulas matching "{searchTerm}".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formulasToDisplay.map((item) => (
                <div 
                  key={item.id}
                  className="bg-[#0B0C0E]/60 border border-[#22252C] hover:border-[#2E323E] rounded-xl p-4 flex flex-col justify-between space-y-2.5 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-[#1B1E26] text-white border border-[#2B2F3A]">
                        {item.courseCode} • Mod {item.moduleNum}
                      </span>
                      <button
                        onClick={() => copyFormula(item.id, item.formula)}
                        className="text-[10px] text-[#656A76] hover:text-white flex items-center gap-1 transition-colors"
                        title="Copy LaTeX"
                      >
                        {copiedId === item.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy LaTeX</span>
                          </>
                        )}
                      </button>
                    </div>

                    <h4 className="text-xs font-bold text-white mb-2">
                      {item.name}
                    </h4>

                    <div className="bg-[#14161C] p-3 rounded-lg border border-[#22252C] overflow-x-auto text-center">
                      <KaTeXMath math={item.formula} display={true} />
                    </div>
                  </div>

                  {item.note && (
                    <div className="text-[11px] text-[#8E93A0] italic pt-1 border-t border-[#1C1F26]">
                      {item.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

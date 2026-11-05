import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Search, 
  Filter, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import KaTeXMath, { FormattedText } from './KaTeXMath.jsx';
import { allCourses } from '../data/courses/index.js';

export default function PYQVault({ onOpenModule }) {
  const [selectedCourse, setSelectedCourse] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSolutions, setExpandedSolutions] = useState({});

  // Gather all PYQs across courses
  const allPyqs = useMemo(() => {
    const list = [];
    allCourses.forEach(course => {
      course.modules.forEach(mod => {
        if (mod.pyqs) {
          mod.pyqs.forEach(q => {
            list.push({
              ...q,
              courseId: course.id,
              courseCode: course.code,
              courseTitle: course.title,
              moduleId: mod.id,
              moduleNum: mod.moduleNum,
              moduleTitle: mod.title
            });
          });
        }
      });
    });
    return list;
  }, []);

  const filteredPyqs = useMemo(() => {
    return allPyqs.filter(q => {
      const matchCourse = selectedCourse === 'ALL' || q.courseId === selectedCourse;
      const qText = `${q.question} ${q.exam} ${q.courseTitle} ${q.moduleTitle}`.toLowerCase();
      const matchSearch = !searchQuery || qText.includes(searchQuery.toLowerCase());
      return matchCourse && matchSearch;
    });
  }, [allPyqs, selectedCourse, searchQuery]);

  const toggleSolution = (id) => {
    setExpandedSolutions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* Header & Search */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl font-black text-white tracking-tight">
                VIT High-Yield Question Bank & Past FAT Vault
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Hand-picked 10-Mark and 5-Mark solved questions from recent exams (April 2025, Nov 2024, Fall 2023) and official department question banks.
            </p>
          </div>

          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
            {filteredPyqs.length} Solved Questions Found
          </span>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, formula, or exam slot (e.g. Green's, Nernst, Thevenin, April 2025)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-300 focus:outline-none focus:border-cyan-400"
          >
            <option value="ALL">All Subjects</option>
            {allCourses.map(c => (
              <option key={c.id} value={c.id}>{c.code} - {c.shortTitle}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredPyqs.length === 0 ? (
          <div className="glass-panel rounded-2xl p-8 text-center text-slate-500 text-sm">
            No past paper questions match your filter criteria.
          </div>
        ) : (
          filteredPyqs.map(q => {
            const isExpanded = expandedSolutions[q.id] !== false; // default open

            return (
              <div 
                key={q.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all shadow-lg"
              >
                {/* Question Header */}
                <div className="p-5 border-b border-slate-800/80 space-y-3 bg-slate-950/60">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-800 text-slate-300 border border-slate-700">
                        {q.courseCode}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                        Mod {q.moduleNum}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        {q.exam}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {q.marks}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onOpenModule(q.courseId, q.moduleId)}
                        className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Open Module</span>
                      </button>

                      <button
                        onClick={() => toggleSolution(q.id)}
                        className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
                      >
                        <span>{isExpanded ? 'Collapse' : 'Show Solution'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-white leading-relaxed">
                    <FormattedText text={q.question} />
                  </div>
                </div>

                {/* Solution Body */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 bg-[#080C16] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Step-by-Step Official Solution:</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 whitespace-pre-line font-mono">
                      <FormattedText text={q.solution} />
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}

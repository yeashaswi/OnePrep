import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  BookOpen, 
  RefreshCw,
  Award,
  Layers,
  ChevronRight,
  Search,
  Eye,
  EyeOff,
  Filter,
  Sparkles
} from 'lucide-react';
import { environmentalCourse } from '../data/courses/environmental.js';

export default function EvsMCQPractice({ onOpenModule }) {
  const [selectedModuleNum, setSelectedModuleNum] = useState(0); // 0 = all
  const [userAnswers, setUserAnswers] = useState({}); // { mcqId: selectedOptionLetter }
  const [searchQuery, setSearchQuery] = useState('');
  const [recallMode, setRecallMode] = useState(false); // active self-testing mode inspired by evs-vit.vercel.app
  const [revealedQuestions, setRevealedQuestions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 25;

  // Flatten all MCQs from selected modules
  const filteredMCQs = useMemo(() => {
    let list = [];
    environmentalCourse.modules.forEach(mod => {
      if (selectedModuleNum === 0 || mod.moduleNum === selectedModuleNum) {
        if (mod.mcqs) {
          mod.mcqs.forEach(q => {
            list.push({
              ...q,
              moduleNum: mod.moduleNum,
              moduleTitle: mod.title,
              pdfUrl: mod.pdfUrl,
              moduleId: mod.id
            });
          });
        }
      }
    });

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(m => 
        m.question.toLowerCase().includes(q) || 
        m.options.some(opt => opt.toLowerCase().includes(q)) ||
        m.rationale.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedModuleNum, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredMCQs.length / pageSize) || 1;
  const paginatedMCQs = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredMCQs.slice(start, start + pageSize);
  }, [filteredMCQs, currentPage]);

  // Overall Score across all attempted questions
  const totalAttempted = Object.keys(userAnswers).length;
  let totalCorrect = 0;
  Object.entries(userAnswers).forEach(([qId, ans]) => {
    // Find the question across all modules
    for (const mod of environmentalCourse.modules) {
      const found = mod.mcqs?.find(m => m.id === qId);
      if (found) {
        if (found.correct === ans) totalCorrect++;
        break;
      }
    }
  });

  const handleSelectOption = (mcqId, optionLetter) => {
    if (userAnswers[mcqId]) return; // already answered
    setUserAnswers(prev => ({
      ...prev,
      [mcqId]: optionLetter
    }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setRevealedQuestions({});
  };

  const toggleRevealRecall = (mcqId) => {
    setRevealedQuestions(prev => ({
      ...prev,
      [mcqId]: !prev[mcqId]
    }));
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Top Banner (Peaceful Warm Dark Aesthetic) */}
      <div className="bg-[#232326] border border-[#36363B] rounded-xl p-5 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E05656]" />
              <span className="text-xs font-bold font-mono tracking-wider uppercase text-[#E05656]">
                VIT Vellore CBT Online Exam Simulator
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#F4F4F6] tracking-tight mt-1">
              Environmental Sciences (BCHY102) CBT MCQ Practice
            </h2>
            <p className="text-xs sm:text-sm text-[#85858D] mt-1 max-w-2xl leading-relaxed">
              Modeled around <strong className="text-[#BFBFC5]">evs-vit.vercel.app</strong>. 625 authentic questions organized across all 6 syllabus weeks with interactive Recall self-testing mode.
            </p>
          </div>

          {/* Action Tools: Recall Mode & Score Counter */}
          <div className="flex items-center gap-3 flex-wrap">
            
            {/* Recall Mode Toggle (evs-vit signature feature) */}
            <button
              onClick={() => setRecallMode(!recallMode)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-2 transition-all ${
                recallMode
                  ? 'bg-[#E05656]/20 border-[#E05656] text-[#F4F4F6] shadow-sm'
                  : 'bg-[#18181A] border-[#36363B] text-[#85858D] hover:text-[#F4F4F6]'
              }`}
              title="Hide options to test your recall before answering"
            >
              {recallMode ? <EyeOff className="w-3.5 h-3.5 text-[#E05656]" /> : <Eye className="w-3.5 h-3.5" />}
              <span>Recall Mode: {recallMode ? 'ON' : 'OFF'}</span>
            </button>

            {/* Score Counter Card */}
            <div className="flex items-center gap-3 bg-[#18181A] border border-[#36363B] px-3.5 py-1.5 rounded-lg">
              <div className="text-center">
                <div className="text-[9px] text-[#85858D] uppercase font-semibold">Attempted</div>
                <div className="text-xs font-bold text-[#F4F4F6] font-mono">{totalAttempted}</div>
              </div>
              <div className="h-6 w-[1px] bg-[#36363B]" />
              <div className="text-center">
                <div className="text-[9px] text-[#85858D] uppercase font-semibold">Correct</div>
                <div className="text-xs font-bold text-emerald-400 font-mono">{totalCorrect}</div>
              </div>
              <button
                onClick={handleResetQuiz}
                className="p-1 rounded hover:bg-[#2C2C30] text-[#85858D] hover:text-[#F4F4F6] transition-colors ml-1"
                title="Reset answered questions"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* 4-Week Segment Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#2A2A2E] no-scrollbar">
          <button
            onClick={() => { setSelectedModuleNum(0); setCurrentPage(1); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedModuleNum === 0
                ? 'bg-[#2C2C30] border-[#4A4A52] text-[#F4F4F6] shadow-sm font-bold'
                : 'bg-[#18181A] border-[#36363B] text-[#85858D] hover:text-[#F4F4F6]'
            }`}
          >
            All 6 Weeks ({environmentalCourse.modules.reduce((acc, m) => acc + (m.mcqs?.length || 0), 0)} MCQs)
          </button>
          {environmentalCourse.modules.map(mod => {
            const isSelected = selectedModuleNum === mod.moduleNum;
            const count = mod.mcqs ? mod.mcqs.length : 0;
            return (
              <button
                key={mod.id}
                onClick={() => { setSelectedModuleNum(mod.moduleNum); setCurrentPage(1); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-[#2C2C30] border-[#E05656]/50 text-[#F4F4F6] shadow-sm font-bold'
                    : 'bg-[#18181A] border-[#36363B] text-[#85858D] hover:text-[#F4F4F6]'
                }`}
              >
                <span>Week {mod.moduleNum}: {mod.title.split(':')[1]?.trim() || mod.title}</span>
                <span className="ml-1 text-[10px] font-mono opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Search Bar & Result Count */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#85858D] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics, laws, diseases, numbers, species (e.g. Minamata, 1986, ESP, Lindeman, BOD)..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full bg-[#18181A] border border-[#36363B] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#F4F4F6] placeholder-[#6E6E78] focus:outline-none focus:border-[#E05656]"
            />
          </div>
          <span className="text-xs text-[#85858D] shrink-0 font-mono">
            {filteredMCQs.length} Questions Found
          </span>
        </div>

      </div>

      {/* MCQs List (Clean, Peaceful Card Styling) */}
      <div className="space-y-4">
        {paginatedMCQs.map((mcq, idx) => {
          const selectedAnswer = userAnswers[mcq.id];
          const isAnswered = !!selectedAnswer;
          const isCorrect = selectedAnswer === mcq.correct;
          const isRevealedInRecall = !!revealedQuestions[mcq.id];
          const globalIdx = (currentPage - 1) * pageSize + idx + 1;

          return (
            <div 
              key={mcq.id} 
              className="bg-[#232326] border border-[#36363B] hover:border-[#47474E] rounded-xl p-5 space-y-3.5 transition-all"
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs font-bold font-mono rounded bg-[#2C2C30] text-[#F4F4F6] border border-[#36363B]">
                    Q{globalIdx}
                  </span>
                  <span className="text-xs text-[#85858D] font-medium font-serif">
                    Week {mcq.moduleNum}: {mcq.moduleTitle.split(':')[1]?.trim() || mcq.moduleTitle}
                  </span>
                </div>

                <button
                  onClick={() => onOpenModule('BCHY102', mcq.moduleId || `evs-m${mcq.moduleNum}` || mcq.moduleNum)}
                  className="text-[11px] text-[#E05656] hover:underline flex items-center gap-1 font-semibold"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Open PDF Module</span>
                </button>
              </div>

              {/* Question Statement */}
              <h3 className="text-sm sm:text-base font-serif font-medium text-[#F4F4F6] leading-relaxed">
                {mcq.question}
              </h3>

              {/* Recall Mode Concealment Bar */}
              {recallMode && !isAnswered && !isRevealedInRecall ? (
                <div className="bg-[#18181A] border border-[#36363B] rounded-lg p-4 text-center space-y-2">
                  <span className="text-xs text-[#85858D] block">
                    🧠 Recall Mode Active: Try to recall the answer in your head first before viewing choices.
                  </span>
                  <button
                    onClick={() => toggleRevealRecall(mcq.id)}
                    className="px-3 py-1 rounded bg-[#2C2C30] hover:bg-[#36363B] text-xs font-semibold text-[#F4F4F6] transition-colors"
                  >
                    Reveal Options
                  </button>
                </div>
              ) : (
                /* Options Grid */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {mcq.options.map((opt) => {
                    const letter = opt.charAt(0);
                    const isThisOptionSelected = selectedAnswer === letter;
                    const isThisCorrect = mcq.correct === letter;

                    let optionStyle = 'bg-[#18181A] border-[#36363B] text-[#BFBFC5] hover:border-[#47474E] hover:text-[#F4F4F6]';
                    if (isAnswered) {
                      if (isThisCorrect) {
                        optionStyle = 'bg-emerald-950/30 border-emerald-500/60 text-emerald-300 font-semibold';
                      } else if (isThisOptionSelected && !isCorrect) {
                        optionStyle = 'bg-rose-950/30 border-rose-500/60 text-rose-300 font-semibold';
                      } else {
                        optionStyle = 'bg-[#18181A]/40 border-[#36363B]/60 text-[#6E6E78] opacity-50';
                      }
                    }

                    return (
                      <button
                        key={letter}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(mcq.id, letter)}
                        className={`p-3 rounded-lg text-left text-xs transition-all border flex items-start gap-2.5 ${optionStyle}`}
                      >
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 font-mono ${
                          isAnswered && isThisCorrect 
                            ? 'bg-emerald-500 text-black' 
                            : isAnswered && isThisOptionSelected && !isCorrect 
                              ? 'bg-rose-500 text-white' 
                              : 'bg-[#2C2C30] text-[#85858D]'
                        }`}>
                          {letter}
                        </span>
                        <span className="leading-snug pt-0.5">{opt.slice(3)}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Rationale & Explanation (Revealed when answered) */}
              {isAnswered && (
                <div className={`p-3.5 rounded-lg border text-xs leading-relaxed space-y-1.5 transition-all ${
                  isCorrect 
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200' 
                    : 'bg-rose-950/20 border-rose-500/30 text-rose-200'
                }`}>
                  <div className="flex items-center gap-1.5 font-bold">
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400" />
                    )}
                    <span>
                      {isCorrect ? 'Correct Answer!' : `Incorrect — Correct Option is (${mcq.correct})`}
                    </span>
                  </div>
                  <p className="text-[#BFBFC5] pl-5">
                    {mcq.rationale}
                  </p>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between p-4 bg-[#232326] border border-[#36363B] rounded-xl text-xs text-[#85858D]">
          <span>
            Page <strong className="text-[#F4F4F6]">{currentPage}</strong> of <strong className="text-[#F4F4F6]">{totalPages}</strong> ({filteredMCQs.length} total questions)
          </span>
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-3 py-1.5 rounded-lg bg-[#18181A] border border-[#36363B] hover:text-[#F4F4F6] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Previous 25
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-3 py-1.5 rounded-lg bg-[#18181A] border border-[#36363B] hover:text-[#F4F4F6] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Next 25
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
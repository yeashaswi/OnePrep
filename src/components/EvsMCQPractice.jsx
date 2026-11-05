import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  BookOpen, 
  RefreshCw,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';
import { environmentalCourse } from '../data/courses/environmental.js';

export default function EvsMCQPractice({ onOpenModule }) {
  const [selectedModuleNum, setSelectedModuleNum] = useState(0); // 0 = all
  const [userAnswers, setUserAnswers] = useState({}); // { mcqId: selectedOptionLetter }
  const [showRationales, setShowRationales] = useState({}); // { mcqId: boolean }

  // Flatten all MCQs from selected modules
  const allMCQs = [];
  environmentalCourse.modules.forEach(mod => {
    if (selectedModuleNum === 0 || mod.moduleNum === selectedModuleNum) {
      if (mod.mcqs) {
        mod.mcqs.forEach(q => {
          allMCQs.push({
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

  // Calculate score
  let totalAttempted = 0;
  let totalCorrect = 0;
  allMCQs.forEach(q => {
    const ans = userAnswers[q.id];
    if (ans) {
      totalAttempted++;
      if (ans === q.correct) {
        totalCorrect++;
      }
    }
  });

  const handleSelectOption = (mcqId, optionLetter) => {
    if (userAnswers[mcqId]) return; // already answered
    setUserAnswers(prev => ({
      ...prev,
      [mcqId]: optionLetter
    }));
    setShowRationales(prev => ({
      ...prev,
      [mcqId]: true
    }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowRationales({});
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Top Banner */}
      <div className="bg-[#14161C] border border-[#22252C] rounded-xl p-5 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EB0029]" />
              <span className="text-xs font-bold font-mono tracking-wider uppercase text-[#EB0029]">
                VIT Vellore CBT Online Exam Simulator
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
              Environmental Sciences (BCHY102) CBT MCQ Practice
            </h2>
            <p className="text-xs sm:text-sm text-[#8E93A0] mt-1">
              EVS is evaluated exclusively as a 100% objective Computer-Based Test (CBT) on VTOP/Moodle. Practice high-yield official exam MCQs with real-time scoring and comprehensive rationales.
            </p>
          </div>

          {/* Score Counter Card */}
          <div className="flex items-center gap-4 bg-[#0B0C0E]/70 border border-[#22252C] px-4 py-3 rounded-xl">
            <div className="text-center">
              <div className="text-[10px] text-[#8E93A0] uppercase font-semibold">Attempted</div>
              <div className="text-base font-bold text-white font-mono">{totalAttempted} / {allMCQs.length}</div>
            </div>
            <div className="h-8 w-[1px] bg-[#22252C]" />
            <div className="text-center">
              <div className="text-[10px] text-[#8E93A0] uppercase font-semibold">Score</div>
              <div className="text-base font-bold text-emerald-400 font-mono">{totalCorrect} Correct</div>
            </div>
            <button
              onClick={handleResetQuiz}
              className="p-2 rounded-lg bg-[#1B1E26] hover:bg-[#252834] text-[#8E93A0] hover:text-white transition-colors"
              title="Reset practice test"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Module Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#1C1F26] no-scrollbar">
          <button
            onClick={() => setSelectedModuleNum(0)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedModuleNum === 0
                ? 'bg-[#EB0029] border-[#EB0029] text-white shadow-sm'
                : 'bg-[#0B0C0E]/60 border-[#22252C] text-[#8E93A0] hover:text-white'
            }`}
          >
            All Modules ({allMCQs.length} MCQs)
          </button>
          {environmentalCourse.modules.map(mod => {
            const isSelected = selectedModuleNum === mod.moduleNum;
            const count = mod.mcqs ? mod.mcqs.length : 0;
            return (
              <button
                key={mod.id}
                onClick={() => setSelectedModuleNum(mod.moduleNum)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-[#EB0029] border-[#EB0029] text-white shadow-sm'
                    : 'bg-[#0B0C0E]/60 border-[#22252C] text-[#8E93A0] hover:text-white'
                }`}
              >
                Mod {mod.moduleNum}: {mod.title.split(' ')[0]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* MCQs List */}
      <div className="space-y-4">
        {allMCQs.map((mcq, idx) => {
          const selectedAnswer = userAnswers[mcq.id];
          const isAnswered = !!selectedAnswer;
          const isCorrect = selectedAnswer === mcq.correct;

          return (
            <div 
              key={mcq.id} 
              className="bg-[#14161C] border border-[#22252C] hover:border-[#2E3340] rounded-xl p-5 space-y-4 transition-all"
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs font-bold font-mono rounded bg-[#1B1E26] text-white border border-[#2B2F3A]">
                    Q{idx + 1}
                  </span>
                  <span className="text-xs text-[#8E93A0] font-medium">
                    Mod {mcq.moduleNum}: {mcq.moduleTitle}
                  </span>
                </div>

                <button
                  onClick={() => onOpenModule('BCHY102', mcq.moduleId)}
                  className="text-[11px] text-[#EB0029] hover:underline flex items-center gap-1 font-semibold"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Open PDF Module</span>
                </button>
              </div>

              {/* Question Statement */}
              <h3 className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                {mcq.question}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mcq.options.map((opt) => {
                  const letter = opt.charAt(0);
                  const isThisOptionSelected = selectedAnswer === letter;
                  const isThisCorrect = mcq.correct === letter;

                  let optionStyle = 'bg-[#0B0C0E]/60 border-[#22252C] text-[#B0B5C2] hover:border-[#3A3F4E] hover:text-white';
                  if (isAnswered) {
                    if (isThisCorrect) {
                      optionStyle = 'bg-emerald-950/30 border-emerald-500/60 text-emerald-300 font-semibold';
                    } else if (isThisOptionSelected && !isCorrect) {
                      optionStyle = 'bg-rose-950/30 border-rose-500/60 text-rose-300 font-semibold';
                    } else {
                      optionStyle = 'bg-[#0B0C0E]/40 border-[#22252C]/60 text-[#656A76] opacity-60';
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
                            : 'bg-[#1E212B] text-[#9499A8]'
                      }`}>
                        {letter}
                      </span>
                      <span className="leading-snug pt-0.5">{opt.slice(3)}</span>
                    </button>
                  );
                })}
              </div>

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
                  <p className="text-[#C0C5D2] pl-5">
                    {mcq.rationale}
                  </p>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}

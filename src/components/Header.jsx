import React from 'react';
import { 
  Calendar, 
  BookOpen, 
  Layers, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles,
  SlidersHorizontal,
  GraduationCap
} from 'lucide-react';

export default function Header({ 
  selectedExam, 
  setSelectedExam, 
  daysLeft, 
  setDaysLeft, 
  activeTab, 
  setActiveTab,
  onOpenFormulaModal,
  onOpenCourseConfig,
  readinessPercentage
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#18181A]/95 backdrop-blur-md border-b border-[#36363B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between h-18 py-3.5 gap-4">
          
          {/* Logo with Serif Heading */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#2C2C30] text-[#F4F4F6] font-serif font-bold text-lg border border-[#36363B] shadow-sm">
              OP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-serif font-bold tracking-tight text-[#F4F4F6]">
                  One<span className="text-[#E05656]">Prep</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-[#232326] text-[#85858D] border border-[#36363B]">
                  VIT Vellore
                </span>
              </div>
              <p className="text-xs text-[#85858D] hidden sm:block">
                Study Planner • Formula Vault • Question Banks
              </p>
            </div>
          </div>

          {/* Clean Segmented Exam Mode Switcher */}
          <div className="hidden md:flex items-center p-1 rounded-lg bg-[#232326] border border-[#36363B]">
            {[
              { id: 'fat', label: 'FAT (Final Exam)', sub: 'All Modules' },
              { id: 'cat1', label: 'CAT-1', sub: 'Mod 1-2' },
              { id: 'cat2', label: 'CAT-2', sub: 'Mod 3-4' }
            ].map(exam => {
              const isActive = selectedExam === exam.id;
              return (
                <button
                  key={exam.id}
                  onClick={() => setSelectedExam(exam.id)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all duration-150 flex items-center gap-1.5 ${
                    isActive 
                      ? 'bg-[#2C2C30] text-[#F4F4F6] border border-[#4A4A52] shadow-sm' 
                      : 'text-[#85858D] hover:text-[#BFBFC5] hover:bg-[#2C2C30]/50'
                  }`}
                >
                  <span>{exam.label}</span>
                  <span className={`text-[10px] px-1 py-0.2 rounded ${
                    isActive ? 'bg-[#18181A] text-[#E05656]' : 'bg-[#1E1E21] text-[#656A76]'
                  }`}>
                    {exam.sub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Days Left & Readiness Progress */}
          <div className="flex items-center gap-3">
            
            {/* Days Left Controller */}
            <div className="flex items-center gap-2 bg-[#232326] border border-[#36363B] rounded-lg px-3 py-1.5">
              <Calendar className="w-4 h-4 text-[#E05656]" />
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#85858D]">Days Left:</span>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={daysLeft}
                  onChange={(e) => setDaysLeft(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 bg-[#18181A] border border-[#36363B] rounded px-1.5 py-0.5 text-center text-xs font-bold text-[#F4F4F6] focus:outline-none focus:border-[#E05656]"
                />
              </div>
            </div>

            {/* Overall Exam Readiness Bar */}
            <div className="hidden lg:flex items-center gap-2.5 bg-[#232326] border border-[#36363B] px-3.5 py-1.5 rounded-lg">
              <div className="text-right">
                <div className="text-[10px] text-[#85858D] font-medium uppercase tracking-wider">Readiness</div>
                <div className="text-xs font-bold text-[#F4F4F6]">{readinessPercentage}%</div>
              </div>
              <div className="w-16 h-2 bg-[#18181A] rounded-full overflow-hidden border border-[#36363B]">
                <div 
                  className="h-full bg-[#E05656] rounded-full transition-all duration-300"
                  style={{ width: `${readinessPercentage}%` }}
                />
              </div>
            </div>

            {/* Course Selector Settings Button */}
            <button
              onClick={onOpenCourseConfig}
              className="p-2 rounded-lg bg-[#232326] border border-[#36363B] text-[#85858D] hover:text-[#F4F4F6] hover:border-[#4A4A52] transition-colors"
              title="Filter enrolled subjects"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Peaceful Tab Navigation Bar */}
        <div className="flex items-center gap-1 border-t border-[#2A2A2E] pt-1 overflow-x-auto no-scrollbar">
          {[
            { id: 'modules', label: 'Course Textbooks & Modules', icon: BookOpen, count: null },
            { id: 'today', label: "Today's 1-Click Launch", icon: Layers, highlight: true },
            { id: 'evs_cbt', label: 'EVS CBT MCQ Practice', icon: GraduationCap, badge: 'CBT Only' },
            { id: 'schedule', label: 'Adaptive Study Roadmap', icon: Calendar, count: `${daysLeft}d` }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium whitespace-nowrap transition-all border-b-2 -mb-[1px] ${
                  isActive
                    ? 'border-[#E05656] text-[#F4F4F6] font-semibold bg-[#232326]/40'
                    : 'border-transparent text-[#85858D] hover:text-[#F4F4F6] hover:border-[#36363B]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E05656]' : 'text-[#85858D]'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="px-1.5 py-0.2 text-[10px] font-bold rounded bg-[#E05656]/15 text-[#E05656] border border-[#E05656]/30">
                    {tab.badge}
                  </span>
                )}
                {tab.count && (
                  <span className="px-1.5 py-0.2 text-[10px] rounded bg-[#2C2C30] text-[#BFBFC5]">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}

          <div className="ml-auto flex items-center gap-2 py-1">
            <button
              onClick={onOpenFormulaModal}
              className="text-xs text-[#85858D] hover:text-[#F4F4F6] flex items-center gap-1 px-2.5 py-1 rounded bg-[#232326] border border-[#36363B] hover:border-[#4A4A52] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E05656]" />
              <span>Master Formulas</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

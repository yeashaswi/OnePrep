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
    <header className="sticky top-0 z-40 bg-[#0B0C0E]/95 backdrop-blur-md border-b border-[#22252C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between h-18 py-3 gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#EB0029] text-white font-black text-sm tracking-tight shadow-sm">
              OP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">
                  One<span className="text-[#EB0029]">Prep</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-[#1B1E26] text-[#9499A8] border border-[#2B2F3A]">
                  VIT Vellore
                </span>
              </div>
              <p className="text-xs text-[#8E93A0] hidden sm:block">
                Study Planner • Formula Vault • Question Banks
              </p>
            </div>
          </div>

          {/* Clean Segmented Exam Mode Switcher */}
          <div className="hidden md:flex items-center p-1 rounded-lg bg-[#14161C] border border-[#22252C]">
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
                      ? 'bg-[#EB0029] text-white shadow-sm' 
                      : 'text-[#8E93A0] hover:text-white hover:bg-[#1E212B]'
                  }`}
                >
                  <span>{exam.label}</span>
                  <span className={`text-[10px] px-1 py-0.2 rounded ${
                    isActive ? 'bg-black/20 text-white/90' : 'bg-[#22252C] text-[#656A76]'
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
            <div className="flex items-center gap-2 bg-[#14161C] border border-[#22252C] rounded-lg px-3 py-1.5">
              <Calendar className="w-4 h-4 text-[#EB0029]" />
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#8E93A0]">Days Left:</span>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={daysLeft}
                  onChange={(e) => setDaysLeft(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 bg-[#1B1E26] border border-[#2E323E] rounded px-1.5 py-0.5 text-center text-xs font-bold text-white focus:outline-none focus:border-[#EB0029]"
                />
              </div>
            </div>

            {/* Overall Exam Readiness Bar */}
            <div className="hidden lg:flex items-center gap-2.5 bg-[#14161C] border border-[#22252C] px-3.5 py-1.5 rounded-lg">
              <div className="text-right">
                <div className="text-[10px] text-[#8E93A0] font-medium uppercase tracking-wider">Readiness</div>
                <div className="text-xs font-bold text-white">{readinessPercentage}%</div>
              </div>
              <div className="w-16 h-2 bg-[#1E212B] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#EB0029] rounded-full transition-all duration-300"
                  style={{ width: `${readinessPercentage}%` }}
                />
              </div>
            </div>

            {/* Course Selector Settings Button */}
            <button
              onClick={onOpenCourseConfig}
              className="p-2 rounded-lg bg-[#14161C] border border-[#22252C] text-[#8E93A0] hover:text-white hover:border-[#333744] transition-colors"
              title="Filter enrolled subjects"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Peaceful Tab Navigation Bar */}
        <div className="flex items-center gap-1 border-t border-[#1C1F26] pt-1 overflow-x-auto no-scrollbar">
          {[
            { id: 'modules', label: 'Course Textbooks & Modules', icon: BookOpen, count: null },
            { id: 'today', label: 'Today\'s 1-Click Launch', icon: Layers, highlight: true },
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
                    ? 'border-[#EB0029] text-white font-semibold'
                    : 'border-transparent text-[#8E93A0] hover:text-white hover:border-[#333742]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#EB0029]' : 'text-[#656A76]'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="px-1.5 py-0.2 text-[10px] font-bold rounded bg-[#EB0029]/15 text-[#EB0029] border border-[#EB0029]/30">
                    {tab.badge}
                  </span>
                )}
                {tab.count && (
                  <span className="px-1.5 py-0.2 text-[10px] rounded bg-[#1B1E26] text-[#8E93A0]">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}

          <div className="ml-auto flex items-center gap-2 py-1">
            <button
              onClick={onOpenFormulaModal}
              className="text-xs text-[#8E93A0] hover:text-white flex items-center gap-1 px-2.5 py-1 rounded bg-[#14161C] border border-[#22252C] hover:border-[#333744] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EB0029]" />
              <span>Master Formulas</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

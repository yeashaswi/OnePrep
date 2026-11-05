import React from 'react';
import { X, Check, SlidersHorizontal } from 'lucide-react';
import { allCourses } from '../data/courses/index.js';

export default function CourseSelectorModal({
  isOpen,
  onClose,
  selectedCourseIds,
  onToggleCourse
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-[#14161C] border border-[#22252C] rounded-xl shadow-2xl p-6 space-y-5">
        
        <div className="flex items-center justify-between pb-3 border-b border-[#22252C]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EB0029]" />
            <h3 className="text-base font-bold text-white">Enrolled Semester Courses</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-[#8E93A0] hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#8E93A0] leading-relaxed">
          Toggle the courses you are studying this semester. Your daily schedule and module matrix will adapt accordingly.
        </p>

        <div className="space-y-2">
          {allCourses.map(course => {
            const isSelected = selectedCourseIds.includes(course.id);

            return (
              <div
                key={course.id}
                onClick={() => onToggleCourse(course.id)}
                className={`p-3.5 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                  isSelected 
                    ? 'bg-[#1E212B] border-white/20' 
                    : 'bg-[#0B0C0E]/50 border-[#22252C] opacity-50 hover:opacity-100'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold font-mono text-[#EB0029] uppercase tracking-wide">
                      {course.code}
                    </span>
                    <span className="text-xs text-[#8E93A0]">
                      • {course.credits} Credits • {course.modules.length} Modules
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {course.title}
                  </h4>
                </div>

                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                  isSelected 
                    ? 'bg-[#EB0029] border-[#EB0029] text-white' 
                    : 'border-[#333744] bg-[#0B0C0E]'
                }`}>
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-[#EB0029] hover:bg-[#D00024] text-white transition-colors"
          >
            Save & Update
          </button>
        </div>

      </div>
    </div>
  );
}

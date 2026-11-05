import { calculusCourse } from './calculus.js';
import { chemistryCourse } from './chemistry.js';
import { basicEngCourse } from './basicEng.js';
import { englishCourse } from './english.js';
import { environmentalCourse } from './environmental.js';

export const allCourses = [
  calculusCourse,
  chemistryCourse,
  basicEngCourse,
  englishCourse,
  environmentalCourse
];

export const courseMap = allCourses.reduce((acc, course) => {
  acc[course.id] = course;
  return acc;
}, {});

// Status weights for intelligent schedule prioritization
export const STATUS_WEIGHTS = {
  not_confident: 4,  // High anxiety / friction: Needs maximum derivations, multiple 10M past paper drills
  yet_to_start: 3,   // Unexplored: Needs foundational reading + standard question bank coverage
  need_to_revise: 2, // Concept understood but needs rigorous formula recall and problem practice
  strong: 1          // Solid: Needs only rapid mock testing and formula audit
};

export const STATUS_CONFIG = {
  not_confident: {
    id: 'not_confident',
    label: 'Not Confident',
    color: 'red',
    bg: 'bg-[#EB0029]/10',
    border: 'border-[#EB0029]/40',
    text: 'text-[#FF4A5A]',
    badge: 'bg-[#EB0029]/15 text-[#FF6B7A] border border-[#EB0029]/30',
    dot: 'bg-[#EB0029]',
    icon: 'AlertTriangle'
  },
  need_to_revise: {
    id: 'need_to_revise',
    label: 'Need to Revise',
    color: 'amber',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/40',
    text: 'text-amber-400',
    badge: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    dot: 'bg-amber-400',
    icon: 'HelpCircle'
  },
  yet_to_start: {
    id: 'yet_to_start',
    label: 'Yet to Start',
    color: 'slate',
    bg: 'bg-zinc-800/40',
    border: 'border-zinc-700/40',
    text: 'text-zinc-300',
    badge: 'bg-zinc-800/70 text-zinc-300 border border-zinc-700/50',
    dot: 'bg-zinc-400',
    icon: 'Clock'
  },
  strong: {
    id: 'strong',
    label: 'Strong',
    color: 'emerald',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/40',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    dot: 'bg-emerald-400',
    icon: 'CheckCircle2'
  }
};

/**
 * Generates an adaptive, custom day-by-day revision schedule
 * based on days left, target exam mode, enrolled subjects, and current module mastery statuses.
 */
export function generateAdaptiveSchedule({
  daysLeft = 7,
  selectedExam = 'fat',
  selectedCourseIds = allCourses.map(c => c.id),
  moduleStatuses = {}
}) {
  const schedule = [];
  const days = Math.max(1, parseInt(daysLeft, 10));

  // Determine applicable module numbers for the chosen exam
  let targetModuleFilter;
  if (selectedExam === 'cat1') {
    targetModuleFilter = (m) => m.moduleNum <= 2;
  } else if (selectedExam === 'cat2') {
    targetModuleFilter = (m) => m.moduleNum === 3 || m.moduleNum === 4;
  } else {
    // FAT: All modules (1-5 + Contemporary)
    targetModuleFilter = () => true;
  }

  // Gather all applicable modules across selected courses
  const moduleQueue = [];
  selectedCourseIds.forEach(cId => {
    const course = courseMap[cId];
    if (!course) return;

    course.modules.filter(targetModuleFilter).forEach(mod => {
      const currentStatus = moduleStatuses[mod.id] || mod.status || 'yet_to_start';
      const weight = STATUS_WEIGHTS[currentStatus] || 2;
      moduleQueue.push({
        courseId: course.id,
        courseTitle: course.title,
        courseCode: course.code,
        courseColor: course.color,
        moduleId: mod.id,
        moduleNum: mod.moduleNum,
        moduleTitle: mod.title,
        co: mod.co,
        weightage: mod.weightage,
        status: currentStatus,
        weight,
        pyqCount: mod.pyqs ? mod.pyqs.length : 3
      });
    });
  });

  // Sort queue by priority: Not Confident first, then Yet to Start, Need to Revise, Strong
  moduleQueue.sort((a, b) => b.weight - a.weight);

  // Single Day Crunch (Night Before Exam)
  if (days === 1) {
    schedule.push({
      dayNumber: 1,
      dateLabel: 'Today (Final Countdown Marathon)',
      focusTheme: 'Emergency High-Yield Formulas & Top Repeated 10M Question Bank',
      sessions: moduleQueue.slice(0, 6).map((item, idx) => ({
        id: `day1-s${idx}`,
        timeSlot: idx === 0 ? '08:00 - 10:30 AM' : idx === 1 ? '11:00 - 01:30 PM' : idx === 2 ? '02:30 - 04:30 PM' : idx === 3 ? '05:00 - 07:00 PM' : idx === 4 ? '08:00 - 10:00 PM' : '10:30 - 12:00 AM',
        courseId: item.courseId,
        courseTitle: item.courseTitle,
        courseCode: item.courseCode,
        moduleId: item.moduleId,
        moduleTitle: `Mod ${item.moduleNum}: ${item.moduleTitle}`,
        task: item.status === 'not_confident' 
          ? `High-Alert Blitz: Study Master Formula Sheet & solve 2 critical 10M FAT PYQs step-by-step` 
          : `Rapid Audit: Review Blueprint, avoid common traps & memorize core derivations`,
        durationMinutes: 90,
        status: item.status,
        completed: false
      }))
    });
    return schedule;
  }

  // Multi-day distribution
  const prepDays = Math.max(1, days - (days > 3 ? 1 : 0));
  const modulesPerDay = Math.ceil(moduleQueue.length / prepDays);

  let queueIndex = 0;
  for (let day = 1; day <= prepDays; day++) {
    const dayModules = [];
    const countForToday = Math.min(modulesPerDay, moduleQueue.length - queueIndex);

    for (let i = 0; i < countForToday; i++) {
      if (queueIndex < moduleQueue.length) {
        dayModules.push(moduleQueue[queueIndex++]);
      }
    }

    // Cycle not confident or need to revise modules if extra slots exist
    if (dayModules.length === 0 && moduleQueue.length > 0) {
      const revisit = moduleQueue.filter(m => m.status === 'not_confident' || m.status === 'need_to_revise');
      dayModules.push(revisit[day % revisit.length] || moduleQueue[0]);
    }

    const timeSlots = [
      '09:00 - 11:30 AM (Deep Conceptual Run)',
      '02:00 - 04:30 PM (Worked Question Bank Drill)',
      '06:00 - 08:00 PM (Step-by-Step Derivations)',
      '09:00 - 10:30 PM (Self-Test Problem Run)'
    ];

    schedule.push({
      dayNumber: day,
      dateLabel: day === 1 ? 'Day 1 (Today)' : `Day ${day}`,
      focusTheme: day === 1 
        ? 'High Friction Attack: Conquer your Not Confident modules first' 
        : day === prepDays 
          ? 'Syllabus Closure & High-Yield Past Papers' 
          : 'Core Curriculum Execution & Step-by-Step Calculations',
      sessions: dayModules.map((item, idx) => ({
        id: `day${day}-s${idx}`,
        timeSlot: timeSlots[idx % timeSlots.length],
        courseId: item.courseId,
        courseTitle: item.courseTitle,
        courseCode: item.courseCode,
        moduleId: item.moduleId,
        moduleTitle: `Mod ${item.moduleNum}: ${item.moduleTitle}`,
        task: item.status === 'not_confident'
          ? `Derivation & Traps Focus: Read theory section and calculate 2 Worked Past FAT Problems with zero hints`
          : item.status === 'yet_to_start'
            ? `First Contact: Study Master Formula Sheet & complete all Worked VIT Question Bank examples`
            : item.status === 'need_to_revise'
              ? `Targeted Revision: Check faculty insights, recalculate tricky intermediate steps, and test yourself`
              : `Speed Run: Self-test checklist and verify arithmetic steps`,
        durationMinutes: item.status === 'not_confident' ? 120 : 90,
        status: item.status,
        completed: false
      }))
    });
  }

  // Final Review Day (if days > 3)
  if (days > 3) {
    schedule.push({
      dayNumber: days,
      dateLabel: `Day ${days} (Pre-Exam Day)`,
      focusTheme: 'Grand Consolidation: Formula Sheets, Trap Audits & 2 Full Mock Runs',
      sessions: [
        {
          id: `day${days}-s1`,
          timeSlot: '09:00 AM - 12:00 PM',
          courseId: moduleQueue[0]?.courseId || allCourses[0].id,
          courseTitle: 'All Enrolled Courses',
          courseCode: 'MASTER',
          moduleId: moduleQueue[0]?.moduleId || allCourses[0].modules[0].id,
          moduleTitle: 'Consolidated Formula Sprint',
          task: 'Recite all formulas from Master Formula Sheets without checking; flag any missing constants.',
          durationMinutes: 180,
          status: 'strong',
          completed: false
        },
        {
          id: `day${days}-s2`,
          timeSlot: '02:00 PM - 05:00 PM',
          courseId: moduleQueue[0]?.courseId || allCourses[0].id,
          courseTitle: 'High-Frequency Exam Papers',
          courseCode: 'FAT-QB',
          moduleId: moduleQueue[0]?.moduleId || allCourses[0].modules[0].id,
          moduleTitle: 'Timed Mock Simulation',
          task: 'Simulate full 100-mark paper answering 10 questions in 3 hours with rigorous steps.',
          durationMinutes: 180,
          status: 'not_confident',
          completed: false
        },
        {
          id: `day${days}-s3`,
          timeSlot: '07:30 PM - 09:30 PM',
          courseId: moduleQueue[0]?.courseId || allCourses[0].id,
          courseTitle: 'Exam Hall Traps',
          courseCode: 'PITFALLS',
          moduleId: moduleQueue[0]?.moduleId || allCourses[0].modules[0].id,
          moduleTitle: 'Final Checklist Review',
          task: 'Audit the Faculty Exam Insights and Common Traps (e.g. Verify vs Evaluate, coordinate transformations). Rest early!',
          durationMinutes: 120,
          status: 'strong',
          completed: false
        }
      ]
    });
  }

  return schedule;
}

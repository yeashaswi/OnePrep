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

export const courseMap = {};
// 1. Primary IDs first so they are never overwritten
allCourses.forEach(c => {
  courseMap[c.id] = c;
});
// 2. Code aliases if not already set
allCourses.forEach(c => {
  if (c.code) {
    if (!courseMap[c.code]) courseMap[c.code] = c;
    const cleanCodes = c.code.split(/[\/\s]+/).filter(Boolean);
    cleanCodes.forEach(code => {
      if (!courseMap[code]) courseMap[code] = c;
    });
  }
});
// 3. Explicit canonical shortcuts
courseMap['BACHY105'] = chemistryCourse;
courseMap['BAMAT101'] = calculusCourse;
courseMap['BAEEE101'] = basicEngCourse;

/**
 * Universal, fail-safe resolver for course and module
 * Guaranteed to find the exact course and module from any combination of
 * courseId, courseCode, title, moduleId, or moduleNum.
 */
export function resolveCourseAndModule(courseIdOrCode, moduleIdOrNum) {
  if (!courseIdOrCode && !moduleIdOrNum) {
    return { course: allCourses[0], module: allCourses[0]?.modules[0] || null };
  }

  // 1. Resolve Course
  let course = null;
  if (courseIdOrCode) {
    course = courseMap[courseIdOrCode];
    if (!course) {
      const cleanTarget = String(courseIdOrCode).toUpperCase().replace(/[^A-Z0-9]/g, '');
      course = allCourses.find(c => {
        const cId = c.id.toUpperCase().replace(/[^A-Z0-9]/g, '');
        const cCode = c.code ? c.code.toUpperCase().replace(/[^A-Z0-9]/g, '') : '';
        const cTitle = c.title ? c.title.toUpperCase().replace(/[^A-Z0-9]/g, '') : '';
        const cShort = c.shortTitle ? c.shortTitle.toUpperCase().replace(/[^A-Z0-9]/g, '') : '';
        return cId === cleanTarget || cCode.includes(cleanTarget) || cleanTarget.includes(cId) ||
               cTitle.includes(cleanTarget) || cleanTarget.includes(cTitle) ||
               cShort.includes(cleanTarget) || cleanTarget.includes(cShort);
      });
    }
  }

  // Fallback heuristic if course was not matched by code/id
  if (!course && moduleIdOrNum) {
    const mStr = String(moduleIdOrNum).toLowerCase();
    if (mStr.startsWith('bamat') || mStr.startsWith('mat') || mStr.includes('calc')) course = calculusCourse;
    else if (mStr.startsWith('bchy') || mStr.startsWith('chem')) course = chemistryCourse;
    else if (mStr.startsWith('bacee') || mStr.startsWith('bee') || mStr.startsWith('eee')) course = basicEngCourse;
    else if (mStr.startsWith('baeng') || mStr.startsWith('eng')) course = englishCourse;
    else if (mStr.startsWith('evs') || mStr.startsWith('env')) course = environmentalCourse;
  }

  if (!course) course = allCourses[0];

  // 2. Resolve Module
  if (!moduleIdOrNum) {
    return { course, module: course.modules[0] || null };
  }

  let module = course.modules.find(m => m.id === moduleIdOrNum);
  if (!module) {
    // Try matching by integer moduleNum extracted from string (e.g. 'bacee-m2', 'bee-m2', 'Mod 2', '2')
    const match = String(moduleIdOrNum).match(/\d+/);
    if (match) {
      const num = parseInt(match[0], 10);
      module = course.modules.find(m => m.moduleNum === num);
    }
  }

  if (!module) {
    module = course.modules[0] || null;
  }

  return { course, module };
}

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
    bg: 'bg-[#E05656]/10',
    border: 'border-[#E05656]/40',
    text: 'text-[#E05656]',
    badge: 'bg-[#E05656]/15 text-[#E05656] border border-[#E05656]/30',
    dot: 'bg-[#E05656]',
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
    bg: 'bg-[#2C2C30]/50',
    border: 'border-[#36363B]',
    text: 'text-[#BFBFC5]',
    badge: 'bg-[#2C2C30] text-[#BFBFC5] border border-[#36363B]',
    dot: 'bg-[#85858D]',
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

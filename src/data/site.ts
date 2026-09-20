export { site, seo, faq, topic, common, kitNote } from './institute';
export type { Course, CourseFaq, SeoKeywords, SeoQuestion, SeoTopic } from './institute';
export { courses, getCourse, courseGroups } from './courses';

import { site } from './institute';
import type { CourseFaq, SeoKeywords } from './institute';

/**
 * Category-level target keywords for `/courses/`. Authoring checklist only —
 * never rendered. (A visible list of these was previously published on the page
 * and has been replaced with real prose.)
 */
export const categoryKeywords: SeoKeywords = {
  informational: ["computer courses after 12th", "computer courses after graduation", "best computer courses for beginners", "computer courses for job seekers", "computer skills course", "practical computer training", "job-oriented computer courses", "computer diploma course", "computer training course syllabus", "computer course career options"],
  navigational: ["NAC-MIT Computer Training Center", "computer institute in Dhamtari", "computer classes in Dhamtari", "computer training centre near me", "best computer institute near Kachahari Chowk", "computer institute near Karmchari Bhawan"],
  commercial: ["best computer course in Dhamtari", "computer course fees in Dhamtari", "computer institute fees", "computer course with certificate", "computer course with practical training", "affordable computer courses", "computer course near me", "computer training institute comparison"],
  transactional: ["join computer course in Dhamtari", "computer course admission", "computer classes near me", "enroll in computer training", "book free demo class", "contact computer institute", "computer course registration"]
};

export const categoryFaqs: CourseFaq[] = [
  { question: "Where is NAC-MIT located?", answer: `NAC-MIT Computer Training Center is at ${site.address} — the Karmchari Bhawan building at Kachahari Chowk. The institute is open ${site.instituteHours}.` },
  { question: "What computer courses are available in Dhamtari?", answer: "DCA, PGDCA, Tally Prime, AI, data entry operator, basic computer, MS Office, English typing, Hindi and English typing, and flexible practical computer training." },
  { question: "Which computer course is best after 12th?", answer: "DCA is the usual choice after 12th — it is a full computer diploma course affiliated to Dr. C.V. Raman University and covers fundamentals, MS Office and typing. If you want something shorter first, start with the basic computer course." },
  { question: "Which computer course is best after graduation?", answer: "PGDCA is the natural computer course after graduation, going further into programming logic, databases, SQL and web technology. Graduates who want a shorter, specific skill often choose Tally Prime or the data entry operator course instead." },
  { question: "What are the computer course fees in Dhamtari?", answer: "DCA is ₹12,650 plus examination fee, PGDCA ₹15,650 plus examination fee, Tally Prime and AI ₹5,000 each, the data entry operator course ₹4,000, and typing ₹500 per month. Fees for basic computer, MS Office and practical computer training are confirmed by the institute." },
  { question: "Do you provide a certificate?", answer: "Marksheet and certificate facilities are provided according to eligibility, course rules and applicable affiliation guidelines. DCA and PGDCA run through Dr. C.V. Raman University; other courses receive institute certificate support after completion." },
  { question: "What are the institute hours and batch timings?", answer: `The institute is open ${site.instituteHours}. Fixed batch timings of 8:00–10:00 AM and 10:00 AM–12:00 PM are currently listed for DCA and PGDCA; other course schedules are confirmed at admission.` },
  { question: "Is there a computer for every student?", answer: "Yes. One computer per student is provided for practical training in every course, so the practical hour is genuinely hands-on." },
  { question: "How can I enquire or enrol?", answer: `Visit the institute for direct admission or call ${site.phones[0]} or ${site.phones[1]} for course guidance, fee confirmation and batch availability.` }
];

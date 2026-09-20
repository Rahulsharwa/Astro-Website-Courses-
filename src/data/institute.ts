export const site = {
  name: "NAC-MIT Computer Training Center",
  shortName: "NAC-MIT",
  address: "Karmchari Bhawan, Kachahari Chowk, Dhamtari, Chhattisgarh",
  phones: ["9302789814", "9039989814"],
  mapQuery: "Karmchari Bhawan, Kachahari Chowk, Dhamtari, Chhattisgarh",
  instituteHours: "8:00 AM–6:00 PM",
  affiliation: "DCA and PGDCA courses are affiliated with Dr. C.V. Raman University, Bilaspur, Chhattisgarh."
};

export type SeoKeywords = { informational: string[]; navigational: string[]; commercial: string[]; transactional: string[] };
export type CourseFaq = { question: string; answer: string };
export type SeoQuestion = { id: string; question: string; answer: string };
export type SeoTopic = { id: string; title: string; questions: SeoQuestion[] };

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  fee: string;
  eligibility: string;
  icon: string;
  /** Numeric fee for Course/offers JSON-LD. Omitted where no public price exists. */
  feeAmount?: number;
  feePeriod?: 'month';
  curriculum: string[];
  highlights: string[];
  before: string[];
  after: string[];
  benefits: string[];
  documents?: string[];
  kit?: string[];
  kitNote?: string;
  affiliation?: string;
  batchTimings?: string[];
  /**
   * Target keywords for this course. Authoring checklist only — never rendered.
   * Copy is written to cover these naturally; `<meta name="keywords">` is not emitted.
   */
  keywords: SeoKeywords;
  faqs: CourseFaq[];
  /** Hand-authored. Required, so a course cannot ship with placeholder copy. */
  seoContent: SeoTopic[];
};

export const common = [
  "Experienced faculty and practical, workplace-oriented training",
  "Air-conditioned theory and practical classroom",
  "One computer for each student",
  "Monthly skill-development activities and practical assessments",
  "Doubt-solving support, career guidance and counselling",
  "Placement guidance based on student skills and performance"
];

export const kitNote =
  "Free study material, branded T-shirt, institute bag and student ID card are provided only to DCA, PGDCA and Tally Prime students. Kit distribution is confirmed after admission by the institute.";

const split = (value: string) => value.split("|");

export const seo = (informational: string, navigational: string, commercial: string, transactional: string): SeoKeywords => ({
  informational: split(informational),
  navigational: split(navigational),
  commercial: split(commercial),
  transactional: split(transactional)
});

export const faq = (items: [string, string][]): CourseFaq[] => items.map(([question, answer]) => ({ question, answer }));

/** Builds one anchored topic from authored question/answer pairs. */
export const topic = (id: string, title: string, questions: [string, string][]): SeoTopic => ({
  id,
  title,
  questions: questions.map(([question, answer], index) => ({ id: `${id}-q${index + 1}`, question, answer }))
});

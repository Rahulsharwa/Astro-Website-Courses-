import { site, common, kitNote, seo, faq, topic, type Course } from './institute';

const PHONE = site.phones[0];
const ADDRESS = site.address;

export const courses: Course[] = [
  /* ------------------------------------------------------------------ DCA */
  {
    slug: "dca-course", title: "DCA Course", shortTitle: "DCA", eyebrow: "Diploma in Computer Applications", icon: "01",
    description: "A practical foundation in computer applications, office productivity, typing and everyday digital work.",
    fee: "₹12,650 + examination fee", feeAmount: 12650, eligibility: "12th standard pass", batchTimings: ["8:00–10:00 AM", "10:00 AM–12:00 PM"],
    curriculum: ["Computer fundamentals and operating systems", "MS Word, Excel and PowerPoint", "Typing, internet and email", "File, folder and document management", "Basic database, presentation and cyber-safety concepts"],
    highlights: ["Individual computer facility", "Theory and practical training", "DCA course books and course kit", "T-shirt, institute bag and student ID card", "Marksheet and certificate guidance"],
    before: ["Limited understanding of computer operations", "Difficulty using Windows and basic software", "Little or no knowledge of Word, Excel and PowerPoint", "Limited typing, file-management and office-work confidence"],
    after: ["Confident use of computers and operating systems", "Ability to create documents, spreadsheets and presentations", "Better internet, email, typing and file-management skills", "Improved readiness for entry-level computer jobs and further software learning"],
    benefits: [...common, "Job-oriented training for office applications and entry-level computer work"],
    documents: ["12th standard marksheet or certificate", "Photocopy of Aadhaar Card", "Passport-size photographs"],
    kit: ["DCA study books", "Course notes and practical assignment material", "Computer practice resources", "Branded T-shirt", "Institute bag", "Student ID card"], kitNote,
    affiliation: "NAC-MIT Computer Training Center is a partnered and authorized franchise centre of Dr. C.V. Raman University, Bilaspur, Chhattisgarh, for the DCA course.",
    keywords: seo(
      "What is DCA course|DCA course details|DCA course syllabus|DCA course subjects|DCA course duration|DCA course eligibility|DCA course benefits|What can I do after DCA|DCA career options|DCA computer skills|DCA practical training|DCA course curriculum",
      "NAC-MIT DCA course|NAC-MIT Computer Training Center|DCA institute in Dhamtari|DCA classes in Dhamtari|NAC-MIT Dhamtari|DCA admission NAC-MIT|Dr. C.V. Raman University DCA centre",
      "DCA course fees|DCA course fees in Dhamtari|best DCA institute in Dhamtari|DCA course with certificate|DCA course with practical training|DCA course with placement support|DCA course comparison|affordable DCA course in Dhamtari|DCA course near me",
      "DCA admission in Dhamtari|join DCA course|DCA enrollment|apply for DCA course|DCA admission form|DCA classes near me|book DCA demo class|DCA course contact number"),
    faqs: faq([
      ["What is the DCA eligibility?", "Students who have passed 12th standard can apply for DCA at NAC-MIT. There is no age limit."],
      ["What is the DCA fee?", "The DCA fee is ₹12,650 plus examination fee. Books and course kit are included; the examination fee is paid separately."],
      ["What are the DCA batch timings?", "DCA batches run 8:00–10:00 AM and 10:00 AM–12:00 PM, with one hour of theory and one hour of practical."],
      ["What does the DCA course include?", "Computer fundamentals, MS Office, typing, internet, email, file management, basic databases, cyber safety and practical assignments."],
      ["How do I apply for the DCA course?", `Call ${PHONE} or visit NAC-MIT at ${ADDRESS}. Admission is direct at the institute and the admission form is completed there.`]
    ]),
    seoContent: [
      topic("dca-course-overview", "Course overview and syllabus", [
        ["What is the DCA course?", "DCA stands for Diploma in Computer Applications. It is a practical computer diploma course for students who have finished 12th standard and want a recognised qualification rather than a short skill class. The NAC-MIT DCA course is taught as an authorised centre of Dr. C.V. Raman University, Bilaspur, so the marksheet and certificate come through the university route."],
        ["What does the DCA course syllabus include?", "The DCA syllabus starts with computer fundamentals and operating systems, then moves through MS Word, Excel and PowerPoint, typing, internet and email, and file and folder management. It finishes with basic database and presentation concepts plus cyber safety and digital payments. The DCA computer skills you practise are the ones an office actually uses, and every topic has a practical assignment attached to it."]
      ]),
      topic("dca-course-eligibility", "Duration, eligibility and who it suits", [
        ["What is the DCA course eligibility and duration?", "DCA course eligibility is a 12th standard pass. There is no age limit. Classes run in two-hour daily batches — one hour of theory and one hour of practical — at 8:00–10:00 AM or 10:00 AM–12:00 PM. Course duration follows the university's DCA schedule, so confirm the current session dates with the institute when you enquire."],
        ["Who should join the DCA course?", "DCA suits school leavers who want a computer diploma course on their qualification list, job seekers applying for office and clerical roles, and working people who never learned computers formally. If you only need one skill — typing, or Tally, or Excel — a shorter course will get you there faster and cheaper."]
      ]),
      topic("dca-course-benefits", "Skills, benefits and career options", [
        ["What skills will you have after DCA?", "You will be able to operate a computer and its operating system without help, create documents, spreadsheets and presentations, handle internet, email and online forms, and manage files and folders properly. The DCA course benefits that students mention most are typing speed and the confidence to sit at an unfamiliar computer and get work done."],
        ["What can I do after DCA?", "DCA career options include data entry, office assistant, computer operator and front-desk roles, and the diploma is often asked for in clerical applications. Many students add Tally Prime for accounts work or continue with advanced computer learning after DCA. NAC-MIT provides career guidance and placement guidance based on each student's skills, qualification and performance."]
      ]),
      topic("dca-course-fees", "Fees, certificate and what's included", [
        ["What are the DCA course fees in Dhamtari?", "The DCA course fee at NAC-MIT is ₹12,650 plus the examination fee, which is paid separately to the university. Study books, practical assignment material, a branded T-shirt, institute bag and student ID card are included in that fee. When making a DCA course comparison between institutes, ask specifically whether books, kit and examination charges are inside or outside the quoted number — that is usually where the difference sits."],
        ["Is this a DCA course with certificate, practical training and placement support?", "Yes. Every session includes practical time with one computer per student, so DCA practical training is not shared or demonstrated from the front. Marksheet and certificate facilities are provided according to eligibility, course rules and the university's affiliation guidelines. Placement guidance is offered based on your skills and performance — it is guidance and preparation, not a job guarantee."]
      ]),
      topic("dca-course-admission", "Admission, location and contact", [
        ["How do I join the DCA course in Dhamtari?", `DCA admission in Dhamtari is direct at the institute — there is no online entrance test. To apply for the DCA course, bring your 12th standard marksheet or certificate, a photocopy of your Aadhaar Card and passport-size photographs; the DCA admission form is completed at the centre and DCA enrollment is confirmed the same day. The DCA course contact number is ${PHONE} — call to check batch availability or to book a DCA demo class before you join.`],
        ["Where can I find DCA classes near me in Dhamtari?", `If you are searching for a DCA institute in Dhamtari, NAC-MIT Computer Training Center is at ${ADDRESS}, beside Kachahari Chowk — the building local people know as Karmchari Bhawan. DCA classes in Dhamtari run here daily and the institute is open ${site.instituteHours}. As a Dr. C.V. Raman University DCA centre, the marksheet and certificate route is the university one. Come in during opening hours to see the classroom before deciding; you can sit in on a session.`]
      ])
    ]
  },

  /* ---------------------------------------------------------------- PGDCA */
  {
    slug: "pgdca-course", title: "PGDCA Course", shortTitle: "PGDCA", eyebrow: "Post Graduate Diploma in Computer Applications", icon: "02",
    description: "Deeper learning in software, programming logic, databases, web technology and professional IT applications.",
    fee: "₹15,650 + examination fee", feeAmount: 15650, eligibility: "Graduation pass", batchTimings: ["8:00–10:00 AM", "10:00 AM–12:00 PM"],
    curriculum: ["Computer architecture and operating systems", "Programming logic and application basics", "Database management and SQL concepts", "Web technology and internet applications", "Software engineering and project work"],
    highlights: ["Individual computer facility", "Theory and practical training", "PGDCA course books and course kit", "T-shirt, institute bag and student ID card", "Marksheet and certificate guidance"],
    before: ["Basic or limited knowledge of computer applications", "Difficulty understanding advanced computer concepts", "Limited understanding of databases, software applications and digital records", "Limited technical problem-solving and career direction"],
    after: ["Stronger understanding of computer applications and office productivity", "Better knowledge of databases and application-based work", "Improved technical problem-solving and digital communication", "Readiness for office, administration and data-related roles"],
    benefits: [...common, "Job-oriented preparation for professional computer and administrative work"],
    documents: ["Graduation marksheet or degree certificate", "Photocopy of Aadhaar Card", "Passport-size photographs"],
    kit: ["PGDCA study books", "Subject-wise course material", "Practical assignment material", "Computer application learning resources", "Branded T-shirt", "Institute bag", "Student ID card"], kitNote,
    affiliation: "NAC-MIT Computer Training Center is a partnered and authorized franchise centre of Dr. C.V. Raman University, Bilaspur, Chhattisgarh, for the PGDCA course.",
    keywords: seo(
      "What is PGDCA course|PGDCA course details|PGDCA syllabus|PGDCA subjects|PGDCA course duration|PGDCA eligibility|PGDCA career options|PGDCA course benefits|What can I do after PGDCA|PGDCA practical training|PGDCA course curriculum|PGDCA certificate details",
      "NAC-MIT PGDCA course|PGDCA course NAC-MIT|PGDCA institute in Dhamtari|PGDCA classes in Dhamtari|NAC-MIT PGDCA admission|PGDCA study centre in Dhamtari|Dr. C.V. Raman University PGDCA centre",
      "PGDCA course fees|PGDCA fees in Dhamtari|best PGDCA institute in Dhamtari|PGDCA course with certificate|PGDCA course with practical training|PGDCA course after graduation|PGDCA institute comparison|affordable PGDCA course|PGDCA course near me",
      "PGDCA admission in Dhamtari|join PGDCA course|PGDCA admission form|apply for PGDCA|PGDCA enrollment|PGDCA classes near me|book PGDCA counselling|PGDCA course contact number"),
    faqs: faq([
      ["What is the PGDCA eligibility?", "Students who have completed graduation can apply for PGDCA at NAC-MIT. There is no age limit."],
      ["What is the PGDCA fee?", "The PGDCA fee is ₹15,650 plus examination fee. Subject-wise books and course kit are included."],
      ["What are the PGDCA batch timings?", "PGDCA batches run 8:00–10:00 AM and 10:00 AM–12:00 PM, with one hour of theory and one hour of practical."],
      ["What does PGDCA include?", "Computer architecture, programming logic, database management and SQL, web technology, software engineering and project work."],
      ["How do I apply for PGDCA?", `Call ${PHONE} or visit NAC-MIT at ${ADDRESS}. Bring your graduation marksheet or degree certificate, photocopy of your Aadhaar Card and passport-size photographs; the PGDCA admission form is completed at the institute.`]
    ]),
    seoContent: [
      topic("pgdca-course-overview", "Course overview and syllabus", [
        ["What is the PGDCA course?", "PGDCA is the Post Graduate Diploma in Computer Applications — an advanced course for graduates who want deeper knowledge of software, databases, programming logic and web technology. Where DCA teaches you to use software, PGDCA teaches you how the software works underneath: how data is stored and queried, how programs are structured, how web applications are put together. The NAC-MIT PGDCA course runs as an authorised PGDCA study centre of Dr. C.V. Raman University, Bilaspur."],
        ["What is in the PGDCA syllabus?", "The PGDCA course curriculum covers computer architecture and operating systems, programming logic and application basics, database management and SQL concepts, web technology and internet applications, and software engineering with project work. PGDCA subjects are taught with a practical session attached to each one, and the course finishes with a project you build yourself rather than an exam alone."]
      ]),
      topic("pgdca-course-eligibility", "Duration, eligibility and who it suits", [
        ["What is PGDCA eligibility and course duration?", "PGDCA eligibility is graduation. There is no age limit. It is the natural PGDCA course after graduation for students who want advanced knowledge of databases, programming logic, web technology and software applications. Classes run in two-hour daily batches at 8:00–10:00 AM or 10:00 AM–12:00 PM. PGDCA course duration follows the university session, so check current dates when you enquire."],
        ["Should I do DCA or PGDCA?", "DCA is the available route after 12th and builds a strong foundation in computer applications, MS Office and typing. PGDCA is intended for graduates and goes further into databases, programming logic and web technology. Students unsure which fits can ask for counselling at the centre before enrolling."]
      ]),
      topic("pgdca-course-benefits", "Skills, benefits and career options", [
        ["What are the PGDCA course benefits?", "You come out able to work with databases and structured records rather than just documents, understand how applications are built, handle web and internet technologies, and approach a technical problem methodically. These PGDCA course benefits matter most in roles where you are responsible for data rather than only typing it — record keeping, reporting and administration."],
        ["What can I do after PGDCA?", "PGDCA career options include office administration, data management, computer operator and junior IT support roles, and it strengthens applications for government and clerical posts that ask for a post-graduate computer qualification. NAC-MIT provides career guidance and placement guidance based on the student's skills, qualification and performance."]
      ]),
      topic("pgdca-course-fees", "Fees, certificate and what's included", [
        ["What are the PGDCA fees in Dhamtari?", "The PGDCA course fee is ₹15,650 plus the examination fee paid to the university. Subject-wise study books, practical assignment material, a branded T-shirt, institute bag and student ID card are included. If you are making a PGDCA institute comparison locally, check whether the quoted fee includes books and kit, and whether the centre is actually affiliated — an unaffiliated centre cannot issue a university marksheet."],
        ["Is this a PGDCA course with certificate and practical training?", "Marksheet and certificate facilities are provided according to eligibility, course rules and Dr. C.V. Raman University's affiliation guidelines. PGDCA practical training is delivered with one computer per student throughout, and project work is assessed as part of the course rather than added on at the end."]
      ]),
      topic("pgdca-course-admission", "Admission, location and contact", [
        ["How do I join PGDCA in Dhamtari?", `PGDCA admission in Dhamtari is direct at the institute. To apply for PGDCA, bring your graduation marksheet or degree certificate, a photocopy of your Aadhaar Card and passport-size photographs; the PGDCA admission form is filled in at the centre and PGDCA enrollment is confirmed there. The PGDCA course contact number is ${PHONE} — call to book PGDCA counselling first if you want to discuss whether the course suits your background. NAC-MIT PGDCA admission is open through the year, subject to batch availability.`],
        ["Where can I find PGDCA classes near me in Dhamtari?", `The NAC-MIT PGDCA course runs at ${ADDRESS} — the Karmchari Bhawan building at Kachahari Chowk. If you are looking for a PGDCA institute in Dhamtari or a PGDCA study centre in Dhamtari, this is a Dr. C.V. Raman University PGDCA centre, so the qualification comes through the university. PGDCA classes in Dhamtari run here daily and the institute is open ${site.instituteHours}.`]
      ])
    ]
  },

  /* ---------------------------------------------------------- Tally Prime */
  {
    slug: "tally-prime-course", title: "Tally Prime Course", shortTitle: "Tally Prime", eyebrow: "Accounting software training", icon: "03",
    description: "Build practical confidence with billing, accounting workflows and GST-related accounting exercises.",
    fee: "₹5,000", feeAmount: 5000, eligibility: "Open to all; basic computer familiarity helps",
    curriculum: ["Company creation, groups and ledgers", "Sales, purchase, receipt, payment and journal vouchers", "Billing, inventory and stock management", "GST-related accounting practice", "Banking, reconciliation and financial reports"],
    highlights: ["Practical billing and accounting exercises", "GST-related accounting training", "Course books and course kit", "Tally Prime assignment and practice material", "Certificate support after completion"],
    before: ["No practical knowledge of accounting software", "Difficulty recording transactions, managing ledgers and creating invoices", "Limited understanding of GST-related accounting and business financial records"],
    after: ["Ability to operate Tally Prime confidently", "Ability to create companies and ledgers, record transactions and prepare invoices", "Ability to track expenses, income, outstanding balances and generate reports", "Improved readiness for accounts assistant and billing roles"],
    benefits: [...common, "Practical training for accounts assistant, billing and small-business accounting work"],
    kit: ["Tally Prime study books", "Accounting practice material", "Tally Prime assignment book", "Practical accounting exercises", "Tally Prime learning resources", "Branded T-shirt", "Institute bag", "Student ID card"], kitNote,
    keywords: seo(
      "What is Tally Prime|Tally Prime course details|Tally Prime syllabus|Tally Prime course curriculum|Tally Prime course duration|Tally Prime course eligibility|Tally Prime GST training|Tally Prime accounting course|Tally Prime career options|Tally Prime practical training|Tally Prime for beginners|How to learn Tally Prime",
      "Tally Prime course at NAC-MIT|Tally classes in Dhamtari|NAC-MIT Tally Prime course|Tally Prime classes NAC-MIT|Tally Prime institute in Dhamtari|Tally Prime training centre near me|Tally Prime course Kachahari Chowk",
      "Tally Prime course fees|Tally Prime fees in Dhamtari|best Tally Prime institute in Dhamtari|Tally Prime GST course|Tally Prime course with certificate|Tally Prime course with practical training|affordable Tally Prime course|Tally Prime course near me|Tally Prime course for job",
      "join Tally Prime course|Tally Prime admission in Dhamtari|Tally Prime classes near me|enroll in Tally Prime course|book Tally Prime demo class|Tally Prime course registration|Tally Prime training contact number"),
    faqs: faq([
      ["What is the Tally Prime course fee?", "The Tally Prime course fee is ₹5,000, including books and practice material."],
      ["Is GST included in the Tally training?", "Yes. The course includes GST-related accounting entries, GST invoices and practical accounting exercises."],
      ["Who can join Tally Prime?", "There is no age limit. Beginners, students, shop and business owners, and job seekers can all enquire."],
      ["Do I need accounting knowledge first?", "No. The course starts from company creation and ledgers, so you can begin without a commerce background."],
      ["How do I enrol in Tally Prime?", `Call ${PHONE} or visit NAC-MIT at ${ADDRESS} to register and check the next batch.`]
    ]),
    seoContent: [
      topic("tally-prime-course-overview", "Course overview and syllabus", [
        ["What is Tally Prime and why learn it?", "Tally Prime is the accounting software most small and medium businesses in India actually run their books on — billing, stock, GST returns and day-to-day ledgers. Learning it is less about accounting theory and more about being able to sit at a shop or office computer and record a transaction correctly. That is why the Tally Prime course at NAC-MIT is built around exercises rather than lectures, and why Tally Prime classes NAC-MIT runs are scheduled with a full practical hour every day."],
        ["What is in the Tally Prime syllabus?", "The Tally Prime course curriculum runs from company creation, groups and ledgers, through sales, purchase, receipt, payment and journal vouchers, then billing, inventory and stock management, GST-related accounting practice, and finally banking, reconciliation and financial reports. Each part of the Tally Prime syllabus is practised on real-looking business data so the sequence makes sense by the end."]
      ]),
      topic("tally-prime-course-eligibility", "Duration, eligibility and who it suits", [
        ["What is the Tally Prime course eligibility and duration?", "Tally Prime course eligibility is open — there is no minimum qualification and no age limit, though being comfortable with a keyboard and mouse helps. It is genuinely Tally Prime for beginners: most students arrive with no accounting background at all. Course duration and the current batch schedule are confirmed at admission, so ask when you enquire."],
        ["How to learn Tally Prime if I have never done accounting?", "Start with the vocabulary, not the software. The course spends its first sessions on what a ledger, a voucher and a group actually are, then introduces the screens that match them. Because there is one computer per student, you enter every transaction yourself rather than watching — which is the part that makes it stick."]
      ]),
      topic("tally-prime-course-benefits", "Skills, benefits and career options", [
        ["What will I be able to do after the course?", "You will be able to create a company and its ledgers, record sales, purchases, receipts and payments, raise invoices including GST, manage stock and inventory, reconcile bank entries, and pull out the reports an owner or auditor asks for — outstanding balances, expenses, income and stock summaries."],
        ["What are the Tally Prime career options?", "Tally Prime career options include accounts assistant, billing clerk, store and inventory keeper, and back-office accounts roles — the sort of job that is advertised locally and asks for Tally by name. It is equally a Tally Prime course for job seekers and for shop owners who want to stop paying someone else to do their billing."]
      ]),
      topic("tally-prime-course-fees", "Fees, certificate and what's included", [
        ["What are the Tally Prime course fees in Dhamtari?", "The Tally Prime course fee is ₹5,000. That covers study books, the assignment book, practical accounting exercises and practice material. Tally Prime is one of the three courses at NAC-MIT that also includes the course kit — branded T-shirt, institute bag and student ID card. There is no separate examination fee."],
        ["Is this a Tally Prime GST course with certificate and practical training?", "Yes to both. GST-related accounting is part of the core Tally Prime GST training, not an add-on module — you practise GST invoices and entries as part of normal billing work. Certificate support is provided after completion according to course rules; ask the institute to confirm the exact documentation for your batch."]
      ]),
      topic("tally-prime-course-admission", "Admission, location and contact", [
        ["How do I join the Tally Prime course?", `Tally Prime admission in Dhamtari is direct at the institute. The Tally Prime training contact number is ${PHONE} — call for Tally Prime course registration or to book a Tally Prime demo class, or simply come in and enrol in the Tally Prime course. There is no entrance requirement and no waiting list; you join the next available batch.`],
        ["Where can I find Tally Prime classes near me?", `Tally classes in Dhamtari are held at NAC-MIT Computer Training Center, ${ADDRESS} — the Karmchari Bhawan building right at Kachahari Chowk, which makes it easy to reach from most of the town. If you are looking for a Tally Prime institute in Dhamtari or a Tally Prime training centre near me, this is it. The institute is open ${site.instituteHours}.`]
      ])
    ]
  },

  /* ------------------------------------------------------------------- AI */
  {
    slug: "ai-course", title: "AI Course", shortTitle: "Artificial Intelligence", eyebrow: "Practical AI tool training", icon: "04",
    description: "Learn prompt writing and responsible AI workflows for productivity, research and content creation.",
    fee: "₹5,000", feeAmount: 5000, eligibility: "Open to all; no prior AI experience needed",
    curriculum: ["AI fundamentals and responsible use", "Writing effective prompts", "AI for documents, research and presentations", "Content and idea generation workflows", "Privacy, fact-checking, copyright and safe AI practices"],
    highlights: ["Practical AI tool training", "Prompt writing", "AI-assisted productivity", "Research and content creation", "Certificate information"],
    before: ["Limited understanding of Artificial Intelligence", "No practical experience using AI tools or writing prompts", "Limited awareness of AI applications in education, business and productivity"],
    after: ["Basic understanding of Artificial Intelligence", "Ability to write clear prompts and generate structured content", "Ability to use AI for research, documents, emails and presentations", "Improved digital productivity and responsible AI awareness"],
    benefits: [...common, "Job-oriented introduction to modern workplace tools"],
    keywords: seo(
      "What is an AI course|AI course for beginners|AI course syllabus|AI course details|AI tools training|AI productivity course|Prompt writing course|AI course duration|AI course eligibility|AI career options|Practical AI training|AI course curriculum",
      "AI course at NAC-MIT|AI classes in Dhamtari|AI training centre in Dhamtari|NAC-MIT AI course|AI course near me|AI training institute near me|Artificial Intelligence course NAC-MIT",
      "AI course fees|AI course fees in Dhamtari|best AI course in Dhamtari|AI course for students|AI course for job seekers|practical AI course|AI course with certificate|affordable AI course",
      "join AI course in Dhamtari|AI course admission|enroll in AI training|AI course registration|book AI demo class|AI classes near me|AI training contact number"),
    faqs: faq([
      ["Is this AI course suitable for beginners?", "Yes. It introduces AI tools, prompt writing, productivity, research and responsible use from a beginner-friendly level."],
      ["What is the AI course fee?", "The AI course fee is ₹5,000."],
      ["Is practical AI training included?", "Yes. Students practise with AI tools through guided tasks and assignments on their own computer."],
      ["Do I need programming knowledge?", "No. This is a practical AI tools and prompt writing course, not a programming or machine-learning course."],
      ["How do I enrol in the AI course?", `Call ${PHONE} or visit NAC-MIT at ${ADDRESS} for AI course registration and batch details.`]
    ]),
    seoContent: [
      topic("ai-course-overview", "Course overview and syllabus", [
        ["What is an AI course and what does this one teach?", "This is a practical AI tools course, not a machine-learning or programming course. It teaches you to use the AI tools that are already on your phone and computer to do real work — draft a letter, summarise a document, prepare a presentation, check your own writing. If you have wondered what everyone means by AI and whether it is useful to you, the AI course at NAC-MIT answers it by having you use it. It is listed as an Artificial Intelligence course NAC-MIT teaches for everyday work, not for engineers."],
        ["What is in the AI course syllabus?", "The AI course curriculum covers AI fundamentals and responsible use, writing effective prompts, using AI for documents, research and presentations, content and idea generation workflows, and finally privacy, fact-checking, copyright and safe AI practice. Prompt writing gets the most time, because the difference between a useless answer and a useful one is almost always the question."]
      ]),
      topic("ai-course-eligibility", "Duration, eligibility and who it suits", [
        ["What is the AI course eligibility?", "AI course eligibility is open to anyone who can already use a computer for basic tasks — there is no qualification requirement, no age limit and no programming background needed. If you are not yet comfortable with files, folders and typing, do the basic computer course first; the AI course assumes you can get around a computer."],
        ["Who is this practical AI training for?", "It works well as an AI course for students preparing assignments and research, and as an AI course for job seekers who want something current on their skill list. Teachers, shop owners and office staff take it for the same reason — it saves time on writing, summarising and preparing documents."]
      ]),
      topic("ai-course-benefits", "Skills, benefits and career options", [
        ["What will I be able to do after the AI course?", "You will be able to write a clear prompt and get a usable answer, use AI to draft and improve documents, emails and presentations, research a topic and check what you are told, and generate content and ideas without handing your judgement over to the tool. Knowing when the output is wrong is treated as a core skill, not a footnote."],
        ["What are the AI career options after this course?", "This is an introduction to workplace tools rather than a route to an AI job title. Its value is that it makes you faster at office, administrative, teaching and content work — the AI productivity course angle rather than the engineering one. For students, it also makes further study in computer applications considerably easier."]
      ]),
      topic("ai-course-fees", "Fees, certificate and what's included", [
        ["What are the AI course fees in Dhamtari?", "The AI course fee is ₹5,000 with no separate examination fee. Note that the course kit — T-shirt, bag and ID card — applies only to DCA, PGDCA and Tally Prime students, so this is an affordable AI course fee for the tuition and practical time itself."],
        ["Is this a practical AI course with certificate?", "Practical AI training is the format: guided tasks and assignments done on your own computer during every session, not demonstrations. Certificate information is confirmed by the institute according to course completion rules — ask when you enquire so you know exactly what you receive."]
      ]),
      topic("ai-course-admission", "Admission, location and contact", [
        ["How do I join the AI course in Dhamtari?", `The AI training contact number is ${PHONE} — call for AI course admission and AI course registration, to book an AI demo class, or to ask whether your current computer skills are enough to start. You can also enrol in AI training in person at the centre; admission is direct and the next batch is usually not far away.`],
        ["Where can I find AI classes near me in Dhamtari?", `The NAC-MIT AI course runs at ${ADDRESS}, at Kachahari Chowk. If you are searching for an AI training centre in Dhamtari or an AI training institute near me, AI classes in Dhamtari are held here in the same classroom, with the same one-computer-per-student arrangement as every other course. The institute is open ${site.instituteHours}.`]
      ])
    ]
  },

  /* --------------------------------------------------------- Data Entry */
  {
    slug: "data-entry-operator-course", title: "Data Entry Operator Course", shortTitle: "Data Entry", eyebrow: "Typing and record management", icon: "05",
    description: "Practise accurate typing, spreadsheets and record-management tasks for everyday computer work.",
    fee: "₹4,000", feeAmount: 4000, eligibility: "Open to all; basic computer familiarity helps",
    curriculum: ["Typing technique and accuracy", "Spreadsheet data entry", "Record organisation and file management", "Formatting, sorting, filtering and checking", "Practical office workflows"],
    highlights: ["Typing and data-entry training", "Spreadsheet practice", "Accuracy and speed improvement", "Practical computer training", "Career guidance for data-entry work"],
    before: ["Slow or inaccurate typing", "Limited knowledge of spreadsheets and data-entry software", "Difficulty handling, verifying and organising large amounts of information"],
    after: ["Improved typing speed and accuracy", "Ability to enter, format, sort and filter digital records", "Ability to identify and correct common entry errors", "Better preparation for data-entry and back-office roles"],
    benefits: [...common, "Job-oriented administrative and back-office training"],
    keywords: seo(
      "What is data entry operator course|Data entry course details|Data entry course syllabus|Data entry course curriculum|Data entry course duration|Data entry course eligibility|Data entry typing training|Data entry skills|Data entry career options|Data entry practical training|How to become a data entry operator",
      "Data entry course at NAC-MIT|data entry classes in Dhamtari|data entry institute in Dhamtari|NAC-MIT data entry course|data entry training near me",
      "data entry course fees|data entry course fees in Dhamtari|best data entry course in Dhamtari|data entry course with certificate|data entry course with practical training|affordable data entry course|data entry course near me|data entry course for job",
      "join data entry course|data entry admission in Dhamtari|data entry classes near me|enroll in data entry course|data entry course registration|book data entry demo class"),
    faqs: faq([
      ["What is the Data Entry Operator course fee?", "The course fee is ₹4,000."],
      ["What skills will I learn?", "Typing speed and accuracy, spreadsheets, data formatting, sorting, filtering, verification, record management and workplace data-entry tasks."],
      ["Is there an individual computer for each student?", "Yes. Individual computer practice is provided in every session."],
      ["Do I need to type well already?", "No. Typing technique and speed building are part of the course from the first session."],
      ["How do I enrol?", `Call ${PHONE} or visit NAC-MIT at ${ADDRESS} for data entry course registration.`]
    ]),
    seoContent: [
      topic("data-entry-operator-course-overview", "Course overview and syllabus", [
        ["What is a data entry operator course?", "A data entry operator handles the information a business runs on — customer records, stock lists, bills, forms, registers. The job is less about typing fast and more about typing accurately and knowing when something looks wrong. The data entry course at NAC-MIT trains both: the keyboard technique that makes speed possible, and the checking habits that keep records trustworthy."],
        ["What is in the data entry course syllabus?", "The data entry course curriculum covers typing technique and accuracy, spreadsheet data entry, record organisation and file management, formatting, sorting, filtering and checking, and practical office workflows. Data entry typing training runs alongside the spreadsheet work throughout rather than being finished first, so your speed improves on real tasks."]
      ]),
      topic("data-entry-operator-course-eligibility", "Duration, eligibility and who it suits", [
        ["What is the data entry course eligibility and duration?", "Data entry course eligibility is open — no minimum qualification, no age limit, and no requirement to type well before you start. Some familiarity with a computer helps but is not essential. Course duration and current batch timings are confirmed at admission; ask when you call so you can plan around work or college."],
        ["How to become a data entry operator?", "Three things get you hired: typing speed with low error rates, confidence in spreadsheets, and the discipline to verify what you have entered. Employers usually test the first two directly. This course builds all three and gives you practice files that look like the work you will actually be handed."]
      ]),
      topic("data-entry-operator-course-benefits", "Skills, benefits and career options", [
        ["What data entry skills will I gain?", "You will type faster and more accurately, enter and format spreadsheet data properly, sort and filter records to find what you need, spot and correct the common entry errors that cause real problems later, and organise files so that someone else can find them too. These are the data entry skills that show up in a practical test."],
        ["What are the data entry career options?", "Data entry career options include back-office and record-keeping roles, office assistant and computer operator posts, billing support, and data work in shops, clinics, schools and government offices. It is a practical data entry course for job seekers — a short, specific skill rather than a long qualification."]
      ]),
      topic("data-entry-operator-course-fees", "Fees, certificate and what's included", [
        ["What are the data entry course fees in Dhamtari?", "The data entry course fee is ₹4,000, which makes it one of the more affordable job-oriented courses at the institute. There is no separate examination fee. The course kit — T-shirt, bag and ID card — applies only to DCA, PGDCA and Tally Prime students, so the fee here is for tuition and practical time."],
        ["Is this a data entry course with certificate and practical training?", "Data entry practical training is the whole format — you are entering, checking and correcting data in every session, on your own computer. Certificate support after completion is provided according to course rules; confirm the exact documentation with the institute when you enrol."]
      ]),
      topic("data-entry-operator-course-admission", "Admission, location and contact", [
        ["How do I join the data entry course?", `Data entry admission in Dhamtari is direct at the institute. Call ${PHONE} for data entry course registration, to book a data entry demo class, or to ask about batch timings that fit around your work. You can also enrol in the data entry course in person during institute hours.`],
        ["Where can I find data entry classes near me?", `Data entry classes in Dhamtari run at NAC-MIT Computer Training Center, ${ADDRESS}, beside Kachahari Chowk. If you are looking for a data entry institute in Dhamtari or data entry training near me, this is the centre. The institute is open ${site.instituteHours}. To try the typing software before deciding, ask at the desk — that is a normal request.`]
      ])
    ]
  },

  /* ----------------------------------------------------- Basic Computer */
  {
    slug: "basic-computer-course", title: "Basic Computer Course", shortTitle: "Basic Computer", eyebrow: "A beginner-friendly start", icon: "06",
    description: "Learn computer fundamentals through guided, practical tasks at a comfortable pace.",
    fee: "Contact the institute", eligibility: "Beginner-friendly; no age limit",
    curriculum: ["Computer parts and operating systems", "Keyboard and mouse confidence", "Files, folders and storage", "Internet, email and online services", "Printing, scanning, PDFs and online safety"],
    highlights: ["Computer fundamentals", "Keyboard and mouse usage", "File and folder management", "Internet and email basics", "Printing and scanning"],
    before: ["Little or no knowledge of computer usage", "Difficulty operating a desktop or laptop", "No knowledge of files, folders, internet services or online safety"],
    after: ["Ability to operate a computer independently", "Ability to create, save, copy and organise files", "Ability to browse the internet, use email, print and scan documents", "Improved digital confidence and readiness for further training"],
    benefits: [...common, "Beginner-friendly teaching and step-by-step confidence building"],
    keywords: seo(
      "Basic computer course details|Basic computer course syllabus|Basic computer course duration|Basic computer course eligibility|Computer course for beginners|Basic computer skills course|Computer fundamentals course|Basic computer training|Computer course after 10th|Basic computer course benefits",
      "Basic computer course at NAC-MIT|basic computer classes in Dhamtari|basic computer institute in Dhamtari|NAC-MIT computer course|beginner computer classes near me",
      "basic computer course fees|basic computer course fees in Dhamtari|best basic computer course|basic computer course with certificate|practical computer course|affordable computer course|computer course near me",
      "join basic computer course|basic computer admission in Dhamtari|basic computer classes near me|enroll in computer course|book computer demo class|basic computer course registration"),
    faqs: faq([
      ["Who can join the Basic Computer Course?", "Beginners of any age can join. No previous computer experience is required."],
      ["What will I learn?", "Computer fundamentals, Windows, files and folders, internet, email, online services, printing, scanning and online safety."],
      ["What is the course fee?", "Contact the institute for current fee details for this course."],
      ["Is it suitable if I have never used a computer?", "Yes. The course starts from switching on the machine and using the keyboard and mouse."],
      ["How do I enrol?", `Call ${PHONE} or visit NAC-MIT at ${ADDRESS} to register for the next beginner batch.`]
    ]),
    seoContent: [
      topic("basic-computer-course-overview", "Course overview and syllabus", [
        ["What does the basic computer course cover?", "This is a computer fundamentals course for people starting from nothing. It begins with what the parts of a computer are and how to use a keyboard and mouse without hunting, and ends with you printing a document, sending an email and saving files where you can find them again. Nobody is expected to know anything on day one — the basic computer course at NAC-MIT assumes no prior experience at all."],
        ["What is in the basic computer course syllabus?", "The basic computer course syllabus covers computer parts and operating systems, keyboard and mouse confidence, files, folders and storage, internet, email and online services, then printing, scanning, PDFs and online safety. Online safety is included deliberately — knowing which links and messages to distrust matters as much as knowing how to click them."]
      ]),
      topic("basic-computer-course-eligibility", "Duration, eligibility and who it suits", [
        ["What is the basic computer course eligibility?", "Basic computer course eligibility is genuinely open: no qualification, no age limit and no prior experience. It is a common computer course after 10th for students who want fundamentals before committing to a diploma, and equally common for adults who have avoided computers at work for years and would rather not keep doing so."],
        ["How long does the basic computer course take?", "Basic computer course duration depends on the batch and how quickly the group is comfortable moving — this is a course where the pace is deliberately set by the slowest learner, not the fastest. Confirm current batch timings and expected length with the institute when you enquire."]
      ]),
      topic("basic-computer-course-benefits", "Skills, benefits and career options", [
        ["What are the basic computer course benefits?", "By the end you can operate a computer on your own, create, save, copy and organise files, browse the internet and use email, and print and scan documents. The real basic computer course benefit is that ordinary tasks — filling an online form, attaching a document, finding a file from last month — stop being things you need to ask someone else to do."],
        ["What can I learn after this course?", "Most students go on to one of three things: DCA if they want a full computer diploma course, MS Office if they need documents and spreadsheets for work, or typing if speed is the immediate need. The basic computer skills course is designed as a foundation, and the staff will tell you honestly which next step fits what you are trying to achieve."]
      ]),
      topic("basic-computer-course-fees", "Fees, certificate and what's included", [
        ["What are the basic computer course fees in Dhamtari?", "The fee for this course is confirmed directly by the institute rather than published here, because it varies with batch length and how much practical time is included. Call and ask — you will get a straight number, and it is an affordable computer course by design, since it is the entry point to everything else."],
        ["Is this a basic computer course with certificate and practical training?", "Yes, it is practical throughout: one computer per student, guided tasks every session, no watching from the back. Certificate support is provided according to course completion rules; ask the institute to confirm exactly what documentation your batch receives."]
      ]),
      topic("basic-computer-course-admission", "Admission, location and contact", [
        ["How do I join the basic computer course?", `Basic computer admission in Dhamtari is direct at the institute. Call ${PHONE} for basic computer course registration, or to book a computer demo class — genuinely worth doing if you are nervous about whether you will keep up, because sitting in for one session usually settles that question. You can also enrol in the computer course in person.`],
        ["Where can I find beginner computer classes near me?", `Basic computer classes in Dhamtari run at NAC-MIT Computer Training Center, ${ADDRESS}, at Kachahari Chowk. If you are searching for a basic computer institute in Dhamtari or beginner computer classes near me, this is the centre. The institute is open ${site.instituteHours}, and you are welcome to come and look before enrolling.`]
      ])
    ]
  },

  /* ---------------------------------------------------------- MS Office */
  {
    slug: "ms-office-course", title: "MS Office Course", shortTitle: "MS Office", eyebrow: "Word, Excel and PowerPoint", icon: "07",
    description: "Work with the core tools used for documents, spreadsheets and presentations, through real office tasks.",
    fee: "Contact the institute", eligibility: "Open to all; basic computer familiarity helps",
    curriculum: [
      "Word: letters, reports, tables, formatting and PDF export",
      "Excel: data entry, formulas, functions, charts and filters",
      "PowerPoint: slides, layouts, images, charts and animations",
      "Workplace templates and practical assignments",
      "File management, printing and document sharing"
    ],
    highlights: ["MS Word", "MS Excel", "MS PowerPoint", "Task-based practical learning", "Workplace templates and assignments"],
    before: ["Limited knowledge of office software", "Difficulty creating documents, spreadsheets and presentations", "Limited knowledge of formatting, formulas, printing and workplace documentation"],
    after: ["Ability to use Word, Excel and PowerPoint", "Ability to create professional letters, reports and spreadsheets", "Ability to use formulas, organise data and design presentations with charts", "Improved office productivity and readiness for administrative roles"],
    benefits: [...common, "Job-oriented documentation and productivity training"],
    keywords: seo(
      "MS Office course details|MS Office course syllabus|MS Office course duration|MS Office course eligibility|MS Word Excel PowerPoint course|MS Office training for beginners|Excel course for beginners|Word course for beginners|PowerPoint course for beginners|MS Office career benefits|document formatting course|spreadsheet course|presentation design course",
      "MS Office course at NAC-MIT|MS Office classes in Dhamtari|MS Office institute in Dhamtari|Excel classes in Dhamtari|NAC-MIT MS Office course|computer classes near Karmchari Bhawan",
      "MS Office course fees|MS Office course fees in Dhamtari|best MS Office course|MS Office course with certificate|practical MS Office training|Excel course near me|affordable MS Office course|office software course near me",
      "join MS Office course|MS Office admission in Dhamtari|Excel classes near me|enroll in MS Office course|book MS Office demo class|MS Office course registration"),
    faqs: faq([
      ["What does the MS Office course cover?", "Word, Excel and PowerPoint — documents, spreadsheets, formulas, charts, presentations, printing and workplace productivity."],
      ["Is this course suitable for beginners?", "Yes. It is practical and suitable for beginners, students and job seekers."],
      ["What is the course fee?", "Contact the institute for current fee details for this course."],
      ["Can I learn only Excel?", "The course is taught as one programme covering all three applications, but tell the institute what you need most and they will weight your practice accordingly."],
      ["How do I enrol in the MS Office course?", `Call ${PHONE} or visit NAC-MIT at ${ADDRESS} for MS Office course registration.`]
    ]),
    seoContent: [
      topic("ms-office-course-overview", "Course overview and syllabus", [
        ["What is in the MS Office course?", "This MS Word Excel PowerPoint course covers the three applications that make up almost all everyday office computer work. Word for letters, reports and formatted documents; Excel for lists, calculations and charts; PowerPoint for presentations. The MS Office course at NAC-MIT teaches them as one course because in real work they are used together — the figures from a spreadsheet end up in a report and then on a slide."],
        ["What is in the MS Office course syllabus?", "The MS Office course syllabus covers Word letters, reports, tables, formatting and PDF export; Excel data entry, formulas, functions, charts and filters; PowerPoint slides, layouts, images, charts and animations; workplace templates and practical assignments; and file management, printing and document sharing. It is a document formatting course, a spreadsheet course and a presentation design course in one sequence."]
      ]),
      topic("ms-office-course-eligibility", "Duration, eligibility and who it suits", [
        ["What is the MS Office course eligibility and duration?", "MS Office course eligibility is open — no formal qualification and no age limit, though you should be comfortable with a keyboard, mouse and files before starting. If you are not yet, the basic computer course comes first. MS Office course duration and current batch timings are confirmed at admission."],
        ["Is this MS Office training for beginners?", "Yes. It works as an Excel course for beginners, a Word course for beginners and a PowerPoint course for beginners at the same time — nobody is assumed to have used formulas or slide layouts before. Students who already know Word but not Excel are common, and the practical time can be weighted towards what you actually need."]
      ]),
      topic("ms-office-course-benefits", "Skills, benefits and career options", [
        ["What will I be able to do after the MS Office course?", "You will be able to produce a properly formatted letter or report and export it as a PDF, build a spreadsheet with working formulas and functions, sort and filter data to answer a question, turn figures into a readable chart, and put together a presentation that does not look like a template. Printing, saving and sharing files correctly is covered throughout."],
        ["What are the MS Office career benefits?", "MS Office is the skill most often assumed in office, administrative, clerical and reception job descriptions — and most often tested at interview. Being genuinely quick in Excel in particular separates candidates for back-office and accounts-support roles. It also pairs naturally with the data entry or Tally Prime courses if you are aiming at those jobs."]
      ]),
      topic("ms-office-course-fees", "Fees, certificate and what's included", [
        ["What are the MS Office course fees in Dhamtari?", "The fee for this course is confirmed directly by the institute rather than listed here, since it depends on batch length and practical hours. Call and ask for the current figure. There is no separate examination fee, and the course kit applies only to DCA, PGDCA and Tally Prime students."],
        ["Is this an MS Office course with certificate and practical MS Office training?", "Practical MS Office training is the format: every session is task-based on your own computer, using workplace templates and assignments rather than exercises invented for a textbook. Certificate support after completion is provided according to course rules — confirm the details with the institute when you enrol."]
      ]),
      topic("ms-office-course-admission", "Admission, location and contact", [
        ["How do I join the MS Office course?", `MS Office admission in Dhamtari is direct at the institute. Call ${PHONE} for MS Office course registration, to book an MS Office demo class, or to discuss weighting the course towards Excel if that is what your work needs. You can also enrol in the MS Office course in person during institute hours.`],
        ["Where can I find Excel classes near me?", `MS Office classes in Dhamtari and Excel classes in Dhamtari are both held at NAC-MIT Computer Training Center, ${ADDRESS} — the Karmchari Bhawan building at Kachahari Chowk. If you are searching for an MS Office institute in Dhamtari, or computer classes near Karmchari Bhawan, this is the centre. The institute is open ${site.instituteHours}.`]
      ])
    ]
  },

  /* ----------------------------------------------------------- Typing */
  {
    slug: "typing-course", title: "Typing Course", shortTitle: "Typing", eyebrow: "Speed and accuracy training", icon: "08",
    description: "Build real typing speed and accuracy with correct finger technique, timed drills and error correction.",
    fee: "₹500 per month", feeAmount: 500, feePeriod: 'month', eligibility: "Open to all; no prior typing experience needed",
    curriculum: ["Correct finger placement and touch-typing technique", "Progressive speed-building drills", "Accuracy review and error-pattern correction", "Timed typing tests and progress tracking", "Document typing and practical office text work"],
    highlights: ["Typing speed improvement", "Accuracy practice", "Regular timed speed tests", "Monthly progress tracking", "Typing skills for data-entry work"],
    before: ["Low typing speed and frequent typing errors", "Incorrect finger placement and limited keyboard familiarity", "Typing by looking at the keyboard rather than the screen"],
    after: ["Noticeably faster typing with correct technique", "Fewer errors and better self-correction", "Ability to type documents without watching the keyboard", "Improved readiness for office, clerical and data-entry work"],
    benefits: [...common, "Regular speed tests, error correction and monthly progress tracking"],
    keywords: seo(
      "Typing course details|Typing course syllabus|Typing course duration|typing speed improvement course|typing practice course|typing course for beginners|typing skills for data entry|typing course benefits|touch typing course",
      "typing classes at NAC-MIT|typing classes in Dhamtari|NAC-MIT typing course|typing classes near me",
      "typing course fees|typing course fees in Dhamtari|best typing institute in Dhamtari|typing course with certificate|affordable typing classes|typing course near me",
      "join typing course|typing admission in Dhamtari|enroll in typing course|book typing demo class|typing course registration"),
    faqs: faq([
      ["What does the Typing Course teach?", "Correct finger placement, touch-typing technique, progressive speed drills, accuracy correction and timed practice."],
      ["What is the typing course fee?", "The fee is ₹500 per month."],
      ["Is the course useful for data-entry jobs?", "Yes. Speed with low error rates is exactly what data-entry and clerical tests measure."],
      ["Do you teach Hindi typing too?", "Hindi typing is taught on the separate Hindi and English typing course, which covers both keyboard layouts and language input tools."],
      ["How do I enrol in typing classes?", `Call ${PHONE} or visit NAC-MIT at ${ADDRESS} for typing course registration.`]
    ]),
    seoContent: [
      topic("typing-course-overview", "Course overview and syllabus", [
        ["What does the typing course teach?", "This is a typing speed improvement course built on technique rather than repetition alone. It fixes finger placement first — which is what actually limits most people — then builds speed through progressive drills and timed tests. If you currently type by looking at the keyboard, typing classes at NAC-MIT are designed to stop that, because watching the keys puts a hard ceiling on how fast you can ever go."],
        ["What is in the typing course syllabus?", "The typing course syllabus covers correct finger placement and touch-typing technique, progressive speed-building drills, accuracy review and error-pattern correction, timed typing tests with progress tracking, and document typing on practical office text. Your own recurring mistakes are tracked and drilled specifically, which is faster than practising everything equally."]
      ]),
      topic("typing-course-eligibility", "Duration, eligibility and who it suits", [
        ["Is this a typing course for beginners?", "Yes, and equally for people who already type but badly. There is no qualification requirement and no age limit. Beginners start from finger placement; existing typists usually spend the first sessions unlearning habits, which feels slower for a week and then pays off. Monthly fees mean you can stop when you have reached the speed you need."],
        ["What is the typing course duration?", "Typing is charged monthly rather than as a fixed course because progress varies a lot between students — some reach their target speed in two months, others take four. Practice sessions may be scheduled as a separate hour; confirm current timings with the institute when you enrol."]
      ]),
      topic("typing-course-benefits", "Skills, benefits and career options", [
        ["What are the typing course benefits?", "Faster typing with correct technique, fewer errors, the ability to type while reading from a document rather than watching your hands, and measurable progress you can quote in an interview. Typing speed is one of the few computer skills that is tested directly rather than taken on trust, so improving it has an unusually direct payoff."],
        ["How does typing help with data entry work?", "Typing skills for data entry are the foundation of the job — speed determines how much you get through, and accuracy determines whether anyone has to check your work. Many students take typing alongside or before the data entry operator course for exactly this reason. Employers commonly test both in the same short practical."]
      ]),
      topic("typing-course-fees", "Fees, certificate and what's included", [
        ["What are the typing course fees in Dhamtari?", "Typing classes are ₹500 per month, which makes this the most affordable course at the institute and easy to continue only as long as you need it. There is no separate examination or registration fee. Practice software and drill material are provided."],
        ["Is this a typing course with certificate?", "Certificate support after completion is provided according to course rules — ask the institute to confirm what your batch receives. More practically, your timed test results are tracked monthly, so you will have a documented speed and accuracy figure to quote when applying for work."]
      ]),
      topic("typing-course-admission", "Admission, location and contact", [
        ["How do I join typing classes?", `Typing admission in Dhamtari is direct and charged monthly, so you can start with the next session rather than waiting for a course to begin. Call ${PHONE} for typing course registration or to book a typing demo class and see where your current speed sits. You can also enrol in the typing course in person.`],
        ["Where can I find typing classes near me?", `Typing classes in Dhamtari run at NAC-MIT Computer Training Center, ${ADDRESS}, at Kachahari Chowk, and the institute is open ${site.instituteHours}. If you need Hindi typing as well as English, see the Hindi and English typing course instead — it covers both keyboard layouts and language input tools.`]
      ])
    ]
  },

  /* ------------------------------------------- Hindi & English Typing */
  {
    slug: "hindi-english-typing", title: "Hindi & English Typing Course", shortTitle: "Hindi & English Typing", eyebrow: "Bilingual typing and exam preparation", icon: "09",
    description: "Type confidently in both Hindi and English, with keyboard layouts, language input tools and bilingual document practice.",
    fee: "₹500 per month", feeAmount: 500, feePeriod: 'month', eligibility: "Open to all; no prior typing experience needed",
    curriculum: ["English keyboard technique and speed drills", "Hindi typing layouts and language input tools", "Switching quickly between Hindi and English", "Bilingual document and form preparation", "Timed practice for typing tests"],
    highlights: ["Hindi typing", "English typing", "Both keyboard layouts", "Bilingual document preparation", "Timed test practice"],
    before: ["Able to type in one language but not the other", "Unfamiliar with Hindi keyboard layouts and input tools", "Difficulty switching between Hindi and English while typing"],
    after: ["Ability to type in both Hindi and English", "Confidence with Hindi keyboard layouts and input tools", "Ability to prepare bilingual documents and forms", "Improved readiness for clerical posts and typing tests"],
    benefits: [...common, "Bilingual practice aimed at office, clerical and examination typing requirements"],
    keywords: seo(
      "Hindi typing course|English typing course|Hindi English typing course|bilingual typing course|Hindi keyboard layout|Hindi typing practice|Hindi typing for government exams|Hindi typing tools|English typing practice",
      "Hindi typing institute in Dhamtari|English typing institute in Dhamtari|typing classes at NAC-MIT|NAC-MIT typing course|typing classes in Dhamtari",
      "Hindi typing course fees|typing course fees in Dhamtari|best typing institute in Dhamtari|Hindi English typing course|typing course with certificate|affordable typing classes",
      "Hindi typing classes near me|English typing classes near me|join typing course|typing admission in Dhamtari|enroll in typing course|book typing demo class"),
    faqs: faq([
      ["What does this course cover that the typing course does not?", "Hindi keyboard layouts, Hindi language input tools, switching between the two languages, and bilingual document preparation."],
      ["What is the fee?", "The fee is ₹500 per month, the same as the English typing course."],
      ["Is it useful for government exam typing tests?", "Yes. Timed practice in both languages is part of the course; confirm the specific exam format you are preparing for with the institute."],
      ["Do I need to know English typing first?", "No. You can start from the beginning in either language, or both."],
      ["How do I enrol?", `Call ${PHONE} or visit NAC-MIT at ${ADDRESS} to register for bilingual typing classes.`]
    ]),
    seoContent: [
      topic("hindi-english-typing-overview", "Course overview and syllabus", [
        ["What is the Hindi and English typing course?", "This is the bilingual typing course, for people who need to work in both languages rather than just build raw speed in one. Hindi typing is a genuinely different skill from English — a different keyboard layout, different input tools, and a different set of habits to build. The Hindi English typing course teaches both and, importantly, teaches switching between them without losing your place."],
        ["What is in the Hindi English typing syllabus?", "The syllabus covers English keyboard technique and speed drills, Hindi typing layouts and language input tools, switching quickly between Hindi and English, bilingual document and form preparation, and timed practice for typing tests. Hindi typing practice gets dedicated sessions rather than being tacked on to English drills."]
      ]),
      topic("hindi-english-typing-eligibility", "Duration, eligibility and who it suits", [
        ["Who should take the bilingual typing course?", "Anyone preparing for clerical and government posts where a Hindi typing test is part of the selection, anyone working in an office where letters, notices and forms go out in both languages, and students who can type English but have never learned the Hindi layout. There is no qualification requirement and no age limit."],
        ["Do I need English typing before starting Hindi typing?", "No. You can start from zero in either language, or learn both together. Learning both at once is slower for the first few weeks but produces better switching, because you build the two layouts as separate habits from the start rather than mapping one onto the other."]
      ]),
      topic("hindi-english-typing-benefits", "Skills, benefits and career options", [
        ["What will I be able to do after this course?", "Type in Hindi and in English with correct technique in both, use Hindi keyboard layouts and language input tools without fighting them, move between the two languages inside the same document, and prepare bilingual letters, notices and forms of the kind offices actually send out."],
        ["Is this useful for government exam typing tests?", "It is a common reason students take it. Hindi typing for government exams is usually tested on speed and accuracy under time pressure, so timed practice in both languages is built into the course. Confirm the specific layout and format your exam requires with the institute, since requirements vary between recruitment boards."]
      ]),
      topic("hindi-english-typing-fees", "Fees, certificate and what's included", [
        ["What are the Hindi typing course fees?", "Bilingual typing classes are ₹500 per month — the same affordable monthly rate as the English-only typing course, with no separate registration or examination fee. Practice material and drill software for both languages are provided."],
        ["How is this different from the English typing course?", "The English typing course is about pushing speed and accuracy as far as they will go in one language. This one covers both layouts and the switching between them, which suits bilingual office work and exam requirements. If you only need faster English typing, take the typing course instead — it is the same price and more focused."]
      ]),
      topic("hindi-english-typing-admission", "Admission, location and contact", [
        ["How do I join Hindi typing classes?", `Typing admission in Dhamtari is monthly and direct at the institute, so you can start with the next session. Call ${PHONE} for typing course registration, or to book a typing demo class and try the Hindi layout before committing. You can also enrol in the typing course in person.`],
        ["Where can I find Hindi typing classes near me?", `Bilingual typing classes run at NAC-MIT Computer Training Center, ${ADDRESS}, at Kachahari Chowk. If you are looking for a Hindi typing institute in Dhamtari or an English typing institute in Dhamtari, both are taught here in the same course. The institute is open ${site.instituteHours}.`]
      ])
    ]
  },

  /* ------------------------------------------- Practical Computer Training */
  {
    slug: "practical-computer-training", title: "Practical Computer Training", shortTitle: "Practical Training", eyebrow: "Learn by doing", icon: "10",
    description: "Build confidence through hands-on computer tasks for school, office, business and daily digital work.",
    fee: "Contact the institute", eligibility: "Beginner-friendly; no age limit",
    curriculum: ["Operating systems, files, folders and device setup", "Word processing, spreadsheets and presentations", "Internet, email, online forms and digital services", "Printing, scanning, PDF handling and document sharing", "Data entry, typing, online safety and basic troubleshooting"],
    highlights: ["Practice-first instruction", "One computer for each student", "Real-world office tasks", "Flexible module selection", "Career and placement guidance"],
    before: ["Limited confidence with computer operations, office software and typing", "Difficulty handling online services, digital documents and practical workplace tasks"],
    after: ["Ability to handle everyday computer operations and office applications", "Confidence with typing, email, online forms, PDFs, printing and scanning", "Improved file management, data entry and practical office skills"],
    benefits: [...common, "Flexible modules based on each learner's practical goals"],
    keywords: seo(
      "practical computer training|computer skills course|job-oriented computer courses|computer training for beginners|workplace computer training|computer course details|computer course syllabus|computer course career options",
      "practical computer training in Dhamtari|NAC-MIT Computer Training Center|computer institute in Dhamtari|computer classes near me|computer institute near Karmchari Bhawan",
      "practical computer course fees|best computer training in Dhamtari|computer course with certificate|computer course with practical training|affordable computer courses|computer training institute comparison",
      "join practical computer training|computer course admission in Dhamtari|enroll in computer training|book free demo class|computer course registration|contact computer institute"),
    faqs: faq([
      ["What is Practical Computer Training?", "Hands-on training across computer operations, office software, typing, internet, email, PDFs, printing, scanning and data entry, chosen around your goals."],
      ["Who can join?", "Beginners, students, job seekers, office staff, shop owners and learners of any age."],
      ["What is the course fee?", "Contact the institute for current fee details, since the fee depends on which modules you take."],
      ["How is this different from the other courses?", "The modules are selected around what you personally need, rather than following a fixed diploma syllabus."],
      ["How do I enrol?", `Call ${PHONE} or visit NAC-MIT at ${ADDRESS} to discuss which modules suit you.`]
    ]),
    seoContent: [
      topic("practical-computer-training-overview", "Course overview and syllabus", [
        ["What is practical computer training?", "It is the flexible option: instead of following a fixed diploma syllabus, you and the institute pick the modules that match what you actually need to do. Someone running a shop needs different things from a student preparing for college or an office worker who has been promoted into a role with more paperwork. The teaching format is the same practice-first approach, but the content is chosen rather than prescribed."],
        ["What can the modules cover?", "Available modules span operating systems, files, folders and device setup; word processing, spreadsheets and presentations; internet, email, online forms and digital services; printing, scanning, PDF handling and document sharing; and data entry, typing, online safety and basic troubleshooting. You can take a narrow set or work through most of them."]
      ]),
      topic("practical-computer-training-eligibility", "Duration, eligibility and who it suits", [
        ["Who is this computer skills course for?", "It suits people with a specific practical goal rather than a qualification target — an office worker who needs to handle digital forms and PDFs, a shop owner managing records, a job seeker filling a particular gap, or a student who wants workplace computer training alongside their studies. Beginner-friendly, no age limit, no prior experience assumed."],
        ["How long does it take?", "Duration depends entirely on how many modules you take, which is the point of the format. A focused two-module plan is short; working through most of the list takes considerably longer. Discuss your goals at the centre and you will get a realistic estimate before you commit."]
      ]),
      topic("practical-computer-training-benefits", "Skills, benefits and career options", [
        ["What will I be able to do afterwards?", "Handle everyday computer operations and office applications without help, manage files properly, type and enter data accurately, work with email, online forms, PDFs, printing and scanning, and troubleshoot the small problems that otherwise stop work for an afternoon."],
        ["What are the computer course career options?", "Because the modules are chosen, the destination varies — office and administrative work, back-office and data roles, or simply doing your existing job without needing to ask a colleague for help. These are job-oriented computer courses by construction: you learn the tasks the job contains. Career and placement guidance is provided based on your skills and performance."]
      ]),
      topic("practical-computer-training-fees", "Fees, certificate and what's included", [
        ["What are the practical computer course fees?", "The fee depends on which modules you select, so it is confirmed by the institute after a short conversation about what you need rather than published as a single figure. That conversation is free and there is no obligation. When comparing computer training institutes locally, ask what practical hours are included, not just the headline fee."],
        ["Is this a computer course with certificate and practical training?", "Certificate support after completion is provided according to course rules and the modules taken. Confirm the exact documentation with the institute when you agree your module plan, so there are no surprises at the end."]
      ]),
      topic("practical-computer-training-admission", "Admission, location and contact", [
        ["How do I join practical computer training?", `Start with a conversation rather than a form. Call ${PHONE} or come in to contact the computer institute directly, explain what you need to be able to do, and a module plan and fee are agreed from there. Computer course admission in Dhamtari is direct — you can book a free demo class first, then enrol in computer training the same week if it suits you.`],
        ["Where can I find computer classes near me in Dhamtari?", `NAC-MIT Computer Training Center is at ${ADDRESS} — the computer institute near Karmchari Bhawan, and the best computer institute near Kachahari Chowk to reach on foot from the town centre. If you are searching for a computer training centre near me, this is it. The institute is open ${site.instituteHours}.`]
      ])
    ]
  }
];

export const getCourse = (slug: string) => courses.find((course) => course.slug === slug);

export const courseGroups = [
  { title: "Diploma & Professional Courses", slugs: ["dca-course", "pgdca-course", "tally-prime-course", "ai-course", "data-entry-operator-course"] },
  { title: "Computer Skills & Office Courses", slugs: ["basic-computer-course", "ms-office-course", "typing-course", "hindi-english-typing", "practical-computer-training"] }
];

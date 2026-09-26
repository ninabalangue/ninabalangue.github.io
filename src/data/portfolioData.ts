import { SkillItem, ExperienceItem, AwardItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Niña Bernadeth R. Balangue',
  title: 'Executive & Administrative Virtual Assistant',
  subTitle: 'Legal Operations, Remote Business & Retail Management Specialist',
  email: 'nbrbalangue@gmail.com',
  phone: '(+63) 964 752 1575',
  location: 'Medina, Misamis Oriental, Philippines',
  availability: 'Available for Full-time & Part-time Remote Roles',
  timezone: 'GMT+8 (Philippine Time) • Adaptable to US, UK, and AUS Time Zones',
  summary: 'Detail-oriented, versatile, and high-capacity Virtual Assistant with extensive real-world experience spanning government legal administration (480 hours at DILG-X Regional Legal Service), municipal operations, retail management, and university student governance. Proven track record in streamlining executive workflows, managing complex calendars and inbox triage, organizing high-stakes confidential documents, retail sales auditing, payroll facilitation, pop-up market coordination, customer relations, and designing professional brand assets in Canva and Google Workspace.',
  eligibility: 'Civil Service Examination (Professional Level) Passer',
  degree: 'Bachelor of Arts in Political Science',
  university: 'Mindanao State University - Iligan Institute of Technology (MSU-IIT)',
  graduation: 'Graduated Cum Laude (July 2026)',
  honors: 'Graduated Cum Laude • Consistent Academic Lister for all semesters (2022–2026)',
};

export const CORE_METRICS = [
  { label: 'Legal & Admin Experience', value: '480+ Hrs', sub: 'DILG-X Regional Legal Service' },
  { label: 'Government Eligibility', value: 'CSC Passer', sub: 'Professional Level Certified' },
  { label: 'Academic Standing', value: 'Cum Laude', sub: 'MSU-IIT • Graduated July 2026' },
  { label: 'Leadership Recognitions', value: '6 Awards', sub: 'Integrity, Service & Impact' },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'Google Workspace',
    category: 'workspace',
    level: 'Expert',
    iconName: 'Mail',
    description: 'Comprehensive administration across Google Docs, Sheets, Drive, Gmail, Calendar, and Forms.',
    practicalUse: 'Inbox zero workflows, automated intake forms, standardized document styling, and shared drive permission architectures.'
  },
  {
    name: 'Microsoft 365 (Word, Excel, PPT)',
    category: 'office',
    level: 'Advanced',
    iconName: 'FileSpreadsheet',
    description: 'Spreadsheet formulas (VLOOKUP, Pivot Tables), executive slide presentations, and formal document formatting.',
    practicalUse: 'Weekly expense tracking, retail inventory audits, formal board memos, and executive presentations.'
  },
  {
    name: 'Canva Graphic Design',
    category: 'design',
    level: 'Advanced',
    iconName: 'Palette',
    description: 'Creating high-engagement social media collaterals, digital flyers, pitch decks, and brand identity templates.',
    practicalUse: 'Marketing graphics for Bonbon Blings e-commerce, official university event posters, and presentation decks.'
  },
  {
    name: 'Calendar & Time Management',
    category: 'operations',
    level: 'Expert',
    iconName: 'Calendar',
    description: 'Executive appointment coordination, timezone conversion, buffer management, and conflict resolution.',
    practicalUse: 'Coordinating high-level student council meetings across 10+ departmental heads and council executives.'
  },
  {
    name: 'Email Triage & Inbox Zero',
    category: 'operations',
    level: 'Expert',
    iconName: 'Inbox',
    description: 'Drafting professional correspondence, email categorization, flagging critical communications, and archiving.',
    practicalUse: 'Handling daily government client inquiries and business customer support messages with rapid response times.'
  },
  {
    name: 'Legal & Public Records Management',
    category: 'legal',
    level: 'Advanced',
    iconName: 'ShieldCheck',
    description: 'Case file indexing, confidential records preservation, resolution filing, and compliance coordination.',
    practicalUse: '480 hours at DILG-X handling sensitive legal communications, case files, and inter-agency endorsements.'
  },
  {
    name: 'Retail Management & Sales Auditing',
    category: 'operations',
    level: 'Advanced',
    iconName: 'ShoppingBag',
    description: 'Store operations, daily sales auditing, cash reconciliation, payroll facilitation, and inventory controls.',
    practicalUse: 'Served as Retail Sales Manager for Wan-Wan Enterprise overseeing daily cash balancing, staff payroll, and stock replenishment.'
  },
  {
    name: 'E-Commerce & Pop-Up Market Coordination',
    category: 'operations',
    level: 'Advanced',
    iconName: 'Layers',
    description: 'Order fulfillment, customer support, supplier logistics, and pop-up market bazaar coordination.',
    practicalUse: 'Scaled Bonbon Blings online and in university pop-ups; coordinated market stalls and fundraising campaigns for KASAMA.'
  },
  {
    name: 'Executive Minutes & Action Tracking',
    category: 'operations',
    level: 'Expert',
    iconName: 'ClipboardList',
    description: 'Recording clear executive meeting summaries, decisions made, and actionable task assignments with deadlines.',
    practicalUse: 'Secretariat support for MSU-IIT Supreme Student Council (Ways & Means committee) and municipal legislative sessions.'
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'dilg-legal',
    role: 'Legal & Administrative Intern (480 Hours)',
    organization: 'Department of the Interior and Local Government (DILG)',
    department: 'Region X Regional Legal Service',
    period: 'Jan 2026 – May 2026',
    location: 'Cagayan de Oro City, Misamis Oriental',
    type: 'Legal & Admin',
    badgeColor: 'emerald',
    description: 'Completed 480 intensive hours directly supporting the Regional Legal Service attorneys, legal officers, and executive staff.',
    highlights: [
      'Organized and indexed sensitive legal records, case dossiers, and inter-agency correspondences with 100% data confidentiality.',
      'Drafted formal routine endorsements, transmittals, and administrative legal documents adhering to strict civil service protocols.',
      'Logged, tracked, and scheduled legal consultations and compliance deadlines across multiple regional local government units.',
      'Maintained digital Google Drive and physical filing systems ensuring rapid document retrieval for regional attorneys.'
    ],
    skillsApplied: ['Legal Records Management', 'Confidentiality', 'Google Drive/MS Office', 'Government Correspondence']
  },
  {
    id: 'peso-clerical',
    role: 'Clerical Aide I – DOLE SPES Program',
    organization: 'Municipality of Medina',
    department: 'Public Employment Service Office (PESO)',
    period: 'May 2026 – June 2026',
    location: 'Medina, Misamis Oriental',
    type: 'Government & Public Service',
    badgeColor: 'blue',
    description: 'Spearheaded front-desk client intake, applicant databases, and employment facilitation documentation.',
    highlights: [
      'Processed intake data and verified credentials for hundreds of job-seekers and special program beneficiaries using Google Sheets and MS Excel.',
      'Coordinated applicant appointment schedules and prepared verified statistical reports for DOLE regional submission.',
      'Delivered polite, prompt client-facing communication to job-seekers and local employers.'
    ],
    skillsApplied: ['Data Entry & Verification', 'Customer Support', 'Google Sheets', 'Record Auditing']
  },
  {
    id: 'msu-ways-means',
    role: 'Ways and Means Associate Secretary',
    organization: 'Kataas-Taasang Sanggunian ng mga Mag-aaral (KASAMA)',
    department: 'Mindanao State University - Iligan Institute of Technology',
    period: 'Aug 2023 – Aug 2025',
    location: 'Iligan City, Lanao Del Norte',
    type: 'Student Governance',
    badgeColor: 'amber',
    description: 'Appointed executive secretary handling committee logistics, pop-up market coordination, resource mobilization, and financial accounting.',
    highlights: [
      'Spearheaded university fundraising initiatives, campus pop-up merchandise booths, and market coordination for student events.',
      'Recorded and published meticulous executive meeting minutes, resolutions, and financial tracking logs across 2 consecutive academic years.',
      'Awarded 6 major leadership and integrity honors for exceptional dedication, accountability, and ethical stewardship.',
      'Managed digital folders, project timelines, and logistical coordination for campus-wide initiatives and budget allocations.'
    ],
    skillsApplied: ['Pop-Up Market Coordination', 'Executive Minutes Taking', 'Financial Tracking', 'Multi-Stakeholder Coordination']
  },
  {
    id: 'sangguniang-bayan',
    role: 'Clerical Aide I – DOLE SPES Program',
    organization: 'Municipality of Medina',
    department: 'Office of the Sangguniang Bayan (Local Legislative Council)',
    period: 'Jun – Jul 2024 & Jun – Jul 2025',
    location: 'Medina, Misamis Oriental',
    type: 'Government & Public Service',
    badgeColor: 'blue',
    description: 'Supported the municipal legislative body in archiving ordinances, resolutions, and session minutes across two consecutive terms.',
    highlights: [
      'Encoded municipal ordinances, council resolutions, and committee reports into the municipal digital repository.',
      'Assisted in preparing session agenda binders, attendee attendance logs, and legislative calendars.',
      'Re-hired for a second consecutive term due to proven reliability, fast typing speed, and meticulous attention to detail.'
    ],
    skillsApplied: ['Legislative Archiving', 'Agenda Management', 'Typing & Data Entry', 'Filing Systems']
  },
  {
    id: 'wan-wan-sales',
    role: 'Retail Sales Manager',
    organization: 'Wan-Wan Enterprise, Inc.',
    period: 'Mar 2020 – Jun 2022',
    location: 'Medina, Misamis Oriental',
    type: 'Business & E-Commerce',
    badgeColor: 'purple',
    description: 'Managed retail store operations, customer service, daily sales auditing, inventory control, and staff payroll.',
    highlights: [
      'Delivered exceptional customer service, direct customer engagement, and handled active retail sales transactions.',
      'Performed daily end-of-day sales auditing, cash reconciliation, and facilitated staff payroll payments.',
      'Oversaw inventory management, stock replenishment cycles, and resolved on-site customer and supplier inquiries.',
      'Trained and supervised team members on standard operating procedures, customer engagement, and cash handling.'
    ],
    skillsApplied: ['Customer Engagement', 'Sales Auditing & Cash Reconciliation', 'Payroll Facilitation', 'Inventory Management', 'Team Training']
  },
  {
    id: 'bonbon-blings',
    role: 'Founder & Operations Manager',
    organization: 'Bonbon Blings',
    period: 'Mar 2022 – Present',
    location: 'Iligan City & Remote',
    type: 'Business & E-Commerce',
    badgeColor: 'purple',
    description: 'Bootstrapped and managed an independent accessories brand, balancing e-commerce operations, pop-up market booths, creative design, and logistics.',
    highlights: [
      'Organized and coordinated on-ground pop-up market booths and bazaars alongside digital e-commerce sales channels.',
      'Designed all visual promotional graphics, product banners, and social media posts using Canva Pro.',
      'Managed customer inquiries, orders, order tracking, and post-purchase follow-ups with 100% positive satisfaction feedback.',
      'Maintained inventory spreadsheets and profit/expense tracking sheets in Google Sheets.'
    ],
    skillsApplied: ['Pop-Up Market Booths', 'Canva Graphics', 'Customer Service', 'E-Commerce Logistics', 'Spreadsheet Budgeting']
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    title: 'Pillar of Commitment Award',
    role: 'Ways and Means Associate',
    period: 'A.Y. 2024 – 2025',
    organization: 'KASAMA - MSU-IIT',
    description: 'Bestowed for steadfast loyalty, consistency, and tireless dedication to executive governance.'
  },
  {
    title: 'Catalyst of Impact Award',
    role: 'Ways and Means Associate',
    period: 'A.Y. 2024 – 2025',
    organization: 'KASAMA - MSU-IIT',
    description: 'Recognized for driving measurable operational improvements and resource mobilization.'
  },
  {
    title: 'Beacon of Integrity Award',
    role: 'Ways and Means Associate',
    period: 'A.Y. 2024 – 2025',
    organization: 'KASAMA - MSU-IIT',
    description: 'Honored for transparent, accountable, and highly ethical stewardship of committee assets and records.'
  },
  {
    title: 'Kasama Service Award',
    role: 'Ways and Means Associate',
    period: 'A.Y. 2024 – 2025',
    organization: 'KASAMA - MSU-IIT',
    description: 'Awarded for exemplary public service and secretariat support to the student body.'
  },
  {
    title: 'Exemplary Officer Award',
    role: 'Ways and Means Associate',
    period: 'A.Y. 2023 – 2024',
    organization: 'KASAMA - MSU-IIT',
    description: 'Recognized as an outstanding student leader demonstrating high administrative efficacy.'
  },
  {
    title: 'Kasama Service Award',
    role: 'Ways and Means Associate',
    period: 'A.Y. 2023 – 2024',
    organization: 'KASAMA - MSU-IIT',
    description: 'Conferred for continuous meritorious support and council secretariat operations.'
  },
];

export const EDUCATION_DATA = [
  {
    institution: 'Mindanao State University - Iligan Institute of Technology (MSU-IIT)',
    degree: 'Bachelor of Arts in Political Science',
    period: '2022 – July 2026',
    location: 'Iligan City, Lanao Del Norte',
    latinHonor: 'Cum Laude',
    honors: 'Consistent Academic Lister',
    details: 'Graduated Cum Laude in July 2026 from MSU-IIT. Specialized in governance, public administration, legal systems, and policy analysis. Consistent Academic Lister throughout undergraduate studies with superior research, formal drafting, and analytical problem-solving skills.'
  },
  {
    institution: 'Christ the King College - Gingoog',
    degree: 'Senior High School - Humanities and Social Sciences (HUMSS)',
    period: '2020 – 2022',
    location: 'Gingoog City, Misamis Oriental',
    latinHonor: '',
    honors: 'Graduated With Honors',
    details: 'Excellence in oral communication, social sciences, creative writing, and leadership.'
  }
];

export const RECRUITER_FAQS = [
  {
    q: 'What specific VA roles is Niña best suited for?',
    a: 'Executive Virtual Assistant, Administrative Assistant, Legal Assistant / Paralegal Support, Retail / E-Commerce Operations Coordinator, Customer Support Lead, and Project Assistant. Her 480 hours at DILG-X, municipal public service, and Wan-Wan Enterprise retail management make her extraordinarily strong in document accuracy, discretion, customer care, and executive communication.'
  },
  {
    q: 'What is her availability and timezone flexibility?',
    a: 'Based in the Philippines (GMT+8), Niña can accommodate overlapping working hours with US (EST/PST), UK/European (GMT/BST), and Australian (AEST) business hours for meetings, daily standups, and live task coordination.'
  },
  {
    q: 'What hardware and internet setup does she use?',
    a: 'Equipped with a dedicated high-performance workstation, primary high-speed fiber internet, secondary backup mobile LTE connection, noise-canceling headset, and a quiet, professional remote workspace.'
  },
  {
    q: 'How does she handle confidential company or client data?',
    a: 'Trained through 480 hours at the DILG Regional Legal Service handling sensitive legal casework, state records, and government communications. She adheres strictly to Non-Disclosure Agreements (NDAs), uses password managers, and maintains clean file access protocols.'
  }
];

import { SkillItem, ExperienceItem, AwardItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Niña Bernadeth R. Balangue',
  title: 'Executive & Administrative Virtual Assistant',
  subTitle: 'Legal Operations & Remote Business Support Specialist',
  email: 'nbrbalangue@gmail.com',
  phone: '(+63) 964 752 1575',
  location: 'Medina, Misamis Oriental, Philippines',
  availability: 'Available for Full-time & Part-time Remote Roles',
  timezone: 'GMT+8 (Philippine Time) • Adaptable to US, UK, and AUS Time Zones',
  summary: 'Detail-oriented and high-capacity Virtual Assistant with an extensive background in government legal administration (480 hours at DILG-X Regional Legal Service), municipal operations, and student governance. Proven track record in streamlining executive workflows, managing complex calendars and inbox triage, organizing high-stakes documents, handling customer relations, and designing professional brand assets in Canva and Google Workspace.',
  eligibility: 'Civil Service Examination (Professional Level) Passer',
  degree: 'Bachelor of Arts in Political Science',
  university: 'Mindanao State University - Iligan Institute of Technology (MSU-IIT)',
  honors: 'Consistent Academic Lister for all semesters (2022–2026)',
};

export const CORE_METRICS = [
  { label: 'Legal & Admin Experience', value: '480+ Hrs', sub: 'DILG-X Regional Legal Service' },
  { label: 'Government Eligibility', value: 'CSC Passer', sub: 'Professional Level Certified' },
  { label: 'Academic Standing', value: 'Consistent Lister', sub: 'MSU-IIT BA Political Science' },
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
    name: 'E-Commerce & Retail Operations',
    category: 'operations',
    level: 'Advanced',
    iconName: 'ShoppingBag',
    description: 'Order fulfillment, customer service, inventory reconciliations, and supplier communications.',
    practicalUse: 'Owned & scaled Bonbon Blings; served as Retail Sales Manager for Wan-Wan Enterprise overseeing daily cash & stock.'
  },
  {
    name: 'Executive Minutes & Action Tracking',
    category: 'operations',
    level: 'Expert',
    iconName: 'ClipboardList',
    description: 'Recording clear executive meeting summaries, decisions made, and actionable task assignments with deadlines.',
    practicalUse: 'Secretariat support for MSU-IIT Supreme Student Council (Ways & Means committee) and municipal sessions.'
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
    description: 'Served 480 intensive hours supporting the Regional Legal Service attorneys and senior administrative officers.',
    highlights: [
      'Organized and indexed sensitive legal records, case dossiers, and inter-agency correspondences with 100% data confidentiality.',
      'Drafted formal routine endorsements, transmittals, and administrative legal documents adhering to strict civil service protocols.',
      'Logged, tracked, and scheduled legal consultations and compliance deadlines across multiple regional government units.',
      'Maintained digital and physical filing systems ensuring rapid retrieval for regional attorneys and legal researchers.'
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
      'Processed intake data for hundreds of job-seekers and special program beneficiaries using Google Sheets and MS Excel.',
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
    description: 'Elected/Appointed high-level executive secretary handling committee logistics, resource mobilization, and inter-committee scheduling.',
    highlights: [
      'Recorded and published meticulous executive meeting minutes, resolutions, and financial tracking logs across 2 consecutive academic years.',
      'Awarded 6 major leadership and integrity honors for exceptional dedication, accountability, and ethical stewardship.',
      'Managed digital folders, project timelines, and logistical coordination for campus-wide initiatives and budget allocations.'
    ],
    skillsApplied: ['Executive Minutes Taking', 'Financial Tracking', 'Multi-Stakeholder Coordination', 'Canva Presentations']
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
    description: 'Supported the municipal legislative body in archiving ordinances, resolutions, and session minutes.',
    highlights: [
      'Encoded municipal ordinances, council resolutions, and committee reports into the municipal digital repository.',
      'Assisted in preparing session agenda binders, attendee attendance logs, and legislative calendars.',
      'Re-hired for a second consecutive term due to proven reliability, fast typing speed, and attention to detail.'
    ],
    skillsApplied: ['Legislative Archiving', 'Agenda Management', 'Typing & Data Entry', 'Filing Systems']
  },
  {
    id: 'bonbon-blings',
    role: 'Founder & Operations Manager',
    organization: 'Bonbon Blings',
    period: 'Mar 2022 – Present',
    location: 'Iligan City & Remote',
    type: 'Business & E-Commerce',
    badgeColor: 'purple',
    description: 'Bootstrapped and managed an independent accessories e-commerce brand, balancing creative, marketing, and logistics.',
    highlights: [
      'Designed all visual promotional graphics, product banners, and social media posts using Canva.',
      'Managed customer inquiries, orders, order tracking, and post-purchase follow-ups with 5-star feedback.',
      'Maintained inventory spreadsheets and profit/expense tracking sheets in Google Sheets.'
    ],
    skillsApplied: ['Canva Graphics', 'Customer Service', 'E-Commerce Logistics', 'Spreadsheet Budgeting']
  },
  {
    id: 'wan-wan-sales',
    role: 'Retail Sales Manager',
    organization: 'Wan-Wan Enterprise, Inc.',
    period: 'Mar 2020 – Jun 2022',
    location: 'Medina, Misamis Oriental',
    type: 'Business & E-Commerce',
    badgeColor: 'purple',
    description: 'Managed retail floor operations, daily cash reconciliation, and stock inventory audits.',
    highlights: [
      'Performed daily end-of-day sales auditing and cash balance reporting.',
      'Supervised inventory stock replenishments and resolved on-site customer requests.',
      'Trained team members on standard operating procedures and customer service standards.'
    ],
    skillsApplied: ['Cash Reconciliation', 'Inventory Management', 'Customer Relations', 'Team Leadership']
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
    period: 'A.Y. 2022 – Present',
    location: 'Iligan City, Lanao Del Norte',
    honors: 'Consistent Academic Lister for all semesters (2022–2026)',
    details: 'Focus on governance, public administration, legal systems, and policy analysis. Developed superior research, formal drafting, and analytical problem-solving skills.'
  },
  {
    institution: 'Christ the King College - Gingoog',
    degree: 'Senior High School - Humanities and Social Sciences (HUMSS)',
    period: 'A.Y. 2020 – 2022',
    location: 'Gingoog City, Misamis Oriental',
    honors: 'Graduated With Honors',
    details: 'Excellence in oral communication, social sciences, creative writing, and leadership.'
  }
];

export const RECRUITER_FAQS = [
  {
    q: 'What specific VA roles is Niña best suited for?',
    a: 'Executive Virtual Assistant, Administrative Assistant, Legal Assistant / Paralegal Support, Operations Coordinator, Customer Support Lead, and E-Commerce Assistant. Her 480 hours at DILG-X and local government offices make her extraordinarily strong in document accuracy, discretion, and executive communication.'
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

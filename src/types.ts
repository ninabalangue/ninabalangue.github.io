export interface SkillItem {
  name: string;
  category: 'workspace' | 'office' | 'design' | 'operations' | 'legal';
  level: string;
  iconName: string;
  description: string;
  practicalUse: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  department?: string;
  period: string;
  location: string;
  type: 'Legal & Admin' | 'Government & Public Service' | 'Student Governance' | 'Business & E-Commerce';
  badgeColor: string;
  description: string;
  highlights: string[];
  skillsApplied: string[];
}

export interface WorkSample {
  id: string;
  title: string;
  category: 'Executive Support' | 'Data & Spreadsheets' | 'Documentation' | 'Canva Design';
  summary: string;
  details: string;
  deliverableSnippet: React.ReactNode;
  tags: string[];
}

export interface AwardItem {
  title: string;
  role: string;
  period: string;
  organization: string;
  description: string;
}

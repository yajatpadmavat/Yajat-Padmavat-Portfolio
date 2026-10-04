export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  date: string;
  liveUrl: string;
  githubUrl?: string;
  datasetUrl?: string;
  image?: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerShort: string;
  date: string;
  image?: string;
  duration?: string;
  driveUrl?: string;
  description: string;
  keyLearnings: string[];
  credentials: {
    signatories: string[];
    verificationNote: string;
  };
}



export interface EducationItem {
  institution: string;
  degree: string;
  scoreLabel: string;
  scoreValue: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    detail: string;
    durationDetail?: string;
  }[];
}

export interface EmployerInquiry {
  id: string;
  senderName: string;
  email: string;
  company: string;
  roleType: string;
  message: string;
  timestamp: string;
}

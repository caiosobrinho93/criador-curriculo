export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    summary: string;
  };
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  skills: string[];
  languages: { language: string; level: string }[];
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  languages: [],
};
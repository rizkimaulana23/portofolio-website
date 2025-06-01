export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  url?: string;
  github?: string;
  techStack: string[];
  featured: boolean;
  category: string;
  year: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  techStack: string[];
  current: boolean;
}

export interface Contact {
  type: 'email' | 'linkedin' | 'github' | 'twitter' | 'website' | 'phone';
  label: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  contacts: Contact[];
  techStacks: string[];
  profileImage?: string;
}

export interface ModalState {
  open: boolean;
  projectId: string | null;
} 
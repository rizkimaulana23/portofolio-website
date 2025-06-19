import type { PersonalInfo, Project, Experience } from '../types';
import { TechStack } from '../types';
import { RepositoryType } from '../types';

// Helper function to get unique tech stacks from projects
const getUniqueTechStacksFromProjects = (projects: Project[]): TechStack[] => {
  const allTechStacks = projects.flatMap(project => project.techStack);
  const uniqueTechStacks = Array.from(new Set(allTechStacks));
  return uniqueTechStacks.sort((a, b) => a.localeCompare(b));
};

export const personalInfo: PersonalInfo = {
  name: 'Rizki Maulana',
  title: 'Software Engineer',
  description: 'Passionate Software Engineer from Fasilkom UI with expertise in full-stack development, specializing in modern web technologies and scalable software solutions.',
  location: 'Jakarta, Indonesia',
  contacts: [
    {
      type: 'email',
      label: 'rizki.maulana12@ui.ac.id',
      url: 'mailto:rizki.maulana23@ui.ac.id',
      icon: 'Email'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/rizmau',
      icon: 'LinkedIn'
    },
    {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/rizkimaulana23',
      icon: 'GitHub'
    },
    {
      type: 'twitter',
      label: 'Twitter',
      url: 'https://twitter.com/wftRizki',
      icon: 'Twitter'
    }
  ],
  techStacks: [] // Will be populated dynamically
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'ArtSI',
    shortDescription: 'Talent and Project Management System for Social Media Agency',
    fullDescription: 'A comprehensive information system designed specifically for social media agencies to streamline their talent and project management workflows. The platform features robust modules for Talent Management, Client Relations, Project Tracking, Financial Management, Content Submission, and Content Management. Built to handle the fast-paced environment of social media agencies, the system efficiently manages tight deadlines and frequent content revisions while maintaining clear communication channels between team members and clients.',
    markdownFile: 'artsi.md',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=ArtSI'
    ],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/rizkimaulana23/artsi-frontend',
        type: RepositoryType.GITHUB
      },
      {
        label: 'Backend',
        url: 'https://github.com/rizkimaulana23/artsi-backend',
        type: RepositoryType.GITHUB
      }
    ],
    techStack: [
      TechStack.REACT,
      TechStack.POSTGRESQL,
      TechStack.NODE_JS,
      TechStack.TYPESCRIPT,
    ],
    featured: true,
    category: 'Web Development',
    year: 2025
  },
  {
    id: '2',
    title: 'Sistem Informasi Pasar Merdeka',
    shortDescription: 'Traditional Market Information System for monitoring traditional market, infrastructure, food types, stock changes traditional market in Jakarta.',
    fullDescription: 'A comprehensive information system designed specifically for social media agencies to streamline their talent and project management workflows. The platform features robust modules for Talent Management, Client Relations, Project Tracking, Financial Management, Content Submission, and Content Management. Built to handle the fast-paced environment of social media agencies, the system efficiently manages tight deadlines and frequent content revisions while maintaining clear communication channels between team members and clients.',
    markdownFile: 'artsi.md',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=ArtSI'
    ],
    repositories: [
      {
        label: 'Source Code',
        url: 'https://github.com/rizkimaulana23/artsi',
        type: RepositoryType.GITHUB
      }
    ],
    techStack: [
      TechStack.POSTGRESQL,
      TechStack.JAVA,
      TechStack.SPRING
    ],
    featured: true,
    category: 'Web Development',
    year: 2025
  },
  {
    id: '3',
    title: 'Pet Clinic',
    shortDescription: 'System designed for learning SQL for Database Course in University of Indonesia ',
    fullDescription: 'This system is designed for the Database Course to teach students to make a system using purely SQL Query to understand deeper on how to make an SQL Query in a much more real cases. In this case, I\'m the one that design the system because I\'m an assistant lecturer for the Database course in my university.',
    markdownFile: 'petclinic.md',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=ArtSI'
    ],
    repositories: [
      {
        label: 'Source Code',
        url: 'https://github.com/rizkimaulana23/petclinic',
        type: RepositoryType.GITHUB
      }
    ],
    techStack: [
      TechStack.TYPESCRIPT,
      TechStack.EXPRESS_JS,
      TechStack.REACT,
      TechStack.POSTGRESQL
    ],
    featured: true,
    category: 'Web Development',
    year: 2025
  },
  {
    id: '4',
    title: 'KALM',
    shortDescription: 'System designed for learning SQL for Database Course in University of Indonesia ',
    fullDescription: 'This system is designed for the Database Course to teach students to make a system using purely SQL Query to understand deeper on how to make an SQL Query in a much more real cases. In this case, I\'m the one that design the system because I\'m an assistant lecturer for the Database course in my university.',
    markdownFile: 'petclinic.md',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=ArtSI'
    ],
    repositories: [
      {
        label: 'Figma Design',
        url: 'https://figma.com/file/your-figma-file',
        type: RepositoryType.FIGMA
      }
    ],
    techStack: [
      TechStack.TYPESCRIPT,
      TechStack.EXPRESS_JS,
      TechStack.REACT,
      TechStack.POSTGRESQL
    ],
    featured: true,
    category: 'UI/UX',
    year: 2025
  },
  {
    id: '5',
    title: 'The Lucent Quarter CRM',
    shortDescription: 'System designed for learning SQL for Database Course in University of Indonesia ',
    fullDescription: 'This system is designed for the Database Course to teach students to make a system using purely SQL Query to understand deeper on how to make an SQL Query in a much more real cases. In this case, I\'m the one that design the system because I\'m an assistant lecturer for the Database course in my university.',
    markdownFile: 'petclinic.md',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=ArtSI'
    ],
    repositories: [
      {
        label: 'Source Code',
        url: 'https://github.com/rizkimaulana23/petclinic',
        type: RepositoryType.GITHUB
      }
    ],
    techStack: [
      TechStack.TYPESCRIPT,
      TechStack.EXPRESS_JS,
      TechStack.REACT,
      TechStack.POSTGRESQL
    ],
    featured: true,
    category: 'UI/UX',
    year: 2025
  }, 
  {
    id: '6',
    title: 'SiAsisten Remake',
    shortDescription: 'The remake of Faculty of Computer Science SiAsisten for learning Spring Boot. This application serves the front-end and the back-end.',
    fullDescription: 'This system is designed for the Database Course to teach students to make a system using purely SQL Query to understand deeper on how to make an SQL Query in a much more real cases. In this case, I\'m the one that design the system because I\'m an assistant lecturer for the Database course in my university.',
    markdownFile: 'siasisten-remake.md',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=ArtSI'
    ],
    repositories: [
      {
        label: 'Source Code',
        url: 'https://github.com/rizkimaulana23/petclinic',
        type: RepositoryType.GITHUB
      }
    ],
    techStack: [
      TechStack.TYPESCRIPT,
      TechStack.EXPRESS_JS,
      TechStack.REACT,
      TechStack.POSTGRESQL
    ],
    featured: true,
    category: 'UI/UX',
    year: 2025
  }
];

// Dynamically set techStacks based on projects
personalInfo.techStacks = getUniqueTechStacksFromProjects(projects);

export const experiences: Experience[] = [
  {
    id: '2',
    title: 'Lead Developer Contract Project',
    company: 'PT Arteva Kreative Agensi',
    location: 'Jakarta, Indonesia',
    startDate: '2025-02',
    description: [
      'Developed and maintained multiple client projects using modern web technologies',
      'Built responsive web applications with React and Material-UI',
      'Implemented RESTful APIs using Express.js and MongoDB',
      'Collaborated with design team to create pixel-perfect user interfaces',
      'Participated in agile development process and sprint planning'
    ],
    techStack: [
      TechStack.REACT,
      TechStack.EXPRESS_JS,
      TechStack.MONGODB,
      TechStack.MATERIAL_UI,
      TechStack.GIT
    ],
    current: false
  },
  {
    id: '3',
    title: 'Full Stack Developer Intern',
    company: 'Pusat Ilmu Komputer Indonesia',
    location: 'Depok, Indonesia',
    startDate: '2025-01',
    description: [
      'Contributed to the development of MVP for early-stage startup',
      'Learned modern development practices and methodologies',
      'Built features for mobile application using React Native',
      'Participated in daily standups and sprint retrospectives',
      'Gained experience in startup environment and rapid prototyping'
    ],
    techStack: [
      TechStack.REACT_NATIVE,
      TechStack.JAVASCRIPT,
      TechStack.FIREBASE,
      TechStack.REDUX
    ],
    current: false
  },
  {
    id: '4',
    title: 'Computer Science Student',
    company: 'Fakultas Ilmu Komputer, Universitas Indonesia',
    location: 'Depok, Indonesia',
    startDate: '2022-08',
    description: [
      'Bachelor of Computer Science with focus on information systems',
      'Relevant coursework: Data Structures, Algorithms, Database Systems, Software Design, Software Engineering',
      'Teaching assistant for introductory programming courses'
    ],
    techStack: [
      TechStack.JAVA,
      TechStack.PYTHON,
      TechStack.POSTGRESQL,
    ],
    current: false
  }
]; 
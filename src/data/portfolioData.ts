import type { PersonalInfo, Project, Experience } from '../types';
import { TechStack } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Rizki Maulana',
  title: 'Software Engineer',
  description: 'Passionate Software Engineer from Fasilkom UI with expertise in full-stack development, specializing in modern web technologies and scalable software solutions.',
  location: 'Jakarta, Indonesia',
  contacts: [
    {
      type: 'email',
      label: 'rizki.maulana@email.com',
      url: 'mailto:rizki.maulana@email.com',
      icon: 'Email'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/rizki-maulana',
      icon: 'LinkedIn'
    },
    {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/rizkimaulana',
      icon: 'GitHub'
    },
    {
      type: 'twitter',
      label: 'Twitter',
      url: 'https://twitter.com/rizkimaulana',
      icon: 'Twitter'
    }
  ],
  techStacks: [
    TechStack.JAVASCRIPT,
    TechStack.TYPESCRIPT,
    TechStack.REACT,
    TechStack.NODE_JS,
    TechStack.PYTHON,
    TechStack.JAVA,
    TechStack.POSTGRESQL,
    TechStack.MONGODB,
    TechStack.DOCKER,
    TechStack.AWS,
    TechStack.GIT,
    TechStack.NEXT_JS
  ]
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    shortDescription: 'Full-stack e-commerce solution with modern UI and payment integration',
    fullDescription: 'A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. The platform supports multiple payment methods and real-time inventory management.',
    markdownFile: 'ecommerce-platform.md',
    images: [
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'https://picsum.photos/200'
    ],
    url: 'https://ecommerce-demo.example.com',
    github: 'https://github.com/rizkimaulana/ecommerce-platform',
    techStack: [
      TechStack.REACT,
      TechStack.TYPESCRIPT,
      TechStack.NODE_JS,
      TechStack.POSTGRESQL,
      TechStack.STRIPE_API,
      TechStack.DOCKER
    ],
    featured: true,
    category: 'Web Development',
    year: 2024
  },
  {
    id: '2',
    title: 'Task Management App',
    shortDescription: 'Collaborative task management application with real-time updates',
    fullDescription: 'A modern task management application similar to Trello, built with React and Firebase. Features include drag-and-drop functionality, real-time collaboration, team management, file attachments, due dates, and progress tracking. The app supports multiple project boards and team member assignments.',
    markdownFile: 'task-management-app.md',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=Task+Boards',
      'https://via.placeholder.com/800x600/42a5f5/ffffff?text=Task+Details',
      'https://via.placeholder.com/800x600/64b5f6/ffffff?text=Team+Dashboard'
    ],
    url: 'https://taskmanager-demo.example.com',
    github: 'https://github.com/rizkimaulana/task-manager',
    techStack: [
      TechStack.REACT,
      TechStack.TYPESCRIPT,
      TechStack.FIREBASE,
      TechStack.MATERIAL_UI,
      TechStack.REACT_DND
    ],
    featured: true,
    category: 'Web Development',
    year: 2024
  },
  {
    id: '3',
    title: 'Weather Analytics Dashboard',
    shortDescription: 'Real-time weather data visualization and analytics platform',
    fullDescription: 'A comprehensive weather analytics dashboard that aggregates data from multiple weather APIs. Features interactive charts, historical data analysis, weather forecasting, and location-based weather tracking. Built with modern data visualization libraries and responsive design.',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=Weather+Dashboard',
      'https://via.placeholder.com/800x600/42a5f5/ffffff?text=Analytics+Charts',
      'https://via.placeholder.com/800x600/64b5f6/ffffff?text=Forecast+View'
    ],
    url: 'https://weather-analytics.example.com',
    github: 'https://github.com/rizkimaulana/weather-dashboard',
    techStack: [
      TechStack.REACT,
      TechStack.D3_JS,
      TechStack.TYPESCRIPT,
      TechStack.EXPRESS_JS,
      TechStack.WEATHER_API
    ],
    featured: true,
    category: 'Data Visualization',
    year: 2023
  },
  {
    id: '4',
    title: 'Mobile Banking App',
    shortDescription: 'Secure mobile banking application with biometric authentication',
    fullDescription: 'A secure mobile banking application built with React Native. Features include biometric authentication, account balance tracking, transaction history, money transfers, bill payments, and QR code payments. The app implements advanced security measures and follows banking industry standards.',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=Banking+Home',
      'https://via.placeholder.com/800x600/42a5f5/ffffff?text=Transaction+History',
      'https://via.placeholder.com/800x600/64b5f6/ffffff?text=Transfer+Money'
    ],
    github: 'https://github.com/rizkimaulana/mobile-banking',
    techStack: [
      TechStack.REACT_NATIVE,
      TechStack.TYPESCRIPT,
      TechStack.NODE_JS,
      TechStack.POSTGRESQL,
      TechStack.JWT
    ],
    featured: false,
    category: 'Mobile Development',
    year: 2023
  },
  {
    id: '5',
    title: 'AI Chatbot Platform',
    shortDescription: 'Intelligent chatbot platform with natural language processing',
    fullDescription: 'An AI-powered chatbot platform that can be integrated into websites and applications. Features include natural language processing, intent recognition, multi-language support, conversation flow management, and analytics dashboard. Built with machine learning capabilities for continuous improvement.',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=Chatbot+Interface',
      'https://via.placeholder.com/800x600/42a5f5/ffffff?text=Admin+Dashboard',
      'https://via.placeholder.com/800x600/64b5f6/ffffff?text=Analytics+View'
    ],
    url: 'https://chatbot-platform.example.com',
    github: 'https://github.com/rizkimaulana/ai-chatbot',
    techStack: [
      TechStack.PYTHON,
      TechStack.TENSORFLOW,
      TechStack.REACT,
      TechStack.NODE_JS,
      TechStack.MONGODB
    ],
    featured: false,
    category: 'AI/ML',
    year: 2023
  },
  {
    id: '6',
    title: 'DevOps Monitoring Tool',
    shortDescription: 'Comprehensive monitoring and alerting system for DevOps teams',
    fullDescription: 'A comprehensive monitoring and alerting system for DevOps teams. Features include server monitoring, application performance monitoring, log aggregation, alert management, and custom dashboards. The tool integrates with popular DevOps tools and provides real-time insights into system health.',
    images: [
      'https://via.placeholder.com/800x600/1976d2/ffffff?text=Monitoring+Dashboard',
      'https://via.placeholder.com/800x600/42a5f5/ffffff?text=Alert+Management',
      'https://via.placeholder.com/800x600/64b5f6/ffffff?text=System+Metrics'
    ],
    github: 'https://github.com/rizkimaulana/devops-monitor',
    techStack: [
      TechStack.GO,
      TechStack.REACT,
      TechStack.PROMETHEUS,
      TechStack.GRAFANA,
      TechStack.DOCKER,
      TechStack.KUBERNETES
    ],
    featured: false,
    category: 'DevOps',
    year: 2022
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Innovators Indonesia',
    location: 'Jakarta, Indonesia',
    startDate: '2023-01',
    description: [
      'Lead development of scalable web applications serving 100k+ users',
      'Architect and implement microservices using Node.js and Docker',
      'Mentor junior developers and conduct code reviews',
      'Collaborate with product managers to define technical requirements',
      'Optimize application performance resulting in 40% faster load times'
    ],
    techStack: [
      TechStack.REACT,
      TechStack.NODE_JS,
      TechStack.POSTGRESQL,
      TechStack.DOCKER,
      TechStack.AWS,
      TechStack.TYPESCRIPT
    ],
    current: true
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Digital Solutions PT',
    location: 'Jakarta, Indonesia',
    startDate: '2021-06',
    endDate: '2022-12',
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
    title: 'Software Engineering Intern',
    company: 'Startup Accelerator',
    location: 'Jakarta, Indonesia',
    startDate: '2020-07',
    endDate: '2021-05',
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
    startDate: '2018-08',
    endDate: '2022-07',
    description: [
      'Bachelor of Computer Science with focus on Software Engineering',
      'Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering',
      'Active member of programming club and hackathon participant',
      'Teaching assistant for introductory programming courses',
      'Thesis: "Machine Learning Applications in Web Development"'
    ],
    techStack: [
      TechStack.JAVA,
      TechStack.PYTHON,
      TechStack.CPP,
      TechStack.POSTGRESQL,
      TechStack.TENSORFLOW
    ],
    current: false
  }
]; 
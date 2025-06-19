export const TechStack = {
  // Frontend Technologies
  REACT: 'React',
  VUE: 'Vue.js',
  ANGULAR: 'Angular',
  TYPESCRIPT: 'TypeScript',
  JAVASCRIPT: 'JavaScript',
  HTML: 'HTML',
  CSS: 'CSS',
  SCSS: 'SCSS',
  TAILWIND: 'Tailwind CSS',
  MATERIAL_UI: 'Material-UI',
  BOOTSTRAP: 'Bootstrap',
  REACT_NATIVE: 'React Native',
  FLUTTER: 'Flutter',
  NEXT_JS: 'Next.js',
  NUXT_JS: 'Nuxt.js',
  SVELTE: 'Svelte',
  REACT_DND: 'React DnD',
  REDUX: 'Redux',
  MOBX: 'MobX',
  REACT_ROUTER: 'React Router',
  
  // Backend Technologies
  NODE_JS: 'Node.js',
  EXPRESS_JS: 'Express.js',
  PYTHON: 'Python',
  DJANGO: 'Django',
  FLASK: 'Flask',
  JAVA: 'Java',
  SPRING: 'Spring',
  CSHARP: 'C#',
  DOTNET: '.NET',
  PHP: 'PHP',
  LARAVEL: 'Laravel',
  RUBY: 'Ruby',
  RAILS: 'Rails',
  GO: 'Go',
  RUST: 'Rust',
  CPP: 'C++',
  
  // Databases
  POSTGRESQL: 'PostgreSQL',
  MYSQL: 'MySQL',
  MONGODB: 'MongoDB',
  REDIS: 'Redis',
  SQLITE: 'SQLite',
  FIREBASE: 'Firebase',
  FIRESTORE: 'Firestore',
  DYNAMODB: 'DynamoDB',
  ELASTICSEARCH: 'Elasticsearch',
  
  // Cloud & DevOps
  AWS: 'AWS',
  AZURE: 'Azure',
  GCP: 'Google Cloud',
  DOCKER: 'Docker',
  KUBERNETES: 'Kubernetes',
  JENKINS: 'Jenkins',
  GITHUB_ACTIONS: 'GitHub Actions',
  GITLAB_CI: 'GitLab CI',
  TERRAFORM: 'Terraform',
  ANSIBLE: 'Ansible',
  
  // APIs & Services
  REST_API: 'REST API',
  GRAPHQL: 'GraphQL',
  STRIPE_API: 'Stripe API',
  WEATHER_API: 'Weather API',
  GOOGLE_MAPS: 'Google Maps API',
  FIREBASE_AUTH: 'Firebase Auth',
  
  // Data & Analytics
  D3_JS: 'D3.js',
  CHART_JS: 'Chart.js',
  TENSORFLOW: 'TensorFlow',
  PYTORCH: 'PyTorch',
  PANDAS: 'Pandas',
  NUMPY: 'NumPy',
  
  // Tools & Testing
  GIT: 'Git',
  WEBPACK: 'Webpack',
  VITE: 'Vite',
  BABEL: 'Babel',
  ESLINT: 'ESLint',
  PRETTIER: 'Prettier',
  JEST: 'Jest',
  CYPRESS: 'Cypress',
  PLAYWRIGHT: 'Playwright',
  STORYBOOK: 'Storybook',
  
  // Monitoring & Analytics
  PROMETHEUS: 'Prometheus',
  GRAFANA: 'Grafana',
  SENTRY: 'Sentry',
  GOOGLE_ANALYTICS: 'Google Analytics',
  
  // Authentication & Security
  JWT: 'JWT',
  OAUTH: 'OAuth',
  PASSPORT: 'Passport.js',
  BCRYPT: 'bcrypt',
} as const;

// Create a union type from the const object values
export type TechStack = typeof TechStack[keyof typeof TechStack];

export const RepositoryType = {
  GITHUB: 'github',
  FIGMA: 'figma',
  BEHANCE: 'behance',
  DRIBBBLE: 'dribbble',
  OTHER: 'other'
} as const;

export type RepositoryType = typeof RepositoryType[keyof typeof RepositoryType];

export interface Repository {
  label: string;
  url: string;
  type: RepositoryType;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  markdownFile?: string;
  images: string[];
  url?: string;
  repositories: Repository[];
  techStack: TechStack[];
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
  techStack: TechStack[];
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
  techStacks: TechStack[];
  profileImage?: string;
}

export interface ModalState {
  open: boolean;
  projectId: string | null;
} 
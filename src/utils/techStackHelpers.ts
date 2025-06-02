import { TechStack } from '../types';

/**
 * Get all available tech stack values as an array
 */
export const getAllTechStacks = (): TechStack[] => {
  return Object.values(TechStack);
};

/**
 * Get tech stacks grouped by category
 */
export const getTechStacksByCategory = (): Record<string, TechStack[]> => {
  return {
    frontend: [
      TechStack.REACT,
      TechStack.VUE,
      TechStack.ANGULAR,
      TechStack.TYPESCRIPT,
      TechStack.JAVASCRIPT,
      TechStack.HTML,
      TechStack.CSS,
      TechStack.SCSS,
      TechStack.TAILWIND,
      TechStack.MATERIAL_UI,
      TechStack.BOOTSTRAP,
      TechStack.NEXT_JS,
      TechStack.NUXT_JS,
      TechStack.SVELTE,
      TechStack.REACT_DND,
      TechStack.REDUX,
      TechStack.MOBX,
      TechStack.REACT_ROUTER,
    ],
    backend: [
      TechStack.NODE_JS,
      TechStack.EXPRESS_JS,
      TechStack.PYTHON,
      TechStack.DJANGO,
      TechStack.FLASK,
      TechStack.JAVA,
      TechStack.SPRING,
      TechStack.CSHARP,
      TechStack.DOTNET,
      TechStack.PHP,
      TechStack.LARAVEL,
      TechStack.RUBY,
      TechStack.RAILS,
      TechStack.GO,
      TechStack.RUST,
      TechStack.CPP,
    ],
    mobile: [
      TechStack.REACT_NATIVE,
      TechStack.FLUTTER,
    ],
    databases: [
      TechStack.POSTGRESQL,
      TechStack.MYSQL,
      TechStack.MONGODB,
      TechStack.REDIS,
      TechStack.SQLITE,
      TechStack.FIREBASE,
      TechStack.FIRESTORE,
      TechStack.DYNAMODB,
      TechStack.ELASTICSEARCH,
    ],
    cloud: [
      TechStack.AWS,
      TechStack.AZURE,
      TechStack.GCP,
      TechStack.DOCKER,
      TechStack.KUBERNETES,
      TechStack.JENKINS,
      TechStack.GITHUB_ACTIONS,
      TechStack.GITLAB_CI,
      TechStack.TERRAFORM,
      TechStack.ANSIBLE,
    ],
    apis: [
      TechStack.REST_API,
      TechStack.GRAPHQL,
      TechStack.STRIPE_API,
      TechStack.WEATHER_API,
      TechStack.GOOGLE_MAPS,
      TechStack.FIREBASE_AUTH,
    ],
    dataAnalytics: [
      TechStack.D3_JS,
      TechStack.CHART_JS,
      TechStack.TENSORFLOW,
      TechStack.PYTORCH,
      TechStack.PANDAS,
      TechStack.NUMPY,
    ],
    tools: [
      TechStack.GIT,
      TechStack.WEBPACK,
      TechStack.VITE,
      TechStack.BABEL,
      TechStack.ESLINT,
      TechStack.PRETTIER,
      TechStack.JEST,
      TechStack.CYPRESS,
      TechStack.PLAYWRIGHT,
      TechStack.STORYBOOK,
    ],
    monitoring: [
      TechStack.PROMETHEUS,
      TechStack.GRAFANA,
      TechStack.SENTRY,
      TechStack.GOOGLE_ANALYTICS,
    ],
    security: [
      TechStack.JWT,
      TechStack.OAUTH,
      TechStack.PASSPORT,
      TechStack.BCRYPT,
    ],
  };
};

/**
 * Check if a tech stack is in a specific category
 */
export const isTechStackInCategory = (techStack: TechStack, category: keyof ReturnType<typeof getTechStacksByCategory>): boolean => {
  const categories = getTechStacksByCategory();
  return categories[category].includes(techStack);
};

/**
 * Get the display name for a tech stack (same as enum value)
 */
export const getTechStackDisplayName = (techStack: TechStack): string => {
  return techStack;
}; 
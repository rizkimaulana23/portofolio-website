// Import all markdown files statically to avoid Vite dynamic import issues
import taskManagementContent from '../content/projects/task-management-app.md?raw';
import ecommerceContent from '../content/projects/ecommerce-platform.md?raw';
import templateContent from '../content/projects/_template.md?raw';
import artsiContent from '../content/projects/artsi.md?raw';

// Create a map of all available markdown content
const markdownImportMap: Record<string, string> = {
  'task-management-app.md': taskManagementContent,
  'ecommerce-platform.md': ecommerceContent,
  '_template.md': templateContent,
  'artsi.md': artsiContent,
};

export const loadMarkdownContent = async (filename: string): Promise<string> => {
  try {
    // First try to get from the static import map
    if (markdownImportMap[filename]) {
      return markdownImportMap[filename];
    }
    
    // Fallback to fetching from public directory for any files not in the map
    console.log('File not in import map, trying public fetch for:', filename);
    const response = await fetch(`/content/projects/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${filename}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return '';
  }
};

// Legacy function - keeping for compatibility
export const loadMarkdownContentFromImport = loadMarkdownContent; 
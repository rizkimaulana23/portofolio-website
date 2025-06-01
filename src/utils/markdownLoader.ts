export const loadMarkdownContent = async (filename: string): Promise<string> => {
  try {
    // First try dynamic import for bundled content
    try {
      const module = await import(`../content/projects/${filename}?raw`);
      return module.default;
    } catch (importError) {
      console.log('Dynamic import failed, trying public fetch...', importError);
      
      // Fallback to fetching from public directory
      const response = await fetch(`/content/projects/${filename}`);
      if (!response.ok) {
        throw new Error(`Failed to load markdown file: ${filename}`);
      }
      return await response.text();
    }
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return '';
  }
};

// Legacy function - keeping for compatibility
export const loadMarkdownContentFromImport = loadMarkdownContent; 
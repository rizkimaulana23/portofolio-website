import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/portfolioData';
import type { ModalState } from '../types';

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [modalState, setModalState] = useState<ModalState>({ open: false, projectId: null });

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map(project => project.category)));
    return uniqueCategories.sort();
  }, []);

  // Filter projects based on search term and category
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = categoryFilter === '' || project.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoryFilter]);

  const handleProjectClick = (projectId: string) => {
    setModalState({ open: true, projectId });
  };

  const handleModalClose = () => {
    setModalState({ open: false, projectId: null });
  };

  const selectedProject = modalState.projectId 
    ? projects.find(p => p.id === modalState.projectId) || null
    : null;

  const handleClearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('');
  };

  return (
    <Container maxWidth="lg" sx={{ 
      py: 4,
      background: 'linear-gradient(135deg, #0a0a0a 0%, #0d1421 25%, #0a0a0a 50%, #1a1a2e 75%, #0a0a0a 100%)',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6, pt: 10 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          All Projects
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Explore my complete portfolio of projects, from web applications to mobile apps and everything in between.
        </Typography>
      </Box>

      {/* Search and Filter Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center' }}>
          <Box sx={{ flex: '1 1 300px', minWidth: 200 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                },
              }}
            />
          </Box>
          
          <Box sx={{ flex: '0 1 200px', minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={categoryFilter}
                label="Category"
                onChange={(e) => setCategoryFilter(e.target.value)}
                startAdornment={<FilterListIcon sx={{ mr: 1, color: 'action.active' }} />}
                sx={{
                  borderRadius: 3,
                }}
              >
                <MenuItem value="">All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ flex: '0 0 auto' }}>
            {(searchTerm || categoryFilter) && (
              <Chip
                label="Clear Filters"
                onClick={handleClearFilters}
                onDelete={handleClearFilters}
                color="primary"
                variant="outlined"
                sx={{ borderRadius: 3 }}
              />
            )}
          </Box>
        </Box>
      </Box>

      {/* Results Summary */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" color="text.secondary">
          Showing {filteredProjects.length} of {projects.length} projects
          {searchTerm && ` for "${searchTerm}"`}
          {categoryFilter && ` in ${categoryFilter}`}
        </Typography>
      </Box>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4, 
          justifyContent: 'center' 
        }}>
          {filteredProjects.map((project) => (
            <Box key={project.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' }, maxWidth: 400 }}>
              <ProjectCard 
                project={project} 
                onClick={() => handleProjectClick(project.id)}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h5" gutterBottom color="text.secondary">
            No projects found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try adjusting your search terms or filters
          </Typography>
        </Box>
      )}

      {/* Project Modal */}
      <ProjectModal
        open={modalState.open}
        project={selectedProject}
        onClose={handleModalClose}
      />
    </Container>
  );
};

export default ProjectsPage; 
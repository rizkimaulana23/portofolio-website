import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Avatar,
  Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LaunchIcon from '@mui/icons-material/Launch';
import ProjectCard from '../components/ProjectCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectModal from '../components/ProjectModal';
import { personalInfo, projects, experiences } from '../data/portfolioData';
import type { ModalState } from '../types';

const HomePage: React.FC = () => {
  const [modalState, setModalState] = useState<ModalState>({ open: false, projectId: null });

  const featuredProjects = projects.filter(project => project.featured);

  const handleProjectClick = (projectId: string) => {
    setModalState({ open: true, projectId });
  };

  const handleModalClose = () => {
    setModalState({ open: false, projectId: null });
  };

  const selectedProject = modalState.projectId 
    ? projects.find(p => p.id === modalState.projectId) || null
    : null;

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'email': return <EmailIcon />;
      case 'linkedin': return <LinkedInIcon />;
      case 'github': return <GitHubIcon />;
      case 'twitter': return <TwitterIcon />;
      default: return <LaunchIcon />;
    }
  };

  const handleContactClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #0d1421 25%, #0a0a0a 50%, #1a1a2e 75%, #0a0a0a 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section - Full Viewport */}
      <Box 
        id="hero"
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            py: { xs: 8, md: 4 }
          }}>
            {/* Left side - Text content */}
            <Box id="about" sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700, 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  mb: 2
                }}
              >
                Hello! I'm {personalInfo.name.split(' ')[0]}.
              </Typography>
              
              <Typography 
                variant="h5" 
                component="h2" 
                color="primary" 
                gutterBottom 
                sx={{ 
                  fontWeight: 500,
                  mb: 3,
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}
              >
                {personalInfo.title}
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  lineHeight: 1.6,
                  color: 'text.secondary',
                  maxWidth: 500,
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                {personalInfo.description}
              </Typography>

              {/* Contact Buttons */}
              <Box id="contact" sx={{ 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                {personalInfo.contacts.map((contact) => (
                  <Button
                    key={contact.type}
                    variant="outlined"
                    startIcon={getContactIcon(contact.type)}
                    onClick={() => handleContactClick(contact.url)}
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      py: 1,
                      textTransform: 'none',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                      },
                    }}
                  >
                    {contact.label}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Right side - Profile Image */}
            <Box sx={{ 
              flex: '0 0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Avatar
                sx={{
                  width: { xs: 200, md: 250 },
                  height: { xs: 200, md: 250 },
                  background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                  fontSize: { xs: '4rem', md: '5rem' },
                  fontWeight: 700,
                  boxShadow: '0 20px 40px rgba(25, 118, 210, 0.3)',
                }}
              >
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Tech Stack Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box id="tech-stack" sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Tech Stack & Skills
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1, 
            justifyContent: 'center',
            maxWidth: 800,
            mx: 'auto'
          }}>
            {personalInfo.techStacks.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                sx={{ 
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>

      <Divider sx={{ my: 0 }} />

      {/* Featured Projects Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box id="projects" sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 6 }}>
            Featured Projects
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            justifyContent: 'center' 
          }}>
            {featuredProjects.map((project) => (
              <Box key={project.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' }, maxWidth: 400 }}>
                <ProjectCard 
                  project={project} 
                  onClick={() => handleProjectClick(project.id)}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <Divider sx={{ my: 0 }} />

      {/* Experience Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box id="experience" sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 6 }}>
            Experience & Education
          </Typography>
          
          <ExperienceTimeline experiences={experiences} />
        </Box>
      </Container>

      {/* Project Modal */}
      <ProjectModal
        open={modalState.open}
        project={selectedProject}
        onClose={handleModalClose}
      />
    </Box>
  );
};

export default HomePage; 
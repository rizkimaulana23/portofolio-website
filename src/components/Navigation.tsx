import React from 'react';
import { Box, Card, IconButton, Tooltip } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmailIcon from '@mui/icons-material/Email';
import FolderIcon from '@mui/icons-material/Folder';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const showcaseButtons = [
    { id: 'hero', icon: <HomeIcon />, tooltip: 'Home' },
    { id: 'about', icon: <PersonIcon />, tooltip: 'About' },
    { id: 'tech-stack', icon: <CodeIcon />, tooltip: 'Tech Stack' },
    { id: 'projects', icon: <FolderIcon />, tooltip: 'Featured Projects' },
    { id: 'experience', icon: <WorkHistoryIcon />, tooltip: 'Experience' },
    { id: 'contact', icon: <EmailIcon />, tooltip: 'Contact' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        gap: 2,
      }}
    >
      {/* Showcase Navigation Card */}
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 6,
          px: 1,
          py: 0.5,
          display: 'flex',
          gap: 0.5,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(25, 118, 210, 0.2)',
          },
        }}
      >
        {showcaseButtons.map((button) => (
          <Tooltip key={button.id} title={button.tooltip} arrow>
            <IconButton
              onClick={() => scrollToSection(button.id)}
              sx={{
                color: 'text.secondary',
                width: 40,
                height: 40,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'rgba(25, 118, 210, 0.1)',
                },
              }}
            >
              {button.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Card>

      {/* Projects Navigation Card */}
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 6,
          px: 1,
          py: 0.5,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(100, 181, 246, 0.2)',
          },
        }}
      >
        <Tooltip title="All Projects" arrow>
          <IconButton
            onClick={handleProjectsClick}
            sx={{
              color: location.pathname === '/projects' ? 'secondary.main' : 'text.secondary',
              width: 40,
              height: 40,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: 'secondary.main',
                backgroundColor: 'rgba(100, 181, 246, 0.1)',
              },
            }}
          >
            <FolderIcon />
          </IconButton>
        </Tooltip>
      </Card>
    </Box>
  );
};

export default Navigation; 
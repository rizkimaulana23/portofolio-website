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
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          backdropFilter: 'blur(20px)',
          border: '3px solid #646cff',
          borderRadius: 8,
          m: 0.5, 
          px: 1,
          py: 0.5,
          display: 'flex',
          gap: 0.5,
          transition: 'all 0.3s ease',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 'none',
            border: '3px solid #646cff',
            outline: '2px solid #ffffff',
          },
        }}
      >
        {showcaseButtons.map((button) => (
          <Tooltip key={button.id} title={button.tooltip} arrow>
            <IconButton
              onClick={() => scrollToSection(button.id)}
              sx={{
                color: '#ffffff',
                width: 40,
                height: 40,
                transition: 'all 0.2s ease',
                border: '0px solid transparent',
                boxShadow: 'none',
                '&:hover': {
                  color: '#646cff',
                  backgroundColor: 'rgba(100, 108, 255, 0.1)',
                  transform: 'scale(1.1)',
                  boxShadow: 'none',
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
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          backdropFilter: 'blur(20px)',
          border: '3px solid #646cff',
          borderRadius: 8,
          outlineOffset: '0px',
          m: 0.5,
          px: 1,
          py: 0.5,
          transition: 'all 0.3s ease',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 'none',
            border: '3px solid #646cff',
            outline: '2px solid #ffffff',
          },
        }}
      >
        <Tooltip title="All Projects" arrow>
          <IconButton
            onClick={handleProjectsClick}
            sx={{
              color: location.pathname === '/projects' ? '#646cff' : '#ffffff',
              width: 40,
              height: 40,
              transition: 'all 0.2s ease',
              borderRadius: 2,
              backgroundColor: location.pathname === '/projects' ? 'rgba(100, 108, 255, 0.1)' : 'transparent',
              boxShadow: 'none',
              '&:hover': {
                color: '#646cff',
                backgroundColor: 'rgba(100, 108, 255, 0.1)',
                transform: 'scale(1.1)',
                boxShadow: 'none',
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
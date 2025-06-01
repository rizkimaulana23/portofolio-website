import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
  Button,
  CardActions,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: onClick ? 'translateY(-4px)' : 'none',
          boxShadow: onClick ? '0 8px 25px rgba(25, 118, 210, 0.15)' : 'none',
        },
      }}
      onClick={onClick}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={project.images[currentImageIndex]}
          alt={project.title}
          sx={{
            objectFit: 'cover',
          }}
        />
        
        {project.images.length > 1 && (
          <>
            <IconButton
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
              onClick={prevImage}
            >
              <ArrowBackIosIcon />
            </IconButton>
            
            <IconButton
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
              onClick={nextImage}
            >
              <ArrowForwardIosIcon />
            </IconButton>
            
            <Box
              sx={{
                position: 'absolute',
                bottom: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 0.5,
              }}
            >
              {project.images.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                    transition: 'background-color 0.2s',
                  }}
                />
              ))}
            </Box>
          </>
        )}
        
        <Chip
          label={project.category}
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'primary.main',
            color: 'white',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
          {project.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.shortDescription}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {project.techStack.slice(0, 4).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.75rem',
                height: 24,
              }}
            />
          ))}
          {project.techStack.length > 4 && (
            <Chip
              label={`+${project.techStack.length - 4}`}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.75rem',
                height: 24,
              }}
            />
          )}
        </Box>
      </CardContent>

      <CardActions sx={{ pt: 0, px: 2, pb: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
          {project.url && (
            <Button
              size="small"
              startIcon={<LaunchIcon />}
              onClick={(e) => handleExternalLink(e, project.url!)}
              sx={{ textTransform: 'none' }}
            >
              Live Demo
            </Button>
          )}
          {project.github && (
            <Button
              size="small"
              startIcon={<GitHubIcon />}
              onClick={(e) => handleExternalLink(e, project.github!)}
              sx={{ textTransform: 'none' }}
            >
              GitHub
            </Button>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProjectCard; 
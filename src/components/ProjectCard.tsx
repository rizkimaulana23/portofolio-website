import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  CardActions,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
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
        boxShadow: 'none',
        outlineOffset: '0px',
        '&:hover': {
          transform: onClick ? 'translateY(-6px)' : 'none',
        },
      }}
      onClick={onClick}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={project.images[0]}
          alt={project.title}
          sx={{
            aspectRatio: '16/9',
            objectFit: 'cover',
          }}
        />
        
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
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
import BrushIcon from '@mui/icons-material/Brush';
import PaletteIcon from '@mui/icons-material/Palette';
import type { Project, RepositoryType } from '../types';
import { RepositoryType as RepoType } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getRepositoryIcon = (type: RepositoryType) => {
    switch (type) {
      case RepoType.GITHUB:
        return <GitHubIcon />;
      case RepoType.FIGMA:
        return <BrushIcon />;
      case RepoType.BEHANCE:
      case RepoType.DRIBBBLE:
        return <PaletteIcon />;
      default:
        return <LaunchIcon />;
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        border: '3px solid transparent',
        '&:hover': {
          transform: onClick ? 'translateY(-6px)' : 'none',
          borderColor: '#FF6501',
        },
      }}
      onClick={onClick}
    >
      <Box 
        sx={{ 
          position: 'relative',
          aspectRatio: '16/9',
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          image={project.images[0]}
          alt={project.title}
          sx={{
            width: '100%',
            height: '100%',
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
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'left' }}>
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
        <Box sx={{ display: 'flex', gap: 1, width: '100%', flexWrap: 'wrap' }}>
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
          {project.repositories.map((repo) => (
            <Button
              key={repo.url}
              size="small"
              startIcon={getRepositoryIcon(repo.type)}
              onClick={(e) => handleExternalLink(e, repo.url)}
              sx={{ textTransform: 'none' }}
            >
              {repo.label}
            </Button>
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProjectCard; 
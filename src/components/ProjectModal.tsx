import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Chip,
  Button,
  CardMedia,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { Project } from '../types';

interface ProjectModalProps {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxHeight: '90vh',
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          {project.title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: 'grey.500' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 0 }}>
        {/* Image Carousel */}
        <Box sx={{ position: 'relative', mb: 3 }}>
          <CardMedia
            component="img"
            height="300"
            image={project.images[currentImageIndex]}
            alt={project.title}
            sx={{ objectFit: 'cover' }}
          />
          
          {project.images.length > 1 && (
            <>
              <IconButton
                sx={{
                  position: 'absolute',
                  left: 16,
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
                  right: 16,
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
                  bottom: 16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: 1,
                }}
              >
                {project.images.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </Box>
            </>
          )}
          
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              display: 'flex',
              gap: 1,
            }}
          >
            <Chip
              label={project.category}
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
              }}
            />
            <Chip
              label={project.year}
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
              }}
            />
          </Box>
        </Box>

        <Box sx={{ px: 3, pb: 3 }}>
          {/* Description */}
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            About This Project
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.7 }}>
            {project.fullDescription}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Tech Stack */}
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Technology Stack
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {project.techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                sx={{ fontWeight: 500 }}
              />
            ))}
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            {project.url && (
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                onClick={() => handleExternalLink(project.url!)}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                View Live Demo
              </Button>
            )}
            {project.github && (
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                onClick={() => handleExternalLink(project.github!)}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                View Source Code
              </Button>
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal; 
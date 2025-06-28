import React, { useState, useEffect } from 'react';
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
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import BrushIcon from '@mui/icons-material/Brush';
import PaletteIcon from '@mui/icons-material/Palette';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import type { Project, RepositoryType } from '../types';
import { RepositoryType as RepoType } from '../types';
import { loadMarkdownContent } from '../utils/markdownLoader';
import ImageZoomModal from './ImageZoomModal';

interface ProjectModalProps {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [loadingMarkdown, setLoadingMarkdown] = useState(false);
  const [imageZoomOpen, setImageZoomOpen] = useState(false);

  useEffect(() => {
    const loadMarkdown = async () => {
      if (project?.markdownFile) {
        setLoadingMarkdown(true);
        try {
          const content = await loadMarkdownContent(project.markdownFile);
          setMarkdownContent(content);
        } catch (error) {
          console.error('Failed to load markdown content:', error);
          setMarkdownContent('');
        } finally {
          setLoadingMarkdown(false);
        }
      } else {
        setMarkdownContent('');
      }
    };

    if (open && project) {
      loadMarkdown();
    }
  }, [open, project]);

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

  const handleImageClick = () => {
    setImageZoomOpen(true);
  };

  const handleImageZoomClose = () => {
    setImageZoomOpen(false);
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
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 1,
          width: '80vw',
          height: '90vh',
          maxWidth: 'none',
          maxHeight: 'none',
          margin: 1,
          backgroundColor: '#ffffff',
        },
      }}
    >
      <DialogTitle sx={{ 
        m: 0, 
        p: 3, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: '#ffffff',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
            {project.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip
              label={project.category}
              size="small"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
              }}
            />
            <Chip
              label={project.year}
              size="small"
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
              }}
            />
          </Box>
        </Box>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: 'grey.500' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      

      <DialogContent sx={{ 
        p: 0, 
        overflow: 'auto',
        height: 'calc(95vh - 120px)', // Subtract header height
        backgroundColor: '#ffffff',
      }}>

        {/* Action Buttons */}
        <Box sx={{ 
          position: 'sticky',
          top: 0,
          zIndex: 10,
          px: 4, 
          py: 2, 
          background: 'transparent',
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: 2,
          flexWrap: 'wrap'
        }}>
          {project.url && (
            <Button
              variant="contained"
              size="small"
              startIcon={<LaunchIcon />}
              onClick={() => handleExternalLink(project.url!)}
              sx={{
                borderRadius: 3,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              Live Demo
            </Button>
          )}
          {project.repositories.map((repo) => (
            <Button
              key={repo.url}
              variant="outlined"
              size="small"
              startIcon={getRepositoryIcon(repo.type)}
              onClick={() => handleExternalLink(repo.url)}
              sx={{
                borderRadius: 3,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              {repo.label}
            </Button>
          ))}
        </Box>
        {/* Image Carousel */}
        <Box sx={{ 
          position: 'relative', 
          mb: 4, 
          px: { xs: 0, md: 4 }, // No padding on mobile, padding on desktop
          backgroundColor: '#ffffff',
          height: { xs: '40vh', md: '50vh' }, // Set specific height for better image visibility
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover .zoom-overlay': {
                opacity: 1,
              }
            }}
            onClick={handleImageClick}
          >
            <CardMedia
              component="img"
              className="modal-image"
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain', // Changed from 'cover' to 'contain' to show full image
                borderRadius: { xs: 0, md: 0 }, // No border radius on mobile, rounded on desktop
                display: 'block'
              }}
              image={project.images[currentImageIndex]}
              alt={project.title}
            />
            
            {/* Zoom Overlay */}
            <Box
              className="zoom-overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out',
                borderRadius: { xs: 0, md: 1 },
              }}
            >
              <ZoomInIcon 
                sx={{ 
                  color: 'white', 
                  fontSize: 48,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                }} 
              />
            </Box>
          </Box>
          
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
        </Box>

        <Box sx={{ px: 4, pb: 4, backgroundColor: '#ffffff' }}>
          {/* Description */}
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, color: '#333333' }}>
            About This Project
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.7, fontSize: '1.1rem', color: '#333333' }}>
            {project.fullDescription}
          </Typography>

          {/* Tech Stack */}
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, color: '#333333' }}>
            Technology Stack
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
            {project.techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                sx={{ 
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  height: 32,
                }}
              />
            ))}
          </Box>

          {/* Markdown Description Section */}
          {project.markdownFile && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, color: '#333333' }}>
                Detailed Description
              </Typography>
              
              {loadingMarkdown ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                  <CircularProgress />
                </Box>
              ) : markdownContent ? (
                <Box sx={{  
                  backgroundColor: '#ffffff',
                  color: '#333333',
                  '& h1, & h2, & h3, & h4, & h5, & h6': {
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    marginTop: 2,
                    marginBottom: 1,
                    color: '#333333',
                  },
                  '& h1': { fontSize: '2rem' },
                  '& h2': { fontSize: '1.75rem' },
                  '& h3': { fontSize: '1.5rem' },
                  '& h4': { fontSize: '1.25rem' },
                  '& h5': { fontSize: '1.1rem' },
                  '& h6': { fontSize: '1rem' },
                  '& p': {
                    marginBottom: 2,
                    lineHeight: 1.7,
                    fontSize: '1rem',
                    color: '#333333',
                  },
                  '& ul, & ol': {
                    marginBottom: 2,
                    paddingLeft: 3,
                    color: '#333333',
                  },
                  '& li': {
                    marginBottom: 0.5,
                    color: '#333333',
                  },
                  '& img': {
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 1,
                    marginY: 2,
                  },
                  '& blockquote': {
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    paddingLeft: 2,
                    marginY: 2,
                    fontStyle: 'italic',
                    backgroundColor: '#f5f5f5',
                    color: '#333333',
                    py: 1,
                  },
                  '& code': {
                    backgroundColor: '#f5f5f5',
                    color: '#333333',
                    padding: '2px 4px',
                    borderRadius: 1,
                    fontSize: '0.875rem',
                    fontFamily: 'monospace',
                  },
                  '& pre': {
                    backgroundColor: '#f5f5f5',
                    color: '#333333',
                    padding: 2,
                    borderRadius: 1,
                    overflow: 'auto',
                    marginY: 2,
                  },
                  '& table': {
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginY: 2,
                  },
                  '& th, & td': {
                    border: '1px solid',
                    borderColor: 'divider',
                    padding: 1,
                    textAlign: 'left',
                    color: '#333333',
                  },
                  '& th': {
                    backgroundColor: '#f5f5f5',
                    fontWeight: 600,
                  },
                }}>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                  >
                    {markdownContent}
                  </ReactMarkdown>
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  No detailed description available.
                </Typography>
              )}
            </>
          )}
        </Box>
      </DialogContent>

      {/* Image Zoom Modal */}
      <ImageZoomModal
        open={imageZoomOpen}
        imageSrc={project.images[currentImageIndex]}
        imageAlt={`${project.title} - Image ${currentImageIndex + 1}`}
        onClose={handleImageZoomClose}
      />
    </Dialog>
  );
};

export default ProjectModal; 
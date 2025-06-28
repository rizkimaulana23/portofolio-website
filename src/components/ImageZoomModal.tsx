import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Fab,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FitScreenIcon from '@mui/icons-material/FitScreen';

interface ImageZoomModalProps {
  open: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

interface Transform {
  scale: number;
  translateX: number;
  translateY: number;
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  open,
  imageSrc,
  imageAlt,
  onClose,
}) => {
  const [transform, setTransform] = useState<Transform>({ scale: 1, translateX: 0, translateY: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, startTranslateX: 0, startTranslateY: 0 });
  const [_, setImageNaturalSize] = useState({ width: 0, height: 0 });
  const [imageDisplaySize, setImageDisplaySize] = useState({ width: 0, height: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Reset when modal opens/closes
  useEffect(() => {
    if (open) {
      setTransform({ scale: 1, translateX: 0, translateY: 0 });
      setIsDragging(false);
    }
  }, [open]);

  // Calculate image display size when image loads
  const handleImageLoad = useCallback(() => {
    if (imageRef.current && containerRef.current) {
      const img = imageRef.current;
      const container = containerRef.current;
      
      // Get natural image dimensions
      setImageNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
      
      // Calculate how the image fits in the container
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const imageAspectRatio = img.naturalWidth / img.naturalHeight;
      const containerAspectRatio = containerWidth / containerHeight;
      
      let displayWidth, displayHeight;
      
      if (imageAspectRatio > containerAspectRatio) {
        // Image is wider relative to container
        displayWidth = Math.min(containerWidth * 0.9, img.naturalWidth);
        displayHeight = displayWidth / imageAspectRatio;
      } else {
        // Image is taller relative to container
        displayHeight = Math.min(containerHeight * 0.9, img.naturalHeight);
        displayWidth = displayHeight * imageAspectRatio;
      }
      
      setImageDisplaySize({ width: displayWidth, height: displayHeight });
    }
  }, []);

  // Constrain translation to keep image visible
  const constrainTranslation = useCallback((scale: number, translateX: number, translateY: number) => {
    if (!containerRef.current) return { translateX, translateY };
    
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    const scaledImageWidth = imageDisplaySize.width * scale;
    const scaledImageHeight = imageDisplaySize.height * scale;
    
    // Calculate maximum allowed translation
    const maxTranslateX = Math.max(0, (scaledImageWidth - containerWidth) / 2);
    const maxTranslateY = Math.max(0, (scaledImageHeight - containerHeight) / 2);
    
    return {
      translateX: Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX)),
      translateY: Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY))
    };
  }, [imageDisplaySize]);

  // Zoom with cursor as center point
  const zoomAtPoint = useCallback((newScale: number, clientX?: number, clientY?: number) => {
    if (!containerRef.current || !imageRef.current) return;
    
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    // Use center of container if no cursor position provided
    const pointX = clientX !== undefined ? clientX - containerRect.left : containerRect.width / 2;
    const pointY = clientY !== undefined ? clientY - containerRect.top : containerRect.height / 2;
    
    // Calculate the point in image coordinates
    const imagePointX = (pointX - containerRect.width / 2 - transform.translateX) / transform.scale;
    const imagePointY = (pointY - containerRect.height / 2 - transform.translateY) / transform.scale;
    
    // Calculate new translation to keep the zoom point stable
    const newTranslateX = pointX - containerRect.width / 2 - imagePointX * newScale;
    const newTranslateY = pointY - containerRect.height / 2 - imagePointY * newScale;
    
    // Apply constraints
    const constrained = constrainTranslation(newScale, newTranslateX, newTranslateY);
    
    setTransform({
      scale: newScale,
      translateX: constrained.translateX,
      translateY: constrained.translateY
    });
  }, [transform, constrainTranslation]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const newScale = Math.max(0.5, Math.min(5, transform.scale + delta));
    
    if (newScale !== transform.scale) {
      zoomAtPoint(newScale, e.clientX, e.clientY);
    }
  }, [transform.scale, zoomAtPoint]);

  const handleZoomIn = useCallback(() => {
    const newScale = Math.min(5, transform.scale + 0.3);
    zoomAtPoint(newScale);
  }, [transform.scale, zoomAtPoint]);

  const handleZoomOut = useCallback(() => {
    const newScale = Math.max(0.5, transform.scale - 0.3);
    zoomAtPoint(newScale);
  }, [transform.scale, zoomAtPoint]);

  const handleReset = useCallback(() => {
    setTransform({ scale: 1, translateX: 0, translateY: 0 });
  }, []);

  const handleFitScreen = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Calculate scale to fit image to screen
    const scaleX = (containerWidth * 0.95) / imageDisplaySize.width;
    const scaleY = (containerHeight * 0.95) / imageDisplaySize.height;
    const fitScale = Math.min(scaleX, scaleY);
    
    setTransform({ scale: fitScale, translateX: 0, translateY: 0 });
  }, [imageDisplaySize]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (transform.scale <= 1) return;
    
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      startTranslateX: transform.translateX,
      startTranslateY: transform.translateY
    });
  }, [transform]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || transform.scale <= 1) return;
    
    e.preventDefault();
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    
    const newTranslateX = dragStart.startTranslateX + deltaX;
    const newTranslateY = dragStart.startTranslateY + deltaY;
    
    const constrained = constrainTranslation(transform.scale, newTranslateX, newTranslateY);
    
    setTransform(prev => ({
      ...prev,
      translateX: constrained.translateX,
      translateY: constrained.translateY
    }));
  }, [isDragging, dragStart, transform.scale, constrainTranslation]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [open, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 0,
          width: '100vw',
          height: '100vh',
          maxWidth: 'none',
          maxHeight: 'none',
          margin: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          overflow: 'hidden',
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 1000,
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Zoom Level Indicator */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 1000,
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          px: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
          {Math.round(transform.scale * 100)}%
        </Typography>
      </Box>

      {/* Zoom Controls */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          gap: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          borderRadius: 3,
          p: 1,
        }}
      >
        <Fab
          size="small"
          onClick={handleZoomOut}
          disabled={transform.scale <= 0.5}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            '&:disabled': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          <ZoomOutIcon />
        </Fab>
        <Fab
          size="small"
          onClick={handleFitScreen}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
          }}
        >
          <FitScreenIcon />
        </Fab>
        <Fab
          size="small"
          onClick={handleReset}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
          }}
        >
          <RestartAltIcon />
        </Fab>
        <Fab
          size="small"
          onClick={handleZoomIn}
          disabled={transform.scale >= 5}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            '&:disabled': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          <ZoomInIcon />
        </Fab>
      </Box>

      <DialogContent
        ref={containerRef}
        sx={{
          p: 0,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: transform.scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          overflow: 'hidden',
          userSelect: 'none',
        }}
        onWheel={handleWheel}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          ref={imageRef}
          src={imageSrc}
          alt={imageAlt}
          onLoad={handleImageLoad}
          onMouseDown={handleMouseDown}
          style={{
            width: `${imageDisplaySize.width}px`,
            height: `${imageDisplaySize.height}px`,
            transform: `scale(${transform.scale}) translate(${transform.translateX / transform.scale}px, ${transform.translateY / transform.scale}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            cursor: transform.scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
            userSelect: 'none',
            pointerEvents: 'auto',
            objectFit: 'contain',
          }}
          draggable={false}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomModal; 
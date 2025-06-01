import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

interface PageTransitionProps {
  isTransitioning: boolean;
  direction: 'left' | 'right';
  onTransitionComplete: () => void;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  isTransitioning, 
  direction, 
  onTransitionComplete 
}) => {
  const [animationPhase, setAnimationPhase] = useState<'enter' | 'exit' | 'idle'>('idle');

  useEffect(() => {
    if (isTransitioning) {
      setAnimationPhase('enter');
      
      // Phase 1: Panel slides in and covers screen
      const enterTimer = setTimeout(() => {
        setAnimationPhase('exit');
      }, 600);

      // Phase 2: Panel slides out revealing new content
      const exitTimer = setTimeout(() => {
        setAnimationPhase('idle');
        onTransitionComplete();
      }, 1200);

      return () => {
        clearTimeout(enterTimer);
        clearTimeout(exitTimer);
      };
    }
  }, [isTransitioning, onTransitionComplete]);

  if (!isTransitioning && animationPhase === 'idle') {
    return null;
  }

  const getPanelTransform = () => {
    const isLeftDirection = direction === 'left';
    
    switch (animationPhase) {
      case 'enter':
        return isLeftDirection 
          ? 'translateX(0%)' 
          : 'translateX(0%)';
      case 'exit':
        return isLeftDirection 
          ? 'translateX(100%)' 
          : 'translateX(-100%)';
      default:
        return isLeftDirection 
          ? 'translateX(-100%)' 
          : 'translateX(100%)';
    }
  };

  const getInitialTransform = () => {
    return direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Main transition panel */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          transform: animationPhase === 'idle' ? getInitialTransform() : getPanelTransform(),
          transition: animationPhase !== 'idle' 
            ? 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)' 
            : 'none',
        }}
      />
      
      {/* Secondary panel for smoother effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #42a5f5 0%, #64b5f6 100%)',
          transform: animationPhase === 'idle' ? getInitialTransform() : getPanelTransform(),
          transition: animationPhase !== 'idle' 
            ? 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) 0.1s' 
            : 'none',
          opacity: 0.8,
        }}
      />
    </Box>
  );
};

export default PageTransition; 
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF6501', // Orange
      light: '#FF8533', // Light orange
      dark: '#CC5100',
    },
    secondary: {
      main: '#ff6b6b', // Red accent
      light: '#ff9999',
      dark: '#cc5555',
    },
    background: {
      default: '#ffffff', // White background
      paper: '#f5f5f5', // Light gray for cards
    },
    text: {
      primary: '#333333', // Dark gray text
      secondary: '#666666', // Medium gray
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#333333',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#333333',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#333333',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#333333',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#333333',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#333333',
    },
    body1: {
      color: '#666666',
    },
    body2: {
      color: '#666666',
    },
  },
  shape: {
    borderRadius: 12, // Rounded edges
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          borderRadius: 10,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
  },
}); 
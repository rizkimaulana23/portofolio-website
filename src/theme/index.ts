import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue
      light: '#42a5f5', // Light blue
      dark: '#0d47a1',
    },
    secondary: {
      main: '#64b5f6', // Light blue
      light: '#90caf9',
      dark: '#1565c0',
    },
    background: {
      default: '#ffffff', // White background
      paper: '#f5f5f5', // Light gray for cards
    },
    text: {
      primary: '#1a1a1a', // Dark text
      secondary: '#666666', // Medium gray
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#1a1a1a',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#1a1a1a',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#1a1a1a',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#1a1a1a',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#1a1a1a',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#1a1a1a',
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
          background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
          border: '1px solid #e0e0e0',
          borderRadius: 12,
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
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
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
      default: '#0a0a0a', // Deep black
      paper: '#1a1a1a', // Slightly lighter black for cards
    },
    text: {
      primary: '#ffffff', // White
      secondary: '#b3b3b3', // Light gray
    },
    divider: '#333333',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#ffffff',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#ffffff',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#ffffff',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    body1: {
      color: '#b3b3b3',
    },
    body2: {
      color: '#b3b3b3',
    },
  },
  shape: {
    borderRadius: 12, // Rounded edges
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1a1a1a 0%, #262626 100%)',
          border: '1px solid #333333',
          borderRadius: 12,
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
          background: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #333333',
        },
      },
    },
  },
}); 
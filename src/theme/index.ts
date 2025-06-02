import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#646cff', // Blue
      light: '#8087ff', // Light blue
      dark: '#4850cc',
    },
    secondary: {
      main: '#ff6b6b', // Red accent
      light: '#ff9999',
      dark: '#cc5555',
    },
    background: {
      default: '#010101', // Black background
      paper: '#1a1a1a', // Dark gray for cards
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#cccccc', // Light gray
    },
    divider: '#333333',
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
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
      color: '#cccccc',
    },
    body2: {
      color: '#cccccc',
    },
  },
  shape: {
    borderRadius: 12, // Rounded edges
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
          borderRadius: 12,
          boxShadow: 'none',
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
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #333333',
        },
      },
    },
  },
}); 
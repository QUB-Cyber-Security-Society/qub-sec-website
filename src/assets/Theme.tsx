import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#1d1d1dff",
      paper: "#000000",
    },
    text: {
      primary: "#4dcf83ff",
      secondary: "#367ac7ff",
    },
    success: {
      main: "#4dcf83ff",
      light: "#4dcf83ff",
      dark: "rgba(77, 207, 131, 0.3)",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "'Roboto Mono', monospace",
    h2: {
      fontFamily: "'Roboto Mono', monospace",
      color: "#4dcf83ff",
    },
    h6: {
      fontFamily: "'Roboto Mono', monospace",
      color: "#ffffff",
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    subtitle2: {
      fontFamily: "'Roboto Mono', monospace",
      letterSpacing: 1,
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'Roboto Mono', monospace",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: "#000000",
          border: "1px solid rgba(77, 207, 131, 0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "#4dcf83ff",
            transform: "translateY(-10px)",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 160,
          height: 160,
          margin: "0 auto",
          border: "3px solid rgba(77, 207, 131, 0.3)",
          transition: "border-color 0.3s ease",
          "&:hover": {
            borderColor: "#4dcf83ff",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.committee-container": {
            width: "80%",
          },
        },
      },
    },
  },
});

export default theme;

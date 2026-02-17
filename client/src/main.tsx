import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./index.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f766e",
      light: "#5eead4",
      dark: "#115e59",
    },
    secondary: {
      main: "#f59e0b",
      light: "#fde68a",
      dark: "#b45309",
    },
    background: {
      default: "#f6f2ec",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f2937",
      secondary: "#4b5563",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: "'IBM Plex Sans', 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', 'IBM Plex Sans', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Space Grotesk', 'IBM Plex Sans', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontFamily: "'Space Grotesk', 'IBM Plex Sans', sans-serif",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top left, #ffffff 0%, #f6f2ec 40%, #efe8dc 100%)",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(15, 118, 110, 0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(15, 118, 110, 0.08)",
          boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);

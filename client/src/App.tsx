import { useState, useEffect } from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import {
  AppBar,
  Box,
  Button,
  Container,
  Fab,
  Link,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(246, 242, 236, 0.82)",
          color: "text.primary",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            maxWidth: "lg",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 3 },
          }}
        >
          <Box
            sx={{
              width: 46,
              height: 46,
              borderRadius: 2,
              display: "grid",
              placeItems: "center",
              background: "linear-gradient(135deg, #0f766e, #22c55e)",
              color: "#ecfeff",
              fontWeight: 700,
              letterSpacing: "0.04em",
              flexShrink: 0,
            }}
          >
            SS
          </Box>
          {!isMobile && (
            <Stack direction="row" spacing={1} alignItems="center">
              <Button color="inherit" href="#about" sx={{ fontWeight: 500 }}>
                About
              </Button>
              <Button color="inherit" href="#projects" sx={{ fontWeight: 500 }}>
                Projects
              </Button>
              <Button color="inherit" href="#services" sx={{ fontWeight: 500 }}>
                Services
              </Button>
              <Button color="inherit" href="#contact" sx={{ fontWeight: 500 }}>
                Contact
              </Button>
            </Stack>
          )}
          <Button
            variant="contained"
            color="secondary"
            href="#contact"
            sx={{ ml: "auto", flexShrink: 0 }}
          >
            Lets work
          </Button>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ width: "100%" }}>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </Box>

      <Box component="footer" sx={{ py: 4, borderTop: "1px solid #e7e2d9" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2026 Semir Sahman. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Link href="mailto:semirsahman94@gmail.com">semirsahman94@gmail.com</Link>
            <Link href="https://github.com/SemirSahman" target="_blank" rel="noreferrer">
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/semir-sahman-7ba8a3169/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          </Stack>
        </Container>
      </Box>

      <Fab
        onClick={scrollToTop}
        color="primary"
        aria-label="scroll to top"
        sx={{
          position: "fixed",
          bottom: 60,
          right: 32,
          opacity: showScrollTop ? 1 : 0,
          visibility: showScrollTop ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Hero() {
  const leftColumnRef = useRef<HTMLDivElement | null>(null);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  useEffect(() => {
    if (!leftColumnRef.current) {
      return undefined;
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setCardHeight(Math.ceil(entry.contentRect.height));
      }
    });

    observer.observe(leftColumnRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box component="section" aria-labelledby="hero-title" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={7} sx={{ display: "flex" }}>
            <Stack
              spacing={3}
              alignItems={{ xs: "center", md: "flex-start" }}
              sx={{ flex: 1 }}
              ref={leftColumnRef}
            >
              <Typography
                variant="h5"
                color="text.secondary"
                fontWeight={600}
                sx={{ letterSpacing: "0.28em" }}
              >
                Full-stack developer
              </Typography>
              <Typography
                id="hero-title"
                variant="h3"
                component="h1"
                textAlign={{ xs: "center", md: "left" }}
              >
                Hi, I'm <Box component="span" color="primary.main">Semir Šahman</Box>.
                <br />
                I help companies design, build and scale production-grade web applications.
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                textAlign={{ xs: "center", md: "left" }}
              >
                I deliver full-stack solutions using React and TypeScript on the frontend, with Node.js and 
                Express on the backend, backed by PostgreSQL, MongoDB, and Docker. 
                I focus on clean architecture, performance, and long-term maintainability.
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent={{ xs: "center", md: "flex-start" }}>
                <Button variant="contained" color="primary" href="#projects">
                  View projects
                </Button>
                <Button variant="outlined" color="primary" href="#contact">
                  Book a call
                </Button>
              </Stack>
              <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent={{ xs: "center", md: "flex-start" }}>
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    10+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Years experience
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    24
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Projects shipped
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    12
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Happy clients
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: "flex" }}>
            <Card
              sx={{
                height: { xs: "auto", md: cardHeight ? `${cardHeight}px` : "auto" },
                minHeight: 0,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", p: 2, maxHeight: "48%", overflow: "visible" }}>
                <CardMedia
                  component="img"
                  image={new URL("../assets/profilePictureSS.jpg", import.meta.url).toString()}
                  alt="Portrait of Semir Sahman"
                  sx={{ width: "100%", height: "100%", borderRadius: 2, objectFit: "cover" }}
                />
              </Box>
              <CardContent
                sx={{
                  flex: 1,
                  minHeight: 0,
                  display: "flex",
                  flexDirection: "column",
                  p: 3,
                  overflow: "auto",
                }}
              >
                <Stack spacing={2} alignItems="center" sx={{ mt: "auto" }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <FiberManualRecordIcon sx={{ fontSize: 12, color: "#22c55e" }} />
                    <Typography variant="subtitle2" color="text.secondary">
                      Available for work
                    </Typography>
                  </Stack>
                  <Typography variant="body1" color="text.secondary" textAlign="center">
                    Building digital products with a focus on clean architecture, 
                    scalable systems, and high-quality user experience.
                  </Typography>
                  <List dense sx={{ width: "100%" }}>
                    {[
                      "Design systems and UI engineering",
                      "API design and cloud delivery",
                      "Performance and accessibility",
                    ].map((item) => (
                      <ListItem key={item} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

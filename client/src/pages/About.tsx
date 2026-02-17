import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ExtensionIcon from "@mui/icons-material/Extension";

const technicalSkills = [
  "React and TypeScript (modern frontend)",
  "Node.js and Express (scalable backend)",
  "REST and GraphQL APIs",
  "PostgreSQL, MongoDB, Docker",
];

const capabilitySkills = [
  "UI systems and design systems",
  "Automated testing and CI/CD",
  "Cloud infrastructure and DevOps",
  "API design and optimization",
];

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Typography
                variant="h5"
                color="text.secondary"
                fontWeight={600}
                sx={{ letterSpacing: "0.28em" }}
              >
                About
              </Typography>
              <Typography variant="h3" component="h2">
                Focused on impact, quality, and delivery.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                I work closely with teams and stakeholders to turn complex problems into reliable, 
                scalable products. My approach combines product thinking with robust engineering 
                and strong attention to detail. From high-conversion landing pages to full-stack 
                platforms, I help companies ship quickly without compromising long-term quality.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ display: "grid", gridTemplateColumns: { sm: "1fr 1fr" } }}
              >
                <Box>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Stack spacing={1}>
                        <AutoAwesomeIcon color="primary" />
                        <Typography variant="subtitle1" fontWeight={600}>
                          End-to-end delivery
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          From discovery and system design to implementation, deployment, and long-term maintenance.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Box>
                <Box>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Stack spacing={1}>
                        <ExtensionIcon color="primary" />
                        <Typography variant="subtitle1" fontWeight={600}>
                          Modern stack
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          React, TypeScript, Node.js, Express, Vite, PostgreSQL, MongoDB, Docker
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <Stack spacing={1}>
                  <Typography variant="h6" fontWeight={900}>Core skills</Typography>
                  <Divider sx={{ mt: '-2 !important' }} />
                </Stack>
                <Box sx={{ mt: 2 }}>
                  <Stack spacing={0}>
                    <div>
                      <Typography variant="h6" fontWeight={600} color="text.secondary">
                        Technical
                      </Typography>
                      <List dense>
                        {technicalSkills.map((skill) => (
                          <ListItem key={skill} disableGutters>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <AutoAwesomeIcon color="secondary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={skill} />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                    <div>
                      <Typography variant="h6" fontWeight={600} color="text.secondary">
                        Capabilities
                      </Typography>
                      <List dense>
                        {capabilitySkills.map((skill) => (
                          <ListItem key={skill} disableGutters>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <AutoAwesomeIcon color="secondary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={skill} />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

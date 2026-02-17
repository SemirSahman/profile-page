import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const projects = [
  {
    title: "Fintech dashboard",
    description:
      "Real-time analytics platform with role-based access, interactive dashboards, and data-driven insights.",
    tags: ["React", "TypeScript", "Node", "Microservices"],
  },
  {
    title: "E-commerce rebuild",
    description:
      "Conversion-focused storefront with high-performance product pages and headless CMS.",
    tags: ["Next.js", "Stripe", "Contentful"],
  },
  {
    title: "Healthcare portal",
    description:
      "HIPAA-ready portal with secure onboarding, scheduling, and messaging.",
    tags: ["Express", "PostgreSQL", "JWT Auth"],
  },
];

export default function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ mb: 4 }}>
          <Typography
                variant="h5"
                color="text.secondary"
                fontWeight={600}
                sx={{ letterSpacing: "0.28em" }}
              >
            Projects
          </Typography>
          <Typography variant="h3" component="h2">
            Selected work that drives outcomes.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            A selection of real-world products I've built for startups and businesses.
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.title}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h5">{project.title}</Typography>
                    <Typography variant="body1" color="text.secondary">
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} color="primary" variant="outlined" />
                      ))}
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

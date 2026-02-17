import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BrushIcon from "@mui/icons-material/Brush";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const services = [
  {
    title: "Product strategy",
    description:
      "Clarify scope, define milestones, and align your roadmap with business goals.",
    Icon: QueryStatsIcon,
  },
  {
    title: "Design and UX",
    description:
      "Create accessible, conversion-focused interfaces with strong UX and clear information flow.",
    Icon: BrushIcon,
  },
  {
    title: "Full-stack delivery",
    description:
      "Build and launch reliable apps with clean code and scalable infrastructure.",
    Icon: RocketLaunchIcon,
  },
];

export default function Services() {
  return (
    <Box component="section" id="services" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ mb: 4 }}>
          <Typography
                variant="h5"
                color="text.secondary"
                fontWeight={600}
                sx={{ letterSpacing: "0.28em" }}
              >
            Services
          </Typography>
          <Typography variant="h3" component="h2">
            Support across every stage of your build.
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.title}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2}>
                    <service.Icon color="primary" fontSize="large" />
                    <Typography variant="h5">{service.title}</Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
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

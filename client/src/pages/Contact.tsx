import { useState, useRef } from "react";
import type { FormEvent } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send message.");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <Box component="section" id="contact" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="stretch">
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Typography
                variant="h5"
                color="text.secondary"
                fontWeight={600}
                sx={{ letterSpacing: "0.28em" }}
              >
                Contact
              </Typography>
              <Typography variant="h3" component="h2">
                Let’s build something great together.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Have a project in mind? Share the details and I’ll get back to you within 24 hours.
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon color="primary" />
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="subtitle1">semirsahman94@gmail.com</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <PlaceIcon color="primary" />
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="subtitle1">Sarajevo, Bosnia and Herzegovina</Typography>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Box component="form" ref={formRef} onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <TextField
                      name="name"
                      label="Name"
                      placeholder="Your name"
                      required
                      fullWidth
                    />
                    <TextField
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="you@email.com"
                      required
                      fullWidth
                    />
                    <TextField
                      name="message"
                      label="Message"
                      placeholder="Tell me about your project"
                      required
                      fullWidth
                      multiline
                      minRows={4}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={status === "loading"}
                      startIcon={
                        status === "loading" ? (
                          <CircularProgress size={16} color="inherit" />
                        ) : undefined
                      }
                    >
                      {status === "loading" ? "Sending" : "Send message"}
                    </Button>
                    {status === "success" && (
                      <Alert severity="success">
                        Thanks! I will be in touch shortly.
                      </Alert>
                    )}
                    {status === "error" && error && (
                      <Alert severity="error">{error}</Alert>
                    )}
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

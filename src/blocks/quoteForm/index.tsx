"use client";

import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Phone, Mail, LocationOn } from "@mui/icons-material";
import { useState } from "react";

export default function QuoteForm({
  modelType = "car",
}: {
  modelType?: "car" | "house";
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Automotive Tinting",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    // You can plug in your email/send logic here
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: 8, backgroundColor: "#F2F2F2" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#111111", mb: 1 }}>
            Get Your Free Quote
          </Typography>
          <Typography variant="body1" sx={{ color: "#333333" }}>
            Ready to transform your {modelType === "car" ? "vehicle" : "home"}?
            Contact us today for a personalized quote.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left side: contact info */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#111111", mb: 3 }}>
              Contact Information
            </Typography>

            {[
              {
                icon: <Phone sx={{ color: "#E52323" }} />,
                text: "(555) 123-TINT",
              },
              {
                icon: <Mail sx={{ color: "#E52323" }} />,
                text: "info@tintpro.com",
              },
              {
                icon: <LocationOn sx={{ color: "#E52323" }} />,
                text: "123 Tinting Ave, Your City, ST 12345",
              },
            ].map((item, idx) => (
              <Box
                key={idx}
                display="flex"
                alignItems="center"
                gap={2}
                sx={{
                  mb: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateX(8px)" },
                }}>
                {item.icon}
                <Typography sx={{ color: "#333333" }}>{item.text}</Typography>
              </Box>
            ))}

            <Box mt={4}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ color: "#111111", mb: 1 }}>
                Business Hours
              </Typography>
              <Typography sx={{ color: "#333333" }}>
                Monday - Friday: 8:00 AM - 6:00 PM
              </Typography>
              <Typography sx={{ color: "#333333" }}>
                Saturday: 9:00 AM - 4:00 PM
              </Typography>
              <Typography sx={{ color: "#333333" }}>Sunday: Closed</Typography>
            </Box>
          </Grid>

          {/* Right side: form */}
        </Grid>
      </Container>
    </Box>
  );
}

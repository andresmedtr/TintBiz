"use client";

import {
  Typography,
  Paper,
  TextField,
  Button,
  MenuItem,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";

export const QuoteForm = ({
  modelType = "car",
}: {
  modelType?: "car" | "house";
}) => {
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

  const servicesArray = [
    "Automotive Tinting",
    "Residential Tinting",
    "Commercial Tinting",
  ];

  return (
    <Grid item xs={12} md={7} sx={{ border: "1px solid red" }}>
      <Paper
        elevation={6}
        sx={{ width: "100%", p: 4, bgcolor: "#fff", borderRadius: 2 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: "#111111", mb: 1 }}>
          Request a Quote
        </Typography>
        <Typography variant="body2" sx={{ color: "#333333", mb: 3 }}>
          Fill out the form below and we'll get back to you within 24 hours.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                variant="outlined"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                variant="outlined"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                variant="outlined"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                name="phone"
                type="tel"
                fullWidth
                variant="outlined"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Service Type"
                name="service"
                select
                fullWidth
                variant="outlined"
                value={form.service}
                onChange={handleChange}>
                {servicesArray.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                value={form.message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#E52323",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#B30000",
                    transform: "scale(1.05)",
                    boxShadow: 3,
                  },
                  transition: "all 0.3s ease",
                }}>
                Send Quote Request
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

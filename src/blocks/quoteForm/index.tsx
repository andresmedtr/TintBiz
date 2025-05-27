"use client";

import { TextField, Container, Button, Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import { EmailData } from "@/types/globalTypes";
import { sendEmail } from "@/service/emailjs";
import { inputFields } from "@/constants";

export const QuoteForm = () => {
  const [form, setForm] = useState<EmailData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await sendEmail(form);
      if (res.status === 200) {
      console.info(res.status, 'Message sent successfully!')
      setForm({ name: "", email: "", phone: "", message: "" });
    }
    } catch (error) {
      console.error(error, 'Failed to send message.');
    }
  };
  return (
    <div>
      <Container fixed className="p-6 rounded-md">
        <Box
          id="contact-us"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // Adjust height as needed
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ color: "#111111" }}>
            <FormattedMessage id="contactus.title" />
          </Typography>
        </Box>
        {/* Inputs stacked vertically */}
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            {inputFields.map((field) => (
              <TextField
                key={field.id}
                name={field.id}
                label={field.label}
                value={form[field.id as keyof EmailData]}
                variant="standard"
                onChange={handleChange}
                required
              />
            ))}
            <TextField
              name="message"
              label="Message"
              multiline
              rows={5}
              value={form.message}
              onChange={handleChange}
              variant="standard"
            />
            {/* Button aligned to the right */}
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="outlined">
                Send
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </div>
  );
};

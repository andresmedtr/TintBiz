"use client";
import { TextField, Container, Button, Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import emailjs from "emailjs-com";
import { useState } from "react";
import SecondaryNavbar from "./SecondaryNavbar";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const QuoteForm = () => {
  const inputFields: Array<{
    id: keyof Omit<FormFields, "message">;
    label: string;
  }> = [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone Number" },
  ];
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k0rtwpt",
        "template_vq0kb6v",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "nNDoDIArBqtTx2U9Y"
      )
      .then(
        () => {
          alert("Message sent successfully");
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <div>
      <SecondaryNavbar />
      <Container fixed className="p-6 rounded-md">
        <Box
          id="contact-us"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // Adjust height as needed
            textAlign: "center",
          }}>
          <Typography variant="h3" sx={{ color: "#111111" }}>
            <FormattedMessage id="contactus.title" />
          </Typography>
        </Box>
        {/* Inputs stacked vertically */}
        <form onSubmit={sendEmail}>
          <Box display="flex" flexDirection="column" gap={2}>
            {inputFields.map((field) => (
              <TextField
                key={field.id}
                name={field.id}
                label={field.label}
                value={form[field.id]}
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

export default QuoteForm;

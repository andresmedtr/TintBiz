"use client";

import { useState } from "react";
import { QuoteFormFields } from "@/types/globalTypes";
import { sendEmail } from "@/service/emailjs";

type FieldConfig = {
  name: keyof QuoteFormFields;
  label: string;
  type?: string;
  multiline?: boolean;
};

export const QuoteForm = () => {
  // Initial form state
  const initialFormState: QuoteFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Automotive Tinting",
    message: "",
  };
  const [form, setForm] = useState<QuoteFormFields>(initialFormState);

  // Input arrays to map through
  const formFields: FieldConfig[] = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "service", label: "Service Type" },
    { name: "message", label: "Message", multiline: true },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form.firstName);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    sendEmail(form);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-md">
      <h3 className="text-xl font-bold title-primary mb-1">Request a Quote</h3>
      <p className="text-sm paragraph-primary mb-6">
        Fill out the form below and we&#39;ll get back to you within 24 hours.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block font-medium title-primary mb-1">
              {field.label}
            </label>

            {field.name === "service" ? (
              <select
                id={field.name}
                name={field.name}
                value={form.service}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, [field.name]: e.target.value }))
                }
                className="w-full p-2 border border-gray-300 rounded-md">
                <option>Automotive Tinting</option>
                <option>Residential Tinting</option>
                <option>Commercial Tinting</option>
              </select>
            ) : field.multiline ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={4}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <input
                type={field.type || "text"}
                id={field.name}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-[#E52323] hover:bg-[#B30000] text-white py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
          Send Quote Request
        </button>
      </form>
    </div>
  );
};

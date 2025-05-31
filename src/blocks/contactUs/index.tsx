"use client";

import { QuoteForm } from "@/components/quoteForm";
import { Phone, Mail, LocationOn } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { ContactInfoItems } from "@/types/globalTypes";

const contactInfo: ContactInfoItems[] = [
  { icon: <Phone sx={{ color: "#E52323" }} />, text: "(555) 123-TINT" },
  { icon: <Mail sx={{ color: "#E52323" }} />, text: "info@tintpro.com" },
  {
    icon: <LocationOn sx={{ color: "#E52323" }} />,
    text: "123 Tinting Ave, Your City, ST 12345",
  },
];

export const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold md:text-4xl mb-4">
            <FormattedMessage id="block.contactUs.title.1" />
            <span className="text-[#E52323]">
              <FormattedMessage id="block.contactUs.title.2" />
            </span>
            <FormattedMessage id="block.contactUs.title.3" />
          </h1>
          <p className="text-lg paragraph-primary">
            <FormattedMessage id="block.contactUs.paragraph0" />{" "}
            <span className="font-semibold">
              <FormattedMessage id="block.contactUs.paragraph1" />
            </span>
            <FormattedMessage id="block.contactUs.paragraph2" />
          </p>
        </div>

        <div className="grid md:grid-cols-2 pt-8 gap-10 items-start justify-center max-w-3xl mx-auto">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold title-primary mb-6">
              <FormattedMessage id="block.contactUs.contactInfo.title" />
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-2">
                  <span>{item.icon}</span>
                  <span className="paragraph-primary">{item.text}</span>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold title-primary mb-3">
                <FormattedMessage id="block.contactUs.contactInfo.subtitle" />
              </h4>
              <div className="space-y-1 paragraph-primary">
                <p>
                  <FormattedMessage id="block.contactUs.contactInfo.subtitle.schedule.1" />
                </p>
                <p>
                  <FormattedMessage id="block.contactUs.contactInfo.subtitle.schedule.2" />
                </p>
                <p>
                  <FormattedMessage id="block.contactUs.contactInfo.subtitle.schedule.3" />
                </p>
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

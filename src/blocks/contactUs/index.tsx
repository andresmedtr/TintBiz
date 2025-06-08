"use client";

import { QuoteForm } from "@/components/quoteForm";
import { WhatsApp, Mail, Instagram } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { contactInfo, businessHours } from "@/constants";

const getIcon = (key: string) => {
  if (key === "whatsapp") return <WhatsApp sx={{ color: "#E52323" }} />;
  if (key === "email") return <Mail sx={{ color: "#E52323" }} />;
  if (key === "instagram") return <Instagram sx={{ color: "#E52323" }} />;
  return null;
};

const getHref = (type: string, text: string) => {
  if (type === "whatsapp") return `https://wa.me/1234567890`;
  if (type === "email") return `mailto:${text}`;
  if (type === "instagram") {
    return "https://www.instagram.com/tintsathomefl/";
  }
  return "#";
};

export const ContactUs = () => {
  return (
    <section id="contact" className="py-12 bg-light scroll-mt-[30px] h-fit">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold md:text-4xl mb-4">
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
        <div className="grid md:grid-cols-2 pt-8 gap-10 items-start justify-center max-w-4xl mx-auto">
          {/* Left: Contact Info */}
          <div className="">
            <h3 className="text-xl lg:text-2xl font-bold title-primary mb-6 ">
              <FormattedMessage id="block.contactUs.contactInfo.title" />
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, idx) => (
                <a
                  href={getHref(item.type, item.text)}
                  key={idx}
                  target={item.type !== "email" ? "_blank" : undefined}
                  className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-2">
                  <span>{getIcon(item.type)}</span>
                  <span className="paragraph-primary">{item.text}</span>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold title-primary mb-3">
                <FormattedMessage id="block.contactUs.contactInfo.subtitle" />
              </h4>
              <div className="space-y-1 paragraph-primary">
                {businessHours.map((text) => {
                  return (
                    <p key={text}>
                      <FormattedMessage id={text} />
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

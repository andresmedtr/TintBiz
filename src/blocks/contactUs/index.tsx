"use client";

import { QuoteForm } from "@/components/quoteForm";
import { FormattedMessage } from "react-intl";
import { contactInfo, businessHours } from "@/constants";
import { getSocialMediaMap } from "@/utils/getSocialMediaMap";
import { scrollToView } from "@/utils/scrollToView";

export const ContactUs = () => {
  const iconsInformation = getSocialMediaMap();

  return (
    <section id="contact" className="py-12 bg-light scroll-mt-[50px] h-fit">
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
            <FormattedMessage id="block.contactUs.paragraph0" />
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
              {contactInfo.map((item, idx) => {
                const contact = iconsInformation[item.type];
                if (!contact) return null;

                return (
                  <a
                    key={idx}
                    onClick={() => scrollToView(contact.target)}
                    className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-2">
                    <span className="text-[#E52323]">{contact.icon}</span>
                    <span className="paragraph-primary">{item.text}</span>
                  </a>
                );
              })}
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

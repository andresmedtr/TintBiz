"use client";

import React from "react";
import { CompanyAchievements } from "@/components/companyAchievements";
import { FormattedMessage } from "react-intl";

export const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white scroll-mt-[70px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold md:text-4xl mb-4">
            <FormattedMessage id="block.aboutUs.container.title.1" />
            <span className="text-[#E52323]">
              <FormattedMessage id="block.aboutUs.container.title.2" />
            </span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-left transition-all duration-1000 opacity-100 translate-x-0">
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                <FormattedMessage id="block.aboutUs.left.subtitle" />
              </h3>
              <p className="text-[#333333] mb-6">
                <FormattedMessage id="block.aboutUs.left.description.1" />
              </p>
              <p className="text-[#333333] mb-6">
                <FormattedMessage id="block.aboutUs.left.description.2" />
              </p>
            </div>
            <div
              className="gray-bg p-8 rounded-lg transition-all duration-500 hover:shadow-lg opacity-100 translate-x-0"
              style={{ transitionDelay: "0.2s" }}>
              <h4 className="text-xl font-bold text-[#111111] mb-4">
                <FormattedMessage id="block.aboutUs.right.subtitle" />
              </h4>
              <p className="text-[#333333] mb-4">
                <FormattedMessage id="block.aboutUs.right.paragraph" />
              </p>
              <p className="text-sm text-[#333333] italic">
                <FormattedMessage id="block.aboutUs.right.founders" />
              </p>
            </div>
          </div>
          <CompanyAchievements />
        </div>
      </div>
    </section>
  );
};

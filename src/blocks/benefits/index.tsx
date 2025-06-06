"use client";
import React from "react";
import { FormattedMessage } from "react-intl";

export const Benefits = () => {
  return (
    <section id="benefits" className="scroll-mt-[70px] py-12 h-fit">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold md:text-4xl mb-4">
            <FormattedMessage id="block.benefits.title.1" />
            <span className="text-[#E52323]">
              <FormattedMessage id="block.benefits.title.2" />
            </span>
            <FormattedMessage id="block.benefits.title.3" />
          </h1>
        </div>
      </div>
    </section>
  );
};

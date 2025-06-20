"use client";
import { Card } from "@/components/card";
import { carBenefits, houseBenefits } from "@/constants";
import React from "react";
import { FormattedMessage } from "react-intl";
import { CarWash } from "../carWash";

export const Benefits = () => {
  return (
    <section
      id="benefits"
      className="scroll-mt-[70px] py-12 h-fit flex flex-col items-center justify-center benefits-section bg-fixed md:bg-center">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h1 className="text-xl font-bold md:text-4xl mb-4 text-white">
            <FormattedMessage id="block.benefits.title.1" />
            <span className="text-[#E52323]">
              <FormattedMessage id="block.benefits.title.2" />
            </span>
            <FormattedMessage id="block.benefits.title.3" />
          </h1>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-5 justify-evenly items-center md:flex-row">
        <Card img="/benefits/benefitsCar.webp">
          <div className="flex flex-col gap-4">
            {carBenefits.map((id) => (
              <div key={id} className="text-base leading-relaxed text-white/90">
                <FormattedMessage id={id} />
              </div>
            ))}
          </div>
        </Card>

        <Card img="/benefits/benefitsHouse.webp">
          <div className="flex flex-col gap-4">
            {houseBenefits.map((id) => (
              <div key={id} className="text-base leading-relaxed text-white/90">
                <FormattedMessage id={id} />
              </div>
            ))}
          </div>
        </Card>
      </div>
      <CarWash />
    </section>
  );
};

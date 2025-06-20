"use client";

import React from "react";
import { Card } from "@/components/card";
import { carWashServices } from "@/constants";
import { FormattedMessage } from "react-intl";
import { CustomButton } from "@/components/customButton";
import { scrollToView } from "@/utils/scrollToView";

export const CarWash = () => {
  return (
    <section id="carwash" className="py-10 carwash-section bg-top text-white">
      <div className="text-center ">
        <h1 className="text-xl font-bold md:text-4xl mb-4 pt-10">
          Premium
          <span className="text-[#E52323]"> Auto Detailing</span> Services
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-15 py-10">
        {carWashServices.map((item, idx) => (
          <Card key={idx} classes="text-center px-6 relative overflow-hidden">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <div className="text-2xl font-semibold leading-none tracking-tight text-[#cdcdccb7] transition-colors duration-300">
                <FormattedMessage id={item.title} />
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="text-sm">
                <FormattedMessage id={item.description} />
              </div>
            </div>
            <div className="bubbles absolute inset-0 pointer-events-none"></div>
          </Card>
        ))}
      </div>
      <div className="w-75 mx-auto">
        <CustomButton
          classes="w-full m-auto"
          id="block.carwash.square.button"
          onClick={() => scrollToView("#contact")}
        />
      </div>
    </section>
  );
};

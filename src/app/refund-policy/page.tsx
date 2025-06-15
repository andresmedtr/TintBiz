"use client";

import { legalTerms, refundTerms } from "@/constants";
import React from "react";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import { CustomButton } from "@/components/customButton";

const RefundPolicy = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full text-center py-5">
        <Link href="/">
          <CustomButton classes="asd" id="legal.button" />
        </Link>
      </div>
      {refundTerms.map((item, idx) => (
        <div className="py-5" key={idx}>
          <div className="flex">
            <h1 className="text-[#E52323] pb-2 text-lg font-bold">
              <FormattedMessage id={item.title} />
            </h1>
            <span>{idx + 1}</span>
          </div>
          <p className="ms-5">
            <FormattedMessage id={item.description} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default RefundPolicy;

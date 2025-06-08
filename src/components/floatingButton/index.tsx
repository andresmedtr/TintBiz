"use client";
import React from "react";
import { CustomButton } from "../customButton";
import { Email, Instagram, WhatsApp } from "@mui/icons-material";

export const FloatingButton = () => {
  const buttons = [
    { icon: <WhatsApp />, target: "https://wa.me/1234567890" },
    { icon: <Instagram />, target: "https://instagram.com/yourprofile" },
    { icon: <Email />, target: "#contact" },
  ];

  const handleClick = (target: string) => {
    if (target.startsWith("#")) {
      const element = document.getElementById(target.slice(1));
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(target, "_blank");
    }
  };

  return (
    <div className="fixed bottom-4 right-1 z-50 flex flex-col gap-2">
      {buttons.map(({ icon, target }, index) => (
        <CustomButton
          key={index}
          width="w-1 mx-0.5 flex justify-center"
          type="button"
          icon={icon}
          onClick={() => handleClick(target)}
        />
      ))}
    </div>
  );
};

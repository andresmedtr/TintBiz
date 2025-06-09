import { socialMedia } from "@/constants";
import React from "react";
import { SocialMediaButton } from "../socialMediaButons";

export const FloatingButton = () => {
  return (
    <div className="fixed bottom-4 right-1 z-50 flex flex-col gap-2">
      {socialMedia.map((type) => (
        <SocialMediaButton key={type} type={type} />
      ))}
    </div>
  );
};

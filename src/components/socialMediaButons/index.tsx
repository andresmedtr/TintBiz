"use client"

import { Email, Instagram, WhatsApp } from "@mui/icons-material";
import { CustomButton } from "../customButton";
import { scrollToView } from "@/utils/scrollToView";
import { SocialMediaType, SocialMediaItem } from "@/types/globalTypes";

export const SocialMediaButton = ({ type }: { type: SocialMediaType }) => {
  const SocialMedia: Record<SocialMediaType, SocialMediaItem> = {
    whatsapp: {
      icon: <WhatsApp />,
      target: "https://wa.me/1234567890",
    },
    instagram: {
      icon: <Instagram />,
      target: "https://www.instagram.com/tintsathomefl/",
    },
    email: {
      icon: <Email />,
      target: "#contact",
    },
  };
  const media = SocialMedia[type];

  if (!media) return null;

  return (
    <CustomButton
      width="w-1 mx-0.5 flex justify-center"
      type="button"
      icon={media.icon}
      onClick={() => scrollToView(media.target)}
    />
  );
};

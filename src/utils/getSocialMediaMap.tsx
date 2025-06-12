import { Email, Instagram, WhatsApp } from "@mui/icons-material";
import { SocialMediaType, SocialMediaItem } from "@/types/globalTypes";

export const getSocialMediaMap = (): Record<
  SocialMediaType,
  SocialMediaItem
> => ({
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
    target: "tintsathome@fl.com",
  },
});

import { Email, Instagram, Phone, WhatsApp } from "@mui/icons-material";
import { SocialMediaType, SocialMediaItem } from "@/types/globalTypes";

export const getSocialMediaMap = (): Record<
  SocialMediaType,
  SocialMediaItem
> => ({
  whatsapp: {
    icon: <WhatsApp />,
    target: "https://wa.me/3052409065",
  },
  phone: {
    icon: <Phone />,
    target: "+1(954)676-4480",
  },
  instagram: {
    icon: <Instagram />,
    target: "https://www.instagram.com/tintsathomefl/",
  },
  email: {
    icon: <Email />,
    target: "tintsathome.miami@gmail.com",
  },
});

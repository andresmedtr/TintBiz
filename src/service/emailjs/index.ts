import { EmailData } from "@/types/globalTypes";
import emailjs from "emailjs-com";

export const sendEmail = async (data: EmailData) => {
  const templateParams: Record<string, string> = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
  };

  return emailjs.send(
    "service_k0rtwpt",
    "template_vq0kb6v",
    templateParams,
    "nNDoDIArBqtTx2U9Y"
  );
};

import { QuoteFormValues } from "@/types/globalTypes";
import emailjs from "emailjs-com";

export const sendEmail = async (data: QuoteFormValues) => {
  const templateParams: Record<string, string> = {
    name: data.firstName + " " + data.lastName,
    email: data.email,
    phone: data.phone,
    message: data.message,
    service: data.service,
  };

  return emailjs.send(
    "service_k0rtwpt",
    "template_vq0kb6v",
    templateParams,
    "nNDoDIArBqtTx2U9Y"
  );
};

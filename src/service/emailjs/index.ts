import { QuoteFormValues } from "@/types/globalTypes";
import emailjs from "emailjs-com";

export const sendEmail = async (data: QuoteFormValues) => {
  const detailingNote =
    data.detailingService && data.detailingService !== "---"
      ? ` y tambien le gustaria incluir ${data.detailingService}`
      : "";

  const templateParams: Record<string, string> = {
    name: data.firstName + " " + data.lastName,
    email: data.email,
    phone: data.phone,
    message: data.message,
    service: data.tintingService,
    detailingService: data.detailingService,
    detailingNote: detailingNote,
  };

  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    templateParams,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
};

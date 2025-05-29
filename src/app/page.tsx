import Model3D from "@/blocks/model3D";
import ContactUs from "@/blocks/contactUs";
import { TintAccordion } from "@/components/accordion";
import { SecondaryNavbar } from "@/components/SecondayNavbar";

export default function Home() {
  return (
    <main>
      <Model3D />
      <SecondaryNavbar />
      <ContactUs />
    </main>
  );
}

import { ContactUs } from "@/blocks/contactUs";
import { Model3D } from "@/blocks/model3D";
import { AboutUs } from "@/blocks/aboutUs";
import { Benefits } from "@/blocks/benefits";
import { FloatingButton } from "@/components/floatingButton";

export default function Home() {
  return (
    <main>
      <Model3D />
      <FloatingButton />
      <Benefits />
      <AboutUs />
      <ContactUs />
    </main>
  );
}

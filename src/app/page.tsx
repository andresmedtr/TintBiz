import { ContactUs } from "@/blocks/contactUs";
import { Model3D } from "@/blocks/model3D";
import { AboutUs } from "@/blocks/aboutUs";

export default function Home() {
  return (
    <main>
      <Model3D />
      <AboutUs />
      <ContactUs />
    </main>
  );
}

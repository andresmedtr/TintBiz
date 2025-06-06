import { ContactUs } from "@/blocks/contactUs";
import { Model3D } from "@/blocks/model3D";
import { AboutUs } from "@/blocks/aboutUs";
import { Benefits } from "@/blocks/benefits";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Model3D />
      <Benefits />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}

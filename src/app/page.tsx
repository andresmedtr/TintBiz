import Model3D from "@/blocks/model3D";
import QuoteForm from "@/blocks/quoteForm";
import { TintAccordion } from "@/components/accordion";
import { SecondaryNavbar } from "@/components/SecondayNavbar";

export default function Home() {
  return (
    <main>
      <Model3D />
      <SecondaryNavbar />
      <QuoteForm />
    </main>
  );
}

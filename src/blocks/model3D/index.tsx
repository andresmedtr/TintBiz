import { TintAccordion } from "@/components/accordion";
import ModelViewer from "@/components/modelViewer";
import Image from "next/image";
// import { FormattedMessage } from "react-intl";

export const Model3D = () => {
  return (
    <div className="w-full h-[fit-content] flex">
      <div className="">
        <Image
          src="/logo/logo1.png"
          alt="Tints@Home Logo"
          width={300}
          height={300}
        />
        <div>
          <TintAccordion />
        </div>
      </div>
      <div>
        <ModelViewer
          src="https://vq4jjvoakgh0bglr.public.blob.vercel-storage.com/g_wagon-Lng1Z2L9WuWNGZXVDsKZhcHQUlFf0o.glb"
          alt="Un modelo 3D"
          auto-rotate={true}
          camera-controls={true}
          width="500px"
          height="500px"
        />
      </div>
    </div>
  );
};

import { TintAccordion } from "@/components/accordion";
import ModelViewer from "@/components/modelViewer";
import Image from "next/image";
// import { FormattedMessage } from "react-intl";

export const Model3D = () => {
  return (
    <div className="w-[100%] h-[fit-content] flex">
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
          src="/car/model-car.glb"
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

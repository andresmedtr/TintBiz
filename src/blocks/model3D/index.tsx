"use client";

import { TintAccordion } from "@/components/accordion";
import ModelViewer from "@/components/modelViewer";
import { useSwitch } from "@/hooks/useToggle";
import { FormattedMessage } from "react-intl";

export const Model3D = () => {
  const { isActive } = useSwitch();

  return (
    <div className="w-full h-[fit-content]">
      <div className="w-full h-fit text-center py-[50px]">
        <h1 className="text-5xl font-bold title-primary">
          <FormattedMessage id="block.model3d.title" />
        </h1>
        <p className="paragraph-primary">
          <FormattedMessage id="block.model3d.parapgrah" />
        </p>
      </div>
      <div className="bg-white w-full h-fit flex justify-center py-[50px]">
        <div className="w-[80%] h-full flex flex-row items-center justify-between">
          <div className="w-fit h-full gap-[20px]">
            <h1 className="text-5xl font-bold">
              <FormattedMessage id="block.model3d.square.title" />
            </h1>
            <p>
              <FormattedMessage id="block.model3d.square.paragrah" />
            </p>
            <TintAccordion />
          </div>
          <div>
            <ModelViewer
              src={
                isActive
                  ? "https://vq4jjvoakgh0bglr.public.blob.vercel-storage.com/g_wagon-Lng1Z2L9WuWNGZXVDsKZhcHQUlFf0o.glb"
                  : "https://vq4jjvoakgh0bglr.public.blob.vercel-storage.com/house/house-GP4Zwy8YteIEFs1sAcyredbr91cvN9.glb"
              }
              alt="Un modelo 3D"
              auto-rotate={true}
              camera-controls={true}
              width="700px"
              height="700px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

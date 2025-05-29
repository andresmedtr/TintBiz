"use client";

import { TintAccordion } from "@/components/accordion";
import ModelViewer from "@/components/modelViewer";
import { FormattedMessage } from "react-intl";

export const Model3D = () => {
  return (
    <div className="w-full h-[fit-content]">
      <div className="w-full h-fit text-center py-[50px]">
        <h1 className="text-5xl font-bold">
          <FormattedMessage id="block.model3d.title" />
        </h1>
        <p>
          <FormattedMessage id="block.model3d.parapgrah" />
        </p>
      </div>
      <div className="bg-white w-full h-fit flex justify-center py-[50px]">
        <div className="h-full flex flex-row border border-zinc-900 items-center">
          <div>
            <TintAccordion />
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
      </div>
    </div>
  );
};

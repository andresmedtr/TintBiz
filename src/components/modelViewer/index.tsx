"use client";

import { useTint } from "@/hooks/useTint";
import { ModelViewerElement, ModelViewerProps } from "@/types/globalTypes";
import "@google/model-viewer/lib/model-viewer";
import { useEffect, useRef, useState } from "react";

function ModelViewer({
  src,
  alt = "3D model",
  autoRotate = true,
  cameraControls = true,
  ar = false,
  className = "",
}: ModelViewerProps) {
  const modelRef = useRef<ModelViewerElement | null>(null);
  const { opacity } = useTint();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const viewer = modelRef.current;

    if (!viewer) return;

    const handleLoad = () => setLoading(false);
    viewer.addEventListener("load", handleLoad);

    return () => {
      viewer.removeEventListener("load", handleLoad);
    };
  }, [src]);

  useEffect(() => {
    const viewer = modelRef.current;

    const applyTint = () => {
      const materials = viewer?.model?.materials;
      if (!materials) return;

      const tintMat = materials.find((mat) =>
        ["Car_Glasses", "House_Glasses"].includes(mat.name)
      );

      if (tintMat) {
        tintMat.pbrMetallicRoughness.setBaseColorFactor([0, 0, 0, opacity]);
      }
    };

    const interval = setInterval(() => {
      if (
        viewer?.model &&
        Array.isArray(viewer.model.materials) &&
        viewer.model.materials.length > 0
      ) {
        applyTint();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [opacity]);

  return (
    <div className="relative w-fit h-fit">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#F2F2F2] rounded-lg backdrop-blur-sm">
          <span className="animate-spin w-10 h-10 border-4 border-[#E52323] border-t-transparent rounded-full"></span>
        </div>
      )}

      <model-viewer
        key={src}
        ref={modelRef}
        src={src}
        alt={alt}
        auto-rotate={autoRotate}
        camera-controls={cameraControls}
        ar={ar}
        class={className}
        disable-zoom
        camera-orbit="0deg 90deg auto"
        min-camera-orbit="auto 90deg auto"
        max-camera-orbit="auto 90deg auto"
      />
    </div>
  );
}

export default ModelViewer;

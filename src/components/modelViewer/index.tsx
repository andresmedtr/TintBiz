"use client";

import { useTint } from "@/hooks/useTint";
import { ModelViewerElement, ModelViewerProps } from "@/types/globalTypes";
import "@google/model-viewer/lib/model-viewer";
import { useEffect, useRef } from "react";

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
    <model-viewer
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
  );
}

export default ModelViewer;

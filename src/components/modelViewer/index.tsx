// components/ModelViewer.tsx
"use client";

import { ModelViewerProps } from "@/types/globalTypes";
import "@google/model-viewer";

export const ModelViewer = ({
  src,
  alt = "3D model",
  autoRotate = true,
  cameraControls = true,
  ar = false,
  className = "",
  width = "100%",
  height = "100%",

}: ModelViewerProps) => {
  return (
    <model-viewer
      src={src}
      alt={alt}
      auto-rotate={autoRotate}
      camera-controls={cameraControls}
      ar={ar}
      style={{ width, height }}
      class={className}
    />
  );
};


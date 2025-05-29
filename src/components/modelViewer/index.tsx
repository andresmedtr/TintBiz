// app/components/ModelViewer.tsx
"use client";

import "@google/model-viewer";
import React from "react";

// Extend native HTML attributes for the custom element
interface ModelViewerProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  ar?: boolean;
  exposure?: string;
  shadowIntensity?: string;
  style?: React.CSSProperties;
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  src,
  alt = "3D model",
  autoRotate = true,
  cameraControls = true,
  ar = false,
  exposure = "1",
  shadowIntensity = "1",
  style,
  ...props
}) => {
  return React.createElement(
    "model-viewer" as any,
    {
      src,
      alt,
      ar,
      "auto-rotate": autoRotate ? true : undefined,
      "camera-controls": cameraControls ? true : undefined,
      exposure,
      "shadow-intensity": shadowIntensity,
      style: { width: "100%", height: "500px", ...style },
      ...props,
    },
    null
  );
};
export default ModelViewer;

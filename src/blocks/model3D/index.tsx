// app/page.tsx or app/home/page.tsx
"use client";
import dynamic from "next/dynamic";

// Disable SSR for model-viewer
const ModelViewer = dynamic(() => import("@/components/modelViewer"), {
  ssr: false,
});

export default function Model3D() {
  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold mb-4">Explore Your Tint</h1>
      <ModelViewer
        src="https://vq4jjvoakgh0bglr.public.blob.vercel-storage.com/g_wagon-Lng1Z2L9WuWNGZXVDsKZhcHQUlFf0o.glb" // make sure this exists under /public/models/
        alt="Mercedes G-Wagon"
        style={{ maxWidth: "50%", borderRadius: "1rem" }}
        shadow-intensity="1.5"
        exposure="1.2"
      />
    </main>
  );
}

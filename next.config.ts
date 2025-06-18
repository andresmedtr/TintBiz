import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://*.local", "http://10.0.0.67:3000"],
};

export default nextConfig;

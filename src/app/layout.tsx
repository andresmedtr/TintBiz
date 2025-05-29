import type { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TranslateProvider } from "@/provider/translate";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TintsAtHome",
  description: "Tints to the comfortness of your home",
  authors: [
    { name: "Rodrigo Celis", url: "https://github.com/Congrak" },
    { name: "Andres Medina", url: "https://github.com/andresmedtr" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <CssBaseline />
        <TranslateProvider>
          <div style={{ maxWidth: "2000px", width: "100%", margin: "0 auto" }}>
            {children}
          </div>
        </TranslateProvider>
      </body>
    </html>
  );
}

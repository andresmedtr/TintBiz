import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <TranslateProvider>
          <div style={{ maxWidth: "2000px" }}>{children}</div>
        </TranslateProvider>
      </body>
    </html>
  );
}

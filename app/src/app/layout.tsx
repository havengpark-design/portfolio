import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import CustomCursor from "../components/CustomCursor";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haven Park",
  description: "Product designer. Storyteller. Artist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`subpixel-antialiased ${geist.className}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

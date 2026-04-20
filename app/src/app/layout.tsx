import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "../components/CustomCursor";

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
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

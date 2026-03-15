import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}

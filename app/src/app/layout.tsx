import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haven Park",
  description: "Product designer. Storyteller. Artist.",
  icons: {
    icon: "/favicon-circle.png",
    apple: "/favicon-circle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`subpixel-antialiased ${geist.className}`}>
        {children}
      </body>
    </html>
  );
}

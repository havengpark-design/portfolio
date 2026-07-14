import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const havengpark = localFont({
  src: "../../public/fonts/havengpark.woff2",
  variable: "--font-havengpark",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

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
      <body className={`subpixel-antialiased ${havengpark.variable} ${havengpark.className}`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "امداد فوری",
  description: "امداد خودرو در تهران",
};

const iranSans = localFont({
  variable: "--body-font-family",
  src: [
    {
      path: "./assets/fonts/IRANSansWebFaNum-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansWebFaNum-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansWebFaNum-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansWebFaNum-Light.woff",
      weight: "300",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${iranSans.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

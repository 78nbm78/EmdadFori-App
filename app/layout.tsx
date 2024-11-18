import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ""),
  title: "امداد فوری",
  description: "درخواست امداد خودرو فوری یدکش و کفی در کل استان تهران",
  generator: "امداد فوری",
  applicationName: "امداد فوری",
  openGraph: {
    title: `امداد خودرو در تهران | امداد فوری`,
    description: "درخواست امداد خودرو فوری یدکش و کفی در کل استان تهران",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "امداد فوری",
    images: [
      `${process.env.NEXT_PUBLIC_URL}/images/meta/icon-192x192.png`,
      `${process.env.NEXT_PUBLIC_URL}/images/meta/icon-256x256.png`,
      `${process.env.NEXT_PUBLIC_URL}/images/meta/icon-384x384.png`,
      `${process.env.NEXT_PUBLIC_URL}/images/meta/icon-512x512.png`,
    ],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      new URL(
        `${process.env.NEXT_PUBLIC_URL}/favicon.ico`,
        `${process.env.NEXT_PUBLIC_URL}`,
      ),
    ],
    apple: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/meta/icon-192x192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/meta/icon-256x256.png`,
        sizes: "256x256",
        type: "image/png",
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/meta/icon-384x384.png`,
        sizes: "384x384",
        type: "image/png",
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/meta/icon-512x512.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: `${process.env.NEXT_PUBLIC_URL}/manifest.webmanifest`,
};

const iranSans = localFont({
  variable: "--body-font-family",
  src: [
    {
      path: "./assets/fonts/IRANSansWebFaNum-Black.woff",
      weight: "900",
      style: "normal",
    },
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

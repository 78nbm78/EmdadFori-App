import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "امداد فوری",
    short_name: "EmdadFori",
    description: "امداد خودرو فوری یدکش و کفی در کل استان تهران",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#f27128",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: `${process?.env?.NEXT_PUBLIC_URL}/images/meta/icon-192x192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${process?.env?.NEXT_PUBLIC_URL}/images/meta/icon-256x256.png`,
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: `${process?.env?.NEXT_PUBLIC_URL}/images/meta/icon-384x384.png`,
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: `${process?.env?.NEXT_PUBLIC_URL}/images/meta/icon-512x512.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

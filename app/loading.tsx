"use client";

import Image from "next/image";
import LoadingSpinner from "@/public/images/loading-spinner.svg";

export default function Loading() {
  return (
    <div className="fixed top-0 right-0 w-screen h-screen bg-primary/10 z-50 flex items-center justify-center text-xl font-bold text-secondary scroll-auto">
      <Image
        src={LoadingSpinner}
        width={48}
        height={48}
        alt="loading"
        title="loading"
        className="inline-block"
      />
    </div>
  );
}

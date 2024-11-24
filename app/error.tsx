"use client";

import MainLayout from "@/layouts/MainLayout";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <MainLayout>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </MainLayout>
  );
}

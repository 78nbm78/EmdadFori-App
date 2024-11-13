"use client";

import { Button } from "@/components/ui/button";
import { User2 } from "lucide-react";
import { useRouter } from "next/navigation";

const HeaderLogin = () => {
  const router = useRouter();

  return (
    <Button
      variant="secondary"
      className="w-11 h-10 p-0 px-2"
      onClick={() => router.push("/auth")}
    >
      <User2 />
    </Button>
  );
};

export default HeaderLogin;

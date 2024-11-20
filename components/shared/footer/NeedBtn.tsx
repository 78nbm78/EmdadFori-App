"use client";

import { Button } from "@/components/ui/button";
import { CarFrontIcon } from "lucide-react";

const NeedBtn = () => {
  const onTrigger = () => {
    console.log("do somthing");
  };

  return (
    <Button
      size="lg"
      variant="secondary"
      className="gap-3 font-bold"
      onClick={onTrigger}
    >
      <CarFrontIcon className="scale-150" />
      درخواست آنی امداد خودرو
    </Button>
  );
};

export default NeedBtn;

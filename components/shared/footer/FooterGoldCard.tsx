"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const FooterGoldCard = () => {
  return (
    <div className="pt-16 sm:pt-10 lg:pt-8 sm:flex sm:items-center sm:justify-between">
      <div className="mb-6 sm:mb-0 space-y-8">
        <p className="text-white text-3xl md:text-4xl text-center sm:text-start font-bold">
          <span className="text-amber-500">کارت طلایی</span> امداد خودرو دارید؟
        </p>
        <p className="text-white/70 text-xl md:text-2xl max-w-[550px] !leading-8">
          بمدت یک‌سال هر جا توی جاده گیر کردی و یا به خدمات امداد خودرویی نیاز
          داشتی، ما <span className="text-green-500 font-medium">رایگان</span>{" "}
          در کنارتیم!
        </p>
      </div>
      <div className="flex sm:flex-col gap-4">
        <Button variant="primary" asChild>
          <Link
            href="/premium-card"
            className="btn btn-dark w-1/2 text-center sm:min-w-40"
          >
            دریافت کارت طلایی
          </Link>
        </Button>
        <Button variant="destructive" asChild>
          <Link
            href="/services"
            className="btn btn-white w-1/2 text-center sm:min-w-40"
          >
            خدمات امداد فوری
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FooterGoldCard;

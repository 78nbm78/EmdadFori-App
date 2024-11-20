"use client";

import BrandsData from "@/mock/BrandsData.json";
import Link from "next/link";
import { useState } from "react";

const FooterBrands = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div
      className={`relative overflow-hidden mt-12 md:mt-16 ${show ? "max-h-[auto]" : "max-h-20"}`}
    >
      <span className="inline-block font-bold text-white me-4">
        امداد خودرو برند ها
      </span>
      <button
        onClick={() => setShow(!show)}
        className="text-sky-600 transition hover:underline"
      >
        (نمایش همه)
      </button>
      <ul className="mt-4 -mx-4">
        {BrandsData.map((brand) => (
          <li className="inline-block px-4 mb-4 text-white/80" key={brand.id}>
            <Link
              href={brand.url}
              className="font-light text-white/80 transition hover:text-primary"
            >
              امداد {brand.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBrands;

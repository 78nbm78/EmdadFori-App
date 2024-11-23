"use client";

import { useState } from "react";
import Link from "next/link";
import type { IBrand } from "@/app/(pages)/brands/_core/interfaces";

const FooterBrands = ({ brands }: { brands: IBrand[] }) => {
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
        {brands.map((brand) => (
          <li className="inline-block px-4 mb-4 text-white/80" key={brand.id}>
            <Link
              href={`/brands/${brand.slug}`}
              className="font-light text-white/80 transition hover:text-primary"
            >
              امداد {brand.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBrands;

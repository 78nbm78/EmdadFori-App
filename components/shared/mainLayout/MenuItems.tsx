"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ServicesData from "@/mock/ServicesData.json";
import BrandsData from "@/mock/BrandsData.json";
import { ChevronDown } from "lucide-react";

const MenuItems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-2">
      <li>
        <Link
          className={`inline-flex items-center gap-1 py-6 px-3 font-medium border-b-2 border-transparent transition hover:text-primary hover:border-primary ${pathname === "/" ? "text-primary border-b-primary" : "text-slate-700"}`}
          href="/"
        >
          امداد فوری
        </Link>
      </li>
      <li className="group">
        <Link
          className={`inline-flex items-center gap-1 py-6 px-3 font-medium border-b-2 border-transparent transition group-hover:text-primary group-hover:border-primary ${pathname === "/services" ? "text-primary border-b-primary" : "text-slate-700"}`}
          href="/services"
        >
          خدمات
          <ChevronDown className="-me-1" size={16} />
        </Link>

        <ul className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full start-0 w-full bg-white rounded-b-xl grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 shadow-md p-4 md:p-6 border-t border-t-slate-200 gap-6 max-h-[calc(100svh-100px)] overflow-auto">
          {ServicesData.map((service) => (
            <li className="text-center" key={service.id}>
              <Link
                href={service.url}
                className="inline-flex flex-col items-center justify-center transition hover:text-green-500 text-sm gap-2"
              >
                <Image
                  src={service.greenIcon}
                  alt={service.label}
                  title={service.label}
                  width={36}
                  height={36}
                  className="inline-block"
                />
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="group">
        <Link
          className={`inline-flex items-center gap-1 py-6 px-3 font-medium border-b-2 border-transparent transition group-hover:text-primary group-hover:border-primary ${pathname === "/brands" ? "text-primary border-b-primary" : "text-slate-700"}`}
          href="/brands"
        >
          برندها
          <ChevronDown className="-me-1" size={16} />
        </Link>

        <ul className="transition invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full start-0 w-full bg-white rounded-b-xl grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 shadow-md p-4 md:p-6 border-t border-t-slate-200 gap-6 max-h-[calc(100svh-100px)] overflow-auto">
          {BrandsData.map((brand) => (
            <li className="text-center" key={brand.id}>
              <Link
                href={brand.url}
                className="inline-flex flex-col items-center justify-center transition hover:text-green-500 text-sm gap-1"
              >
                <Image
                  src={brand.icon}
                  alt={brand.label}
                  title={brand.label}
                  width={36}
                  height={36}
                  className="inline-block"
                />
                {brand.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <Link
          className={`inline-flex items-center gap-1 py-6 px-3 font-medium border-b-2 border-transparent transition hover:text-primary hover:border-primary ${pathname === "/premium-card" ? "text-primary border-b-primary" : "text-slate-700"}`}
          href="/premium-card"
        >
          کارت طلایی
        </Link>
      </li>
      <li>
        <Link
          className={`inline-flex items-center gap-1 py-6 px-3 font-medium border-b-2 border-transparent transition hover:text-primary hover:border-primary ${pathname === "/blog" ? "text-primary border-b-primary" : "text-slate-700"}`}
          href="/blog"
        >
          بلاگ
        </Link>
      </li>
      <li>
        <Link
          className={`inline-flex items-center gap-1 py-6 px-3 font-medium border-b-2 border-transparent transition hover:text-primary hover:border-primary ${pathname === "/about" ? "text-primary border-b-primary" : "text-slate-700"}`}
          href="/about"
        >
          درباره ما
        </Link>
      </li>
      <li>
        <Link
          className={`inline-flex items-center gap-1 py-6 px-3 font-medium border-b-2 border-transparent transition hover:text-primary hover:border-primary ${pathname === "/contact" ? "text-primary border-b-primary" : "text-slate-700"}`}
          href="/contact"
        >
          تماس با ما
        </Link>
      </li>
    </ul>
  );
};

export default MenuItems;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-8">
      <li>
        <Link
          className={`font-medium border-b border-transparent transition hover:text-primary hover:border-primary ${pathname === "/" ? "text-primary" : "text-slate-700"}`}
          href="/"
        >
          امداد فوری
        </Link>
      </li>
      <li>
        <Link
          className={`font-medium border-b border-transparent transition hover:text-primary hover:border-primary ${pathname === "/services" ? "text-primary" : "text-slate-700"}`}
          href="/services"
        >
          خدمات
        </Link>
      </li>
      <li>
        <Link
          className={`font-medium border-b border-transparent transition hover:text-primary hover:border-primary ${pathname === "/brands" ? "text-primary" : "text-slate-700"}`}
          href="/brands"
        >
          برندها
        </Link>
      </li>
      <li>
        <Link
          className={`font-medium border-b border-transparent transition hover:text-primary hover:border-primary ${pathname === "/blog" ? "text-primary" : "text-slate-700"}`}
          href="/premium-card"
        >
          کارت طلایی
        </Link>
      </li>
      <li>
        <Link
          className={`font-medium border-b border-transparent transition hover:text-primary hover:border-primary ${pathname === "/blog" ? "text-primary" : "text-slate-700"}`}
          href="/blog"
        >
          بلاگ
        </Link>
      </li>
      <li>
        <Link
          className={`font-medium border-b border-transparent transition hover:text-primary hover:border-primary ${pathname === "/about" ? "text-primary" : "text-slate-700"}`}
          href="/about"
        >
          درباره ما
        </Link>
      </li>
      <li>
        <Link
          className={`font-medium border-b border-transparent transition hover:text-primary hover:border-primary ${pathname === "/contact" ? "text-primary" : "text-slate-700"}`}
          href="/contact"
        >
          تماس با ما
        </Link>
      </li>
    </ul>
  );
};

export default MenuItems;

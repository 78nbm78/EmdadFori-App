"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 start-0 w-60 h-full overflow-auto bg-white shadow-lg z-10 flex flex-col gap-6 p-4 pt-24">
      <ul className="space-y-4">
        <li>
          <Link
            className={`font-medium transition hover:text-primary ${pathname === "/" ? "text-primary" : "text-slate-700"}`}
            href="/"
          >
            امداد فوری
          </Link>
        </li>
        <li className="group">
          <Link
            className={`font-medium transition hover:text-primary ${pathname === "/services" ? "text-primary" : "text-slate-700"}`}
            href="/services"
          >
            خدمات
          </Link>
        </li>
        <li>
          <Link
            className={`font-medium transition hover:text-primary ${pathname === "/brands" ? "text-primary" : "text-slate-700"}`}
            href="/brands"
          >
            برندها
          </Link>
        </li>
        <li>
          <Link
            className={`font-medium transition hover:text-primary ${pathname === "/premium-card" ? "text-primary" : "text-slate-700"}`}
            href="/premium-card"
          >
            کارت طلایی
          </Link>
        </li>
        <li>
          <Link
            className={`font-medium transition hover:text-primary ${pathname === "/blog" ? "text-primary" : "text-slate-700"}`}
            href="/blog"
          >
            بلاگ
          </Link>
        </li>
        <li>
          <Link
            className={`font-medium transition hover:text-primary ${pathname === "/about" ? "text-primary" : "text-slate-700"}`}
            href="/about"
          >
            درباره ما
          </Link>
        </li>
        <li>
          <Link
            className={`font-medium transition hover:text-primary ${pathname === "/contact" ? "text-primary" : "text-slate-700"}`}
            href="/contact"
          >
            تماس با ما
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MobileMenu;

"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookieByKey } from "@/actions/cookie";
import Image from "next/image";
import AvatarImage from "@/public/images/user-avatar.svg";
import { toast } from "@/hooks/use-toast";

const AdminSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onLoggout = () => {
    deleteCookieByKey("token");
    toast({ variant: "success", title: "با موفقیت خارج شدید!" });
    router.push("/");
  };

  return (
    <aside className="flex flex-col">
      <a
        href="/"
        target="_blank"
        className="block text-center mb-6 w-full rounded-xl bg-white font-bold text-lg sm:text-xl lg:text-2xl py-3 px-4"
      >
        <span className="text-primary">Emdad</span>Fori
      </a>

      <div className="grow overflow-auto bg-white rounded-xl shadow-md">
        <div className="text-center mx-4 py-4 mb-4 border-b border-slate-300">
          <Image
            src={AvatarImage}
            width={72}
            height={72}
            alt="ادمین"
            className="inline-block rounded-full mb-2"
          />
          <p className="font-medium text-sm">ادمین</p>
        </div>

        <ul className="space-y-2">
          <li>
            <Link
              className={`${pathname === "/admin" ? "text-primary bg-primary/15" : "text-slate-800"} block transition hover:bg-primary/15 hover:text-primary py-2 px-4`}
              href="/admin"
            >
              داشبورد
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/admin/experts" ? "text-primary bg-primary/15" : "text-slate-800"} block transition hover:bg-primary/15 hover:text-primary py-2 px-4`}
              href="/admin/experts"
            >
              لیست متخصصین
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/admin/applicants" ? "text-primary bg-primary/15" : "text-slate-800"} block transition hover:bg-primary/15 hover:text-primary py-2 px-4`}
              href="/admin/applicants"
            >
              لیست کاربران
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/admin/blog" ? "text-primary bg-primary/15" : "text-slate-800"} block transition hover:bg-primary/15 hover:text-primary py-2 px-4`}
              href="/admin/blog"
            >
              مدیریت بلاگ
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/admin/services" ? "text-primary bg-primary/15" : "text-slate-800"} block transition hover:bg-primary/15 hover:text-primary py-2 px-4`}
              href="/admin/services"
            >
              مدیریت خدمات
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === "/admin/brands" ? "text-primary bg-primary/15" : "text-slate-800"} block transition hover:bg-primary/15 hover:text-primary py-2 px-4`}
              href="/admin/brands"
            >
              مدیریت برندها
            </Link>
          </li>
        </ul>

        <div className="shrink-0 mt-4 pt-4 mb-4 mx-4 border-t border-slate-300">
          <Button
            variant="ghost"
            className="bg-transparent w-full text-red-600 bg-red-100 hover:bg-red-300"
            onClick={onLoggout}
          >
            خروج از حساب
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;

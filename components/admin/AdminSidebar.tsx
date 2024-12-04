"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookieByKey } from "@/actions/cookie";
import Image from "next/image";
import AvatarImage from "@/public/images/user-avatar.svg";
import { toast } from "@/hooks/use-toast";
import {
  CarFront,
  ClipboardListIcon,
  KeySquare,
  LayoutDashboard,
  Logs,
  Rss,
  ShieldPlus,
  Users2,
} from "lucide-react";

interface IProps {
  premiumCount?: number | 0;
  jobsCount?: number | 0;
}

const AdminSidebar = ({ jobsCount, premiumCount }: IProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const onLoggout = () => {
    deleteCookieByKey("token");
    toast({ variant: "success", title: "با موفقیت خارج شدید!" });
    router.push("/");
  };

  return (
    <aside className="flex flex-col h-full">
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

        <ul>
          <li>
            <Link
              className={`${pathname === "/admin" ? "text-primary bg-primary/15" : "text-slate-800"} font-medium text-sm flex items-center gap-2 transition hover:bg-primary/15 hover:text-primary py-3 px-4`}
              href="/admin"
            >
              <LayoutDashboard size={18} />
              داشبورد
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname.includes("/admin/jobs") ? "text-primary bg-primary/15" : "text-slate-800"} font-medium text-sm flex items-center gap-2 transition hover:bg-primary/15 hover:text-primary py-3 px-4`}
              href="/admin/jobs"
            >
              <Logs size={18} />
              درخواست‌های امداد
              <span className="rounded-full w-4 h-4 bg-red-500 text-xs align-top ms-2 text-white inline-flex items-center justify-center">
                {jobsCount || 0}
              </span>
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname.includes("/admin/premium-card") ? "text-primary bg-primary/15" : "text-slate-800"} font-medium text-sm flex items-center gap-2 transition hover:bg-primary/15 hover:text-primary py-3 px-4`}
              href="/admin/premium-card"
            >
              <ShieldPlus size={18} />
              درخواست‌های کارت طلایی
              <span className="rounded-full w-4 h-4 bg-red-500 text-xs align-top ms-2 text-white inline-flex items-center justify-center">
                {premiumCount || 0}
              </span>
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname.includes("/admin/experts") ? "text-primary bg-primary/15" : "text-slate-800"} font-medium text-sm flex items-center gap-2 transition hover:bg-primary/15 hover:text-primary py-3 px-4`}
              href="/admin/experts"
            >
              <CarFront size={18} />
              لیست متخصصین
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname.includes("/admin/applicants") ? "text-primary bg-primary/15" : "text-slate-800"} font-medium text-sm flex items-center gap-2 transition hover:bg-primary/15 hover:text-primary py-3 px-4`}
              href="/admin/applicants"
            >
              <Users2 size={18} />
              لیست کاربران
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname.includes("/admin/blog") ? "text-primary bg-primary/15" : "text-slate-800"} font-medium text-sm flex items-center gap-2 transition hover:bg-primary/15 hover:text-primary py-3 px-4`}
              href="/admin/blog"
            >
              <Rss size={18} />
              مدیریت بلاگ
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname.includes("/admin/services") ? "text-primary bg-primary/15" : "text-slate-800"} font-medium text-sm flex items-center gap-2 transition hover:bg-primary/15 hover:text-primary py-3 px-4`}
              href="/admin/services"
            >
              <ClipboardListIcon size={18} />
              مدیریت خدمات
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname.includes("/admin/brands") ? "text-primary bg-primary/15" : "text-slate-800"} font-medium text-sm flex items-center gap-2 transition hover:bg-primary/15 hover:text-primary py-3 px-4`}
              href="/admin/brands"
            >
              <KeySquare size={18} />
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

import { JwtDecodedValue } from "@/actions/auth";
import { getCookieByKey } from "@/actions/cookie";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { MessageSquareMore } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const AdminLayout: React.FC<IProps> = async ({ children }) => {
  const token = await getCookieByKey("token");
  const jwt = await JwtDecodedValue({ tokenValue: token });
  if (!jwt || jwt?.role !== "ADMIN") redirect("/auth");

  return (
    <div className="relative container-fluid bg-slate-200">
      <div className="w-full z-0 h-60 absolute start-0 top-0 bg-gradient-to-l from-cyan-800 to-teal-800"></div>

      <div className="flex flex-col min-h-screen sm:px-4 relative z-[1]">
        <header className="absolute w-full end-4 top-6">
          <div className="flex justify-end">
            <Link
              href="/admin/comments"
              className="inline-flex items-center gap-2 text-white transition hover:text-primary"
            >
              <MessageSquareMore />
              نظرات کاربران
            </Link>
          </div>
        </header>

        <main className="grow pt-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-1/5 px-4">
              <AdminSidebar />
            </div>
            <div className="w-4/5 px-4 pt-20">{children}</div>
          </div>
        </main>

        <footer>
          <div className="text-slate-600 text-start" dir="ltr">
            &copy; All rights reserved for EmdadFori co.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;

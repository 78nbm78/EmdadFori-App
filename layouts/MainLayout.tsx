import { ReactNode } from "react";
import MainHeader from "@/components/shared/MainHeader";
import MainFooter from "@/components/shared/MainFooter";
import "@/public/css/landing.css";
import { GetServices } from "@/services/Services";
import { GetBrands } from "@/services/Brands";
import { GetBlogs } from "@/services/Blog";

interface IProps {
  children: ReactNode;
}

const MainLayout = async ({ children }: IProps) => {
  const services = await GetServices();
  const brands = await GetBrands();
  const blogs = await GetBlogs();

  return (
    <div className="flex flex-col min-h-[100svh]">
      <MainHeader services={services?.data || []} />
      <main className="grow">{children}</main>
      <MainFooter
        blogs={blogs?.data || []}
        brands={brands?.data || []}
        services={services?.data || []}
      />
    </div>
  );
};

export default MainLayout;

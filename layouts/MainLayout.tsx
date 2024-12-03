import { ReactNode } from "react";
import MainHeader from "@/components/shared/MainHeader";
import MainFooter from "@/components/shared/MainFooter";
import "@/public/css/landing.css";
import { GetServices } from "@/services/Services";

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = async ({ children }) => {
  const services = await GetServices();

  return (
    <div className="flex flex-col min-h-[100svh]">
      <MainHeader services={services?.data || []} />
      <main className="grow">{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;

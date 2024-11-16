import MainFooter from "@/components/shared/MainFooter";
import MainHeader from "@/components/shared/MainHeader";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100svh]">
      <MainHeader />
      <main className="grow">{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;

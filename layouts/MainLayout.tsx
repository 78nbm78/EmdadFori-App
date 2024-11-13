import MainHeader from "@/components/shared/mainLayout/MainHeader";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <MainHeader />
      <main className="grow">{children}</main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;

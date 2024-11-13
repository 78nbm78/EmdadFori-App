import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ExpertLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default ExpertLayout;

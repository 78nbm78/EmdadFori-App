import { JwtDecodedValue } from "@/actions/auth";
import { getCookieByKey } from "@/actions/cookie";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ExpertLayout: React.FC<IProps> = async ({ children }) => {
  const token = await getCookieByKey("token");
  const jwt = await JwtDecodedValue({ tokenValue: token });
  if (!jwt || jwt?.role !== "EXPERT") redirect("/auth");

  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default ExpertLayout;

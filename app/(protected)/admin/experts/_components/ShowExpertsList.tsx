"use client";

import { IExpertType } from "@/interfaces/Experts";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

interface IProps {
  experts: IExpertType[] | undefined;
  accessToken: string;
}

const ShowExpertsList: React.FC<IProps> = ({ experts, accessToken }) => {
  return <DataTable columns={columns({ accessToken })} data={experts || []} />;
};

export default ShowExpertsList;

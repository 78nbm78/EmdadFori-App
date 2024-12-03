"use client";

import { IExpertList } from "@/interfaces/Experts";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

interface IProps {
  experts: IExpertList[] | undefined;
  accessToken: string;
}

const ShowExpertsList: React.FC<IProps> = ({ experts, accessToken }) => {
  return <DataTable columns={columns({ accessToken })} data={experts || []} />;
};

export default ShowExpertsList;

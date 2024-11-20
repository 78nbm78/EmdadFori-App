"use client";

import { IExpertList } from "../_core/interfaces";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

interface IProps {
  experts: IExpertList[] | undefined;
}

const ShowExpertsList: React.FC<IProps> = ({ experts }) => {
  return <DataTable columns={columns} data={experts || []} />;
};

export default ShowExpertsList;

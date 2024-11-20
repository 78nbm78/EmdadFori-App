export interface IExpertList {
  userId: number;
  expertId: number;
  firstName: string;
  lastName: string;
  natianalCode: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  mobile: string;
  role: "ADMIN" | "APPLICANT" | "EXPERT";
  financialReportsCount: number;
  jobsCount: number;
}

export interface IExpertsResponse {
  status: "SUCCESS" | "ERROR";
  data: IExpertList[];
}

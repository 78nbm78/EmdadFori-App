export interface IExpertList {
  userId: number;
  expertId: number;
  firstName: string;
  lastName: string;
  nationalCode: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  mobile: string;
  role: "ADMIN" | "APPLICANT" | "EXPERT";
  financialReportsCount: number;
  isActive: boolean;
  jobsCount: number;
}

export interface IExpertsResponse {
  type: "SUCCESS" | "ERROR";
  data: IExpertList[];
}

import { emailRegex } from "@/constants/regex";
import { z } from "zod";

export const IExpert = z.object({
  userId: z.number(),
  expertId: z.number(),
  firstName: z
    .string({ message: "عنوان صفحه را وارد کنید" })
    .min(2, { message: "نام باید حداقل ۵ کاراکتر باشد" })
    .max(100, { message: "نام نباید بیشتر از ۱۰۰ کاراکتر باشد" }),
  lastName: z
    .string({ message: "عنوان صفحه را وارد کنید" })
    .min(2, { message: "نام خانوادگی باید حداقل ۵ کاراکتر باشد" })
    .max(100, { message: "نام خانوادگی نباید بیشتر از ۱۰۰ کاراکتر باشد" }),
  nationalCode: z
    .string({ message: "لطفا کد ملی خود را وارد کنید" })
    .length(10, { message: "کد ملی باید 10 کاراکتر باشد" }),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  email: z
    .string({ message: "ایمیل نامعتبر است" })
    .regex(emailRegex, { message: "ایمیل نامعتبر است" })
    .optional(),
  mobile: z
    .string({ message: "لطفا شماره موبایل خود را وارد کنید" })
    .length(11, { message: "شماره موبایل باید 11 کاراکتر باشد" }),
  role: z
    .enum(["ADMIN", "APPLICANT", "EXPERT"], { message: "نقش نامعتبر است" })
    .optional(),
  financialReportsCount: z.number().optional(),
  isActive: z.boolean().optional(),
  jobsCount: z.number().optional(),
});

export type IExpertType = z.infer<typeof IExpert>;

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
  data: IExpertType[];
}

export interface IExpertActivationResponse {
  type: "SUCCESS" | "ERROR";
  message: string;
  isActive: boolean;
}

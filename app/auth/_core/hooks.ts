import { create } from "zustand";
import { IAuthVariable } from "./interfaces";

export const useAuthVariables = create<IAuthVariable>((set) => ({
  expertSignupForm: false,
  setExpertSignupForm: (value: boolean) =>
    set(() => ({ expertSignupForm: value })),
  expertLoginForm: true,
  setExpertLoginForm: (value: boolean) =>
    set(() => ({ expertLoginForm: value })),

  applicantSignupForm: false,
  setApplicantSignupForm: (value: boolean) =>
    set(() => ({ applicantSignupForm: value })),
  applicantLoginForm: true,
  setApplicantLoginForm: (value: boolean) =>
    set(() => ({ applicantLoginForm: value })),
}));

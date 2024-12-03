export type IAuthVariable = {
  expertSignupForm: boolean;
  setExpertSignupForm: (value: boolean) => void;
  expertLoginForm: boolean;
  setExpertLoginForm: (value: boolean) => void;

  applicantSignupForm: boolean;
  setApplicantSignupForm: (value: boolean) => void;
  applicantLoginForm: boolean;
  setApplicantLoginForm: (value: boolean) => void;
};

export type ILoginInputs = {
  mobile: string;
  password: string;
};

export type IExpertSignupInputs = {
  firstName: string;
  lastName: string;
  mobile: string;
  phoneNumber: string;
  nationalCode: string;
  password: string;
  passwordRepeat?: string;
};

export type ILoginResponse = {
  type: "SUCCESS" | "ERROR";
  message: string;
};

export type ISignupResponse = {
  type: "SUCCESS" | "ERROR";
  message: string;
};

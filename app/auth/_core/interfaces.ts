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

//   export type ISignupDoctorInputs = {
//     first_name: string;
//     last_name: string;
//     experience: string;
//     medical_code: string;
//     email: string;
//     password: string;
//     password_repeat?: string;
//   };

//   export type IPatientSignupInputs = {
//     first_name: string;
//     last_name: string;
//     email: string;
//     age: number;
//     password: string;
//     password_repeat?: string;
//   };

export type ILoginResponse = {
  status: "SUCCESS" | "ERROR";
  message: string;
};

export type ISignupResponse = {
  status: "SUCCESS" | "ERROR";
  message: string;
};

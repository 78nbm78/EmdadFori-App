import type {
  IExpertSignupInputs,
  ILoginInputs,
  ILoginResponse,
  ISignupResponse,
} from "./interfaces";

export const ExpertLoginAPI = async ({
  mobile,
  password,
}: ILoginInputs): Promise<ILoginResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/expert/login`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile, password }),
      },
    );

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};

export const ExpertSignupAPI = async ({
  firstName,
  lastName,
  mobile,
  nationalCode,
  password,
  phoneNumber,
}: IExpertSignupInputs): Promise<ISignupResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/expert/signup`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          mobile,
          nationalCode,
          password,
          phoneNumber,
        }),
      },
    );

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};

export const ApplicantLoginAPI = async ({
  mobile,
  password,
}: ILoginInputs): Promise<ILoginResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/applicant/login`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile, password }),
      },
    );

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};

// export const PatientSignupAPI = async ({
//     first_name,
//     last_name,
//     age,
//     email,
//     password,
// }: IPatientSignupInputs): Promise<ISignupResponse | undefined> => {
//     try {
//         const response = await fetch(
//             `${process.env.NEXT_PUBLIC_URL}/api/patient/signup`,
//             {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ email, password, first_name, last_name, age }),
//             },
//         );

//         return await response.json();
//     } catch (error: unknown) {
//         console.log(error);
//     }
// };

export const AdminLoginAPI = async ({
  mobile,
  password,
}: ILoginInputs): Promise<ILoginResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/admin/login`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile, password }),
      },
    );

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};

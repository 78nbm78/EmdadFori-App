"use client";

import { useAuthVariables } from "../../_core/hooks";
import ApplicantLoginForm from "./ApplicantLoginForm";
import ApplicantSignupForm from "./ApplicantSignupForm";

const HandlePatientForms = () => {
  const { applicantLoginForm, applicantSignupForm } = useAuthVariables();

  return (
    <>
      {applicantLoginForm && <ApplicantLoginForm />}
      {applicantSignupForm && <ApplicantSignupForm />}
    </>
  );
};

export default HandlePatientForms;

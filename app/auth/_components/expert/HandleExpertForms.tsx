"use client";

import { useAuthVariables } from "../../_core/hooks";
import ExpertLoginForm from "./ExpertLoginForm";
import ExpertSignupForm from "./ExpertSignupForm";

const HandleDoctorForms = () => {
  const { expertLoginForm, expertSignupForm } = useAuthVariables();

  return (
    <>
      {expertLoginForm && <ExpertLoginForm />}
      {expertSignupForm && <ExpertSignupForm />}
    </>
  );
};

export default HandleDoctorForms;

import React from "react";
import Header from "../../components/Header";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <div>
      <Header button="Voltar" />
      <h3>Crie sua conta</h3>
      <span>Rapido e grátis, vamos nessa</span>
      <SignInForm />
    </div>
  );
};

export default SignIn;

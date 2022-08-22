import React from "react";
import Header from "../../components/Header";
import { ContentContainer } from "../../styles/containers";
import SignInForm from "./SignInForm";
import SignInPage from "./styles";

const SignIn = () => {
  return (
    <SignInPage>
      <Header button="Voltar" />
      <main>
        <ContentContainer>
          <SignInForm />
        </ContentContainer>
      </main>
    </SignInPage>
  );
};

export default SignIn;

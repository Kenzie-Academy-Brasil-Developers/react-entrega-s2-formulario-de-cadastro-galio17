import React from "react";
import Header from "../../components/Header";
import { ContentContainer } from "../../styles/containers";
import LoginForm from "./LoginForm";
import LoginPage from "./styles";

const Login = () => {
  return (
    <LoginPage>
      <Header />
      <main>
        <ContentContainer>
          <LoginForm />
        </ContentContainer>
      </main>
    </LoginPage>
  );
};

export default Login;

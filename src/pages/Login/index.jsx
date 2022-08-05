import React from "react";
import Header from "../../components/Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <Header />
      <h3>Login</h3>
      <LoginForm button="Entrar" />
      <span>Ainda não possui uma conta?</span>
      <button>Cadastre-se</button>
    </div>
  );
};

export default Login;

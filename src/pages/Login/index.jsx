import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <Header />
      <h3>Login</h3>
      <LoginForm />
      <span>Ainda não possui uma conta?</span>
      <Link to="../signIn">
        <button>Cadastre-se</button>
      </Link>
    </div>
  );
};

export default Login;

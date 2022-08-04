import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/register/sigIn">Cadastro</Link>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Login;

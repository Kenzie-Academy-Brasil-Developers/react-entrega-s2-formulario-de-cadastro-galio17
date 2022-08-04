import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <Link to="/register/login">Login</Link>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default SignIn;

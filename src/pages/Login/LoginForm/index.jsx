import React from "react";

const LoginForm = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Senha</label>
      <input type="text" id="password" />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;

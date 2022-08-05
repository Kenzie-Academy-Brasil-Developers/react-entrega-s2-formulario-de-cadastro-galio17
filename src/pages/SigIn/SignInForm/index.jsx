import React from "react";
import Select from "../../../components/SelectForm";
import { moduleOptions } from "../../../components/SelectForm/options";

const SignInForm = () => {
  return (
    <form>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Senha</label>
      <input type="text" id="password" />
      <label htmlFor="confirmPassword">Confirmar Senha</label>
      <input type="text" id="confirmPassword" />
      <label htmlFor="bio">Bio</label>
      <input type="text" id="bio" />
      <label htmlFor="contact">Contato</label>
      <input type="text" id="contact" />
      <label htmlFor="course_module">Selecionar Módulo</label>
      <Select options={moduleOptions} type="text" id="course_module" />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default SignInForm;

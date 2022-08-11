import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput, loginSchema } from "../../../components/FormFields";
import { Link } from "react-router-dom";
import Button from "../../../styles/button";
import { FormContainer, ThemeContainer } from "../../../styles/containers";
import { UserContext } from "../../../providers/user";

const LoginForm = () => {
  function submitLogin(formData) {
    try {
      login(formData);
    } catch ({ response }) {
      console.error(response);
    }
  }

  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <ThemeContainer>
      <div className="container">
        <h3>Login</h3>
        <FormContainer onSubmit={handleSubmit(submitLogin)}>
          <FormInput
            id="email"
            type="text"
            placeholder="Digite seu email"
            label="Email"
            register={register}
            error={errors}
          />
          <FormInput
            id="password"
            type="password"
            placeholder="Digite sua senha"
            label="Senha"
            seeButton
            register={register}
            error={errors}
          />
          <Button size="big" theme="primary" type="submit">
            Entrar
          </Button>
        </FormContainer>
        <div className="signIn-container">
          <span>Ainda não possui uma conta?</span>
          <Link to="../signIn">
            <Button size="big" theme="secondary">
              Cadastre-se
            </Button>
          </Link>
        </div>
      </div>
    </ThemeContainer>
  );
};

export default LoginForm;

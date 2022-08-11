import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput, loginSchema } from "../../../components/FormFields";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../styles/button";
import { FormContainer, ThemeContainer } from "../../../styles/containers";
import api from "../../../services";

const LoginForm = () => {
  function submitLogin(formData) {
    api
      .post("sessions", formData)
      .then(({ data: { user, token } }) => {
        localStorage.clear();
        localStorage.setItem("@kenzie-hub:user", JSON.stringify(user));
        localStorage.setItem("@kenzie-hub:token", JSON.stringify(token));
        navigate("/home");
      })
      .catch((error) => console.error(error));
  }

  const navigate = useNavigate();

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

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FormInput,
  FormSelect,
  moduleOptions,
  SignInSchema,
} from "../../../components/FormFields";
import api from "../../../services";
import Button from "../../../styles/button";
import { FormContainer, ThemeContainer } from "../../../styles/containers";

const SignInForm = () => {
  function submitSignIn(formData) {
    api
      .post("users", formData)
      .then((response) => {
        api.post("sessions", formData).then(({ data: { user, token } }) => {
          localStorage.clear();
          localStorage.setItem("@kenzie-hub:user", JSON.stringify(user));
          localStorage.setItem("@kenzie-hub:token", JSON.stringify(token));
          navigate("/home");
        });
      })
      .catch((error) => console.error(error));
  }

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  return (
    <ThemeContainer>
      <div className="container">
        <h3>Crie sua conta</h3>
        <span>Rapido e grátis, vamos nessa</span>
        <FormContainer onSubmit={handleSubmit(submitSignIn)}>
          <FormInput
            type="text"
            id="name"
            placeholder="Digite seu nome"
            label="Nome"
            register={register}
            error={errors}
          />
          <FormInput
            type="text"
            id="email"
            placeholder="Digite seu email"
            label="Email"
            register={register}
            error={errors}
          />
          <FormInput
            type="password"
            id="password"
            placeholder="Digite sua senha"
            label="Senha"
            register={register}
            error={errors}
          />
          <FormInput
            type="password"
            id="confirmPassword"
            placeholder="Digite novamente sua senha"
            label="Confirmar Senha"
            register={register}
            error={errors}
          />
          <FormInput
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            label="Bio"
            register={register}
            error={errors}
          />
          <FormInput
            type="text"
            id="contact"
            placeholder="Opção de contato"
            label="Contato"
            register={register}
            error={errors}
          />
          <FormSelect
            id="course_module"
            placeholder="Módulo atual"
            label="Selecionar Módulo"
            options={moduleOptions}
            control={control}
            error={errors}
          />
          <Button size="big" theme="primary" type="submit">
            Cadastrar
          </Button>
        </FormContainer>
      </div>
    </ThemeContainer>
  );
};

export default SignInForm;

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
import api from "../../../components/services";

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

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(submitSignIn)}>
      <FormInput type="text" id="name" label="Nome" register={register} />
      <FormInput type="text" id="email" label="Email" register={register} />
      <FormInput
        type="password"
        id="password"
        label="Senha"
        register={register}
      />
      <FormInput
        type="password"
        id="confirmPassword"
        label="Confirmar Senha"
        register={register}
      />
      <FormInput type="text" id="bio" label="Bio" register={register} />
      <FormInput type="text" id="contact" label="Contato" register={register} />
      <FormSelect
        id="course_module"
        label="Selecionar Módulo"
        options={moduleOptions}
        control={control}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default SignInForm;

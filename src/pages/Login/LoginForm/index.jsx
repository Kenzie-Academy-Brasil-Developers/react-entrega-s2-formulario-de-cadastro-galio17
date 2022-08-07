import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput, loginSchema } from "../../../components/FormFields";
import api from "../../../components/services";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit(submitLogin)}>
      <FormInput
        id="email"
        type="text"
        label="Email"
        register={register}
        error={errors.email?.message}
      />
      <FormInput
        id="password"
        type="password"
        label="Senha"
        register={register}
        error={errors.password?.message}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput, loginSchema } from "../../../components/FormFields";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit((formData) => console.log(formData))}>
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

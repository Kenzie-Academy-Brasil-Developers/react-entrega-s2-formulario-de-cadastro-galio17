import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import {
  FormInput,
  FormSelect,
  moduleOptions,
  SignInSchema,
} from "../../../components/FormFields";

const SignInForm = () => {
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
    <form onSubmit={handleSubmit((formData) => console.log(formData))}>
      <FormInput type="text" id="name" label="Nome" register={register} />
      <FormInput type="text" id="email" label="Email" register={register} />
      <FormInput type="text" id="password" label="Senha" register={register} />
      <FormInput
        type="text"
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

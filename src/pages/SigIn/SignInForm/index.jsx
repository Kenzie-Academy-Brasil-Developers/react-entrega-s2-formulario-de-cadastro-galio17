import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FormInput,
  FormSelect,
  moduleOptions,
  SignInSchema,
} from "../../../components/FormFields";
import { UserContext } from "../../../providers/user";
import Button from "../../../styles/button";
import { FormContainer, ThemeContainer } from "../../../styles/containers";
import { toast } from "react-toastify";

const SignInForm = () => {
  function submitSignIn(formData) {
    async function handleSignIn() {
      const signInNotify = toast.loading("Um momento...");
      try {
        await signIn(formData);
        toast.update(signInNotify, {
          render: "Cadastro efetuado com sucesso",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      } catch ({ response: { data } }) {
        console.error(data);
        toast.update(signInNotify, {
          render: "Erro ao cadastrar",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
    }

    handleSignIn();
  }

  const { signIn } = useContext(UserContext);

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

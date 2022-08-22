import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FormInput,
  FormSelect,
  techSchema,
  techStatusOptions,
} from "../../../components/FormFields";
import Modal from "../../../components/Modal";
import { ITech, TechContext } from "../../../providers/tech";
import Button from "../../../styles/button";
import { FormContainer } from "../../../styles/containers";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IAxiosError } from "../../../services";

const CreateTech = () => {
  function submitNewTech(formData: ITech) {
    async function handleCreateTech() {
      const techNotify = toast.loading("Um momento...");
      try {
        await createTech(formData);

        toast.update(techNotify, {
          render: "Tecnologia criada com sucesso",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      } catch (error) {
        const axiosError = error as AxiosError<IAxiosError>;
        const message = axiosError.response?.data.message;

        console.log(error);

        toast.update(techNotify, {
          render:
            message ===
            "User Already have this technology created you can only update it"
              ? "Tecnologia já existente"
              : "Erro ao criar tecnologia",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
    }

    handleCreateTech();
  }

  const { createTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(techSchema()),
  });

  return (
    <Modal title="Cadastrar Tecnologia">
      <FormContainer onSubmit={handleSubmit(submitNewTech)}>
        <FormInput
          id="title"
          type="text"
          placeholder="Nome da tecnologia"
          label="Nome"
          register={register}
          error={errors}
        />
        <FormSelect
          id="status"
          placeholder="Status da tecnologia"
          label="Selecionar Status"
          options={techStatusOptions}
          control={control}
          error={errors}
        />
        <Button type="submit" size="big" theme="primary">
          Cadastrar Tecnologia
        </Button>
      </FormContainer>
    </Modal>
  );
};

export default CreateTech;

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  FormInput,
  FormSelect,
  techSchema,
  techStatusOptions,
} from "../../../components/FormFields";
import Modal from "../../../components/Modal";
import { TechContext } from "../../../providers/tech";
import Button from "../../../styles/button";
import { FormContainer } from "../../../styles/containers";

const EditTech = () => {
  function submitEditedTech(formData) {
    console.log(formData);
  }

  const { techs } = useContext(TechContext);
  const { id } = useParams();
  const tech = techs?.find(({ id: searchId }) => searchId === id);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(techSchema(tech?.status)),
  });

  useEffect(() => {
    if (tech) {
      setValue("title", tech.title);
      setValue("status", tech.status);
    }
  }, [tech, setValue]);

  return (
    <Modal title="Tecnologia Detalhes">
      <FormContainer onSubmit={handleSubmit(submitEditedTech)}>
        <FormInput
          id="title"
          type="text"
          placeholder="Editar nome"
          disabled
          label="Nome"
          register={register}
          error={errors}
        />
        <FormSelect
          id="status"
          placeholder="Editar status"
          label="Selecionar Status"
          options={techStatusOptions}
          control={control}
          error={errors}
        />
        <div className="buttonContainer">
          <Button type="submit" size="big" theme="primary">
            Salvar alterações
          </Button>
          <Button type="button" size="big" theme="secondary">
            Excluir
          </Button>
        </div>
      </FormContainer>
    </Modal>
  );
};

export default EditTech;

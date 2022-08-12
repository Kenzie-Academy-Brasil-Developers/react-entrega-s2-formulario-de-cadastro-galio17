import React from "react";
import { FormInput } from "../../../components/FormFields/FormInput";
import { FormSelect } from "../../../components/FormFields/FormSelect";
import { techStatusOptions } from "../../../components/FormFields/utils/options";
import Modal from "../../../components/Modal";
import Button from "../../../styles/button";
import { FormContainer } from "../../../styles/containers";

const CreateTech = () => {
  return (
    <Modal title="Cadastrar Tecnologia">
      <FormContainer>
        <FormInput
          id="title"
          type="text"
          placeholder="Nome da tecnologia"
          label="Nome"
        />
        <FormSelect
          id="status"
          placeholder="Status da tecnologia"
          label="Selecionar Status"
          options={techStatusOptions}
        />
        <Button type="submit" size="big" theme="primary">
          Cadastrar Tecnologia
        </Button>
      </FormContainer>
    </Modal>
  );
};

export default CreateTech;

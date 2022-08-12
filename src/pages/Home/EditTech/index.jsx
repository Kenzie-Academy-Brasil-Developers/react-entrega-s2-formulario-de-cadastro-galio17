import React from "react";
import { FormInput } from "../../../components/FormFields/FormInput";
import { FormSelect } from "../../../components/FormFields/FormSelect";
import { techStatusOptions } from "../../../components/FormFields/utils/options";
import Modal from "../../../components/Modal";
import Button from "../../../styles/button";
import { FormContainer } from "../../../styles/containers";

const EditTech = () => {
  return (
    <Modal title="Tecnologia Detalhes">
      <FormContainer>
        <FormInput
          id="title"
          type="text"
          placeholder="Editar nome"
          label="Nome"
        />
        <FormSelect
          id="status"
          placeholder="Editar status"
          label="Selecionar Status"
          options={techStatusOptions}
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

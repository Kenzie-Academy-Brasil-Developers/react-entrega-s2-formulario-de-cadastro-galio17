import React from "react";
import { ThemeContainer } from "../../styles/containers";

const Modal = ({ children, title }) => {
  return (
    <div>
      <ThemeContainer>
        <div>
          <h4>{title}</h4>
          <button>excluir</button>
        </div>
        {children}
      </ThemeContainer>
    </div>
  );
};

export default Modal;

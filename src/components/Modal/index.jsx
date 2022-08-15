import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContainer } from "../../styles/containers";

const Modal = ({ children, title }) => {
  const modalContent = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleOutClick(event) {
      if (!modalContent.current.contains(event.target)) {
        navigate("/", { replace: true });
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [navigate]);

  return (
    <div>
      <ThemeContainer ref={modalContent}>
        <div>
          <h4>{title}</h4>
          <Link to="/" replace>
            <button>excluir</button>
          </Link>
        </div>
        {children}
      </ThemeContainer>
    </div>
  );
};

export default Modal;

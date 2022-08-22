import React, { MouseEventHandler, ReactNode } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContainer } from "../../styles/containers";
import ModalContainer from "./styles";
import { FaTimes } from "react-icons/fa";

interface IModalProps {
  children: ReactNode;
  title: string;
}

const Modal = ({ children, title }: IModalProps) => {
  const modalContent = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleOutClick(event: MouseEvent) {
      if (!modalContent.current?.contains(event.target as Node)) {
        navigate("/", { replace: true });
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [navigate]);

  return (
    <ModalContainer>
      <ThemeContainer ref={modalContent}>
        <div>
          <h4>{title}</h4>
          <Link to="/" replace>
            <button>
              <FaTimes />
            </button>
          </Link>
        </div>
        {children}
      </ThemeContainer>
    </ModalContainer>
  );
};

export default Modal;

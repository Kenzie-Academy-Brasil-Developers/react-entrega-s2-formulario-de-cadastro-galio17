import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FaEye, FaEyeSlash, FaExclamationCircle } from "react-icons/fa";
import { IFormFieldProps } from "..";

interface IFormInputProps extends IFormFieldProps {
  type: string;
  disabled?: boolean;
  seeButton?: boolean;
  register: UseFormRegister<any>;
}

export const FormInput = ({
  id,
  type,
  placeholder,
  disabled,
  label,
  seeButton,
  register,
  error,
}: IFormInputProps) => {
  const [seePassword, setSeePassword] = useState(false);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="input-container">
        <input
          id={id}
          type={seePassword ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(id)}
        />
        {(seeButton || error[id]) && (
          <div className="form-details">
            {seeButton && (
              <button
                type="button"
                onClick={(e) => {
                  console.log(e);
                  setSeePassword(!seePassword);
                }}
              >
                {seePassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            )}
            {error[id] && (
              <div className="form-error">
                <FaExclamationCircle className="error__icon" />
                <span className="error__message">{error[id].message}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

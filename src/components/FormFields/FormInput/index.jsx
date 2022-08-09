import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaExclamationCircle } from "react-icons/fa";

export const FormInput = ({
  id,
  type,
  placeholder,
  label,
  seeButton,
  register,
  error,
}) => {
  const [seePassword, setSeePassword] = useState(false);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="input-container">
        <input
          id={id}
          type={seePassword ? "text" : type}
          placeholder={placeholder}
          {...register(id)}
        />
        {(seeButton || error[id]) && (
          <div className="form-details">
            {seeButton && (
              <button
                type="button"
                onClick={(e) => {
                  e.nativeEvent.composedPath()[2].firstChild.focus();
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

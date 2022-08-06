import React, { useState } from "react";

export const FormInput = ({ id, type, label, register, error }) => {
  const [seePassword, setSeePassword] = useState(false);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div>
        <input id={id} type={seePassword ? "text" : type} {...register(id)} />
        {(type === "password" || error) && (
          <div>
            {type === "password" && (
              <button
                type="button"
                onClick={(e) => {
                  e.nativeEvent.composedPath()[2].firstChild.focus();
                  setSeePassword(!seePassword);
                }}
              >
                ver
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

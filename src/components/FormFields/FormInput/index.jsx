import React, { useState } from "react";

export const FormInput = ({ id, type, label, seeButton, register, error }) => {
  const [seePassword, setSeePassword] = useState(false);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div>
        <input id={id} type={seePassword ? "text" : type} {...register(id)} />
        {(seeButton || error) && (
          <div>
            {seeButton && (
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

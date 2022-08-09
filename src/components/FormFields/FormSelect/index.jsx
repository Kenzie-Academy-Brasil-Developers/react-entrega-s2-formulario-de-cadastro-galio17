import React from "react";
import { Controller } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
import Select, { components } from "react-select";
import selectStyle from "./styles";

export const FormSelect = ({
  id,
  placeholder,
  options,
  label,
  error,
  control,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div>
        <Controller
          control={control}
          name="course_module"
          render={({ field: { value, onChange, ...field } }) => {
            return (
              <Select
                id={id}
                placeholder={placeholder}
                styles={selectStyle}
                options={options}
                {...field}
                onChange={(e) => onChange(e.value)}
                value={options.find((option) => option.value === value)}
                menuPlacement="auto"
                closeMenuOnScroll="true"
                components={{
                  IndicatorsContainer: ({ children, ...props }) => (
                    <>
                      {error[id] && (
                        <div className="form-details form-details--select">
                          <div className="form-error">
                            <FaExclamationCircle className="error__icon" />
                            <span className="error__message">
                              {error[id].message}
                            </span>
                          </div>
                        </div>
                      )}
                      <components.IndicatorsContainer {...props}>
                        {children}
                      </components.IndicatorsContainer>
                    </>
                  ),
                }}
              />
            );
          }}
        />
      </div>
    </>
  );
};

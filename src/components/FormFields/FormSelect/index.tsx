import React from "react";
import { Control, Controller, UseFormRegister } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
import Select, { components } from "react-select";
import { IFormFieldProps } from "..";
import { ISelectOption } from "../utils/options";
import selectStyle from "./styles";

interface IFormSelectProps extends IFormFieldProps {
  options: ISelectOption[];
  control: Control<any>;
}

export const FormSelect = ({
  id,
  placeholder,
  options,
  label,
  error,
  control,
}: IFormSelectProps) => {
  function onChangeOption(e: ISelectOption, onChange: (value: string) => void) {
    onChange(e.value);
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div>
        <Controller
          control={control}
          name={id}
          render={({ field: { value, onChange, ...field } }) => {
            return (
              <Select
                id={id}
                placeholder={placeholder}
                styles={selectStyle}
                options={options}
                {...field}
                onChange={(e) => onChangeOption(e as ISelectOption, onChange)}
                value={options.find((option) => option.value === value)}
                menuPlacement="auto"
                closeMenuOnScroll={true}
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

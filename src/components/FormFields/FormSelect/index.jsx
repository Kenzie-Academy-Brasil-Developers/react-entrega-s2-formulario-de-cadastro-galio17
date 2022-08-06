import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export const FormSelect = ({ id, options, label, error, control }) => {
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
                options={options}
                {...field}
                onChange={(e) => onChange(e.value)}
                value={options.find((option) => option.value === value)}
                menuPlacement="auto"
                closeMenuOnScroll="true"
              />
            );
          }}
        />
        {error && <div>{error}</div>}
      </div>
    </>
  );
};

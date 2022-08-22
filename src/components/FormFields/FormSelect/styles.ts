import { StylesConfig } from "react-select";
import { ISelectOption } from "../utils/options";

const selectStyle: StylesConfig<ISelectOption> = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "var(--grey-2)",
    boxShadow: "none",
    borderColor: isFocused ? "var(--grey-0)" : "transparent",
    color: isFocused ? "var(--grey-0)" : undefined,
    justifyContent: "flex-end",
  }),
  indicatorSeparator: () => ({}),
  placeholder: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "var(--grey-0)" : "var(--grey-1)",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "var(--grey-0)",
  }),
  menu: (styles) => ({ ...styles, backgroundColor: "var(--grey-2)" }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? "var(--grey-3)" : undefined,
  }),
};

export default selectStyle;

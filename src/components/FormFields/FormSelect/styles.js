const selectStyle = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "var(--grey-2)",
    boxShadow: "none",
    borderColor: isFocused ? "var(--grey-0)" : "transparent",
    color: isFocused && "var(--grey-0)",
    justifyContent: "flex-end",
  }),
  indicatorSeparator: () => null,
  placeholder: (styles, states) => ({
    ...styles,
    color: states.isFocused ? "var(--grey-0)" : "var(--grey-1)",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "var(--grey-0)",
  }),
  menu: (styles) => ({ ...styles, backgroundColor: "var(--grey-2)" }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused && "var(--grey-3)",
  }),
};

export default selectStyle;

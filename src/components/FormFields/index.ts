import {
  DeepMap,
  FieldValues,
  Message,
  MultipleFieldErrors,
  Ref,
} from "react-hook-form";

export { moduleOptions, techStatusOptions } from "./utils/options";
export { FormSelect } from "./FormSelect";
export { FormInput } from "./FormInput";
export { loginSchema, SignInSchema, techSchema } from "./utils/validation";

interface IErrors {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
}

type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
  TFieldValues,
  IErrors
>;

export interface IFormFieldProps {
  id: string;
  placeholder: string;
  label: string;
  error: FieldErrors;
}

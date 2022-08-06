import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Deve ser um email"),
  password: yup.string().required("Senha Obrigatória"),
});

export const SignInSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório"),
  password: yup
    .string()
    .required()
    .min(6, "Minímo 6 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[%$&!@#*.])[a-zA-Z\d%$&!@#*.]*$/,
      "Senha deve conter pelo menos 1 letra maiúscula e minúscula, número e carácter especial (%$&!@#*.)"
    ),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Deve ser igual a senha"),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Módulo obrigatório"),
});

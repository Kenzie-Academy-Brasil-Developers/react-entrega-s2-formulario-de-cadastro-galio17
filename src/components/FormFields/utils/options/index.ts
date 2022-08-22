export interface ISelectOption {
  value: string;
  label: string;
}

export const moduleOptions: ISelectOption[] = [
  {
    value: "Primeiro módulo (Introdução ao Frontend)",
    label: "Primeiro módulo (Introdução ao Frontend)",
  },
  {
    value: "Segundo módulo (Frontend Avançado)",
    label: "Segundo módulo (Frontend Avançado)",
  },
  {
    value: "Terceiro módulo (Introdução ao Backend)",
    label: "Terceiro módulo (Introdução ao Backend)",
  },
  {
    value: "Quarto módulo (Backend Avançado)",
    label: "Quarto módulo (Backend Avançado)",
  },
];

export const techStatusOptions: ISelectOption[] = [
  {
    value: "Iniciante",
    label: "Iniciante",
  },
  {
    value: "Intermediário",
    label: "Intermediário",
  },
  {
    value: "Avançado",
    label: "Avançado",
  },
];

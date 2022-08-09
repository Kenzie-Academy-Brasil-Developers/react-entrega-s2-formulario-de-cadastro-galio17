import styled, { css } from "styled-components";

const Button = styled.button`
  color: var(--grey-0);
  border-radius: 4px;

  ${({ size }) => {
    switch (size) {
      case "big":
        return css`
          padding: 10px 22px;
          font-weight: 500;
        `;
      case "small":
        return css`
          padding: 11px;
        `;

      default:
        return css`
          padding: 10px 16px;
          font: var(--headline);
          font-weight: 600;
        `;
    }
  }}

  ${({ theme }) => {
    switch (theme) {
      case "primary":
        return css`
          background-color: var(--color-primary);

          &:focus,
          &:hover {
            background-color: var(--color-primary-focus);
          }

          &:disabled {
            background-color: var(--color-primary-negative);
          }
        `;
      case "secondary":
        return css`
          background-color: var(--grey-1);

          &:focus,
          &:hover {
            background-color: var(--grey-2);
          }
        `;

      default:
        return css`
          background-color: var(--grey-3);

          &:focus,
          &:hover {
            background-color: var(--grey-2);
          }
        `;
    }
  }}
`;

export default Button;

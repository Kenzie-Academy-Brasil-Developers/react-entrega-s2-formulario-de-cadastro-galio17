import styled from "styled-components";

export const ThemeContainer = styled.div`
  background-color: var(--grey-3);
  border-radius: 4px;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  padding: 13px;
  width: 100%;
  max-width: 48.75rem;
`;

export const FormContainer = styled.form`
  width: 100%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  label {
    font: var(--headline);
  }

  .input-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .form-details {
    margin-right: 7px;
    position: absolute;
    display: flex;
    align-items: center;
    gap: 7px;

    button {
      color: var(--grey-1);
    }
  }

  .form-details--select {
    margin: 36px;
  }

  .form-error {
    display: flex;
    align-items: center;
    color: var(--negative);

    span {
      background-color: var(--negative);
      color: var(--grey-0);
      border-radius: 4px;
      min-width: 3.75rem;
      max-width: 5rem;
      height: max-content;
      padding: 4.5px;
      display: none;
      position: absolute;
      right: 0px;
      top: 22px;
    }

    &:hover {
      span {
        display: initial;
      }

      &::after {
        content: "";
        border: 6px solid transparent;
        border-bottom-color: var(--negative);
        position: absolute;
        right: 2px;
        top: 11px;
      }
    }
  }

  input {
    background-color: var(--grey-2);
    border-radius: 4px;
    border: 1px solid transparent;
    width: 100%;
    padding: 10px 16px;
    padding-right: 30px;

    &:focus {
      outline: none;
      border-color: var(--grey-0);

      &::placeholder {
        color: var(--grey-0);
      }
    }
  }
`;

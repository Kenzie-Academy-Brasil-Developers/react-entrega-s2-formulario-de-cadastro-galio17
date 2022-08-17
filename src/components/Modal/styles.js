import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: var(--shadow-background);
  backdrop-filter: blur(3px);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;

  > div {
    width: 90%;
    max-width: 25rem;

    > div {
      padding: 12px 20px;
      background-color: var(--grey-2);
      border-radius: 4px 4px 0 0;
      display: flex;
      justify-content: space-between;
    }

    form {
      padding-inline: 20px;

      .buttonContainer {
        button {
          width: initial;
        }

        @media (min-width: 365px) {
          flex-direction: row;
          justify-content: space-between;

          button:first-child {
            flex: 1;
          }
        }
      }
    }
  }
`;

export default ModalContainer;

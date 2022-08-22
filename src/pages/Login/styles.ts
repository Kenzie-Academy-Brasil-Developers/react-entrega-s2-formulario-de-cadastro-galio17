import styled from "styled-components";

const LoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main,
  header {
    width: calc(374px + 44px + 26px);
    max-width: 100%;
  }

  main,
  header > div {
    display: flex;
    justify-content: center;
  }

  main {
    .container {
      padding: 42px 22px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .signIn-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;

        a,
        a button {
          width: 100%;
        }
      }
    }
  }
`;

export default LoginPage;

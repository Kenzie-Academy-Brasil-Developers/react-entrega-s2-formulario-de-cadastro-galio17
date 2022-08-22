import styled from "styled-components";

const SignInPage = styled.div`
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

  main {
    .container {
      padding: 42px 22px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default SignInPage;

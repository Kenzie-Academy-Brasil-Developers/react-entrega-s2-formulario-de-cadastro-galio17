import styled from "styled-components";

const HomePage = styled.div`
  section {
    padding: 10px 0;
    border: solid var(--grey-3);
    border-width: 1px 0px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;

      @media screen and (min-width: 400px) {
        flex-direction: row;
      }
    }
  }

  main {
    padding: 10px 0;

    div {
      display: flex;
      flex-direction: column;
      gap: 23px;
    }

    strong {
      font: var(--title-1);
    }
  }
`;

export default HomePage;

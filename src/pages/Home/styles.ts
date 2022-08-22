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

    > div {
      display: flex;
      flex-direction: column;
      gap: 23px;

      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .techs-container {
        padding: 23px 26px;

        div {
          flex-direction: column;
          gap: 10px;
          text-align: center;

          a {
            width: 100%;
            flex: 1;

            button {
              width: 100%;
            }
          }

          @media (min-width: 400px) {
            flex-direction: row;
            text-align: left;

            a {
              max-width: max-content;
            }
          }
        }
      }
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;

      li {
        background-color: var(--grey-4);
        border-radius: 4px;

        a {
          padding: 12px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
`;

export default HomePage;

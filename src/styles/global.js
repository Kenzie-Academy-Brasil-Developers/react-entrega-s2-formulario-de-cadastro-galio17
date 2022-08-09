import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  :root {
    /* Collors Palette */
    /* Primary Palette */
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    /* Grey Palette */
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;

    /* Feedback Palette */
    --sucess: #3FE864;
    --negative: #E83F5B;

    /* Other Palette */
    --default-background: #111111;
    --default-color: #EFEFEF;

    /* Typograph */
    --font-inter: 'Inter', sans-serif;
    --title-1: 700 1.125rem var(--font-inter);
    --title-2: 600 1rem var(--font-inter);
    --title-3: 700 0.875rem var(--font-inter);
    --headline: 400 0.75rem var(--font-inter);
    font-family: var(--font-inter);
  }

  * {
    background-color: transparent;
    color: inherit;
    margin: 0;
    border: none;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }
  
  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: var(--grey-4);
    color: var(--default-color);
  }

  h1 {
    color: var(--color-primary);
    font-weight: 700;
    font-size: 1.25rem;
  }

  h2, h3 {
    font: var(--title-1);
  }

  span {
    font: var(--headline);
    color: var(--grey-1 );
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 7px;
    position: absolute;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--grey-2);
    border-radius: 8px;
    border: 2px solid transparent;
  }
`;

export default Global;

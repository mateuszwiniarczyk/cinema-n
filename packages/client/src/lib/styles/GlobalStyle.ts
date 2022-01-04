import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
  }

  a, button {
    font-family: 'Open Sans', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

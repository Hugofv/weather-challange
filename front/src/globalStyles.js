import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(0,32,36);
    background: linear-gradient(90deg, rgba(0,32,36,1) 0%, rgba(9,108,121,1) 35%, rgba(0,212,255,1) 100%);
    margin: 0;
    height: 100vh;
    width: 100vw;
    font-family: 'Open Sans', sans-serif;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default GlobalStyle;

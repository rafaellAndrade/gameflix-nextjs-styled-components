import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Arial', Times, serif;
    color: white;
    background: rgb(0,0,1);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(32,4,8,1) 95%, rgba(69,8,17,1) 100%);
  }

  html, body {
      font-family: Arial, Helvetica, sans-serif;
  }

`;

export default GlobalStyle;
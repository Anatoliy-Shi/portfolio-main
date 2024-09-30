import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    margin: 0;
    font-family:  Roboto, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 425px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    cursor: pointer;
  }
`
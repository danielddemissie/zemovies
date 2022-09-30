import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'ubuntu','Helvetica Neue', Helvetica, Arial, sans-serif;
    background: linear-gradient(to right top, #051937, #001b35, #001d32, #001e2e, #011f2a);

  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  ul { 
    list-style: none;
  }

  a { 
    text-decoration: none;
  }


  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  .section_header {
    margin: 3rem auto;
    color: white;
    font-size: 1.5rem;
  }

`;

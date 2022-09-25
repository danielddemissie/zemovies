import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'ubuntu','Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #000;
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
    display: flex;
    gap: 1rem;
  }

  a { 
    text-decoration: none;
  }


  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;

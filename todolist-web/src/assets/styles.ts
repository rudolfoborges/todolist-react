import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312e38;
    color: #f4ede8;
    font-family: 'Roboto', sans-serif;
  }
`;

import styled, { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: ${theme.font.family.openSans};
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${theme.font.family.Montserrat};
}

`;

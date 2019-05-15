import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Alegreya:400,700i');
*,*::after,*::before{
  box-sizing:border-box;
}
  html{
    font-size:62.5%;
  }
  body {
   font-size:1.6rem;
   font-family:Alegreya,sans-serif;
   font-weight:700;
  }`;
export default GlobalStyle;

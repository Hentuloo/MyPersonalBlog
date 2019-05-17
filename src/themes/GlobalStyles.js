import { createGlobalStyle } from 'styled-components';

import 'asset/fontello/css/fontello.css';

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
   background-color: hsl(30, 6%, 93%);
   margin:0px;
  }
    @media (min-width: 768px) {
    html {
   font-size:80.5%;
  }
  }
  
  `;
export default GlobalStyle;

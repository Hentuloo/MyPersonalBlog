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
 .focus-only {
   color:white;
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap; /* 1 */
}
.focus-only:active,
.focus-only:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
  white-space: inherit;
}

  `;
export default GlobalStyle;

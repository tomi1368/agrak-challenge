import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  

 
  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    color: ${(props) => props.theme.colors.Black};
    text-align: left;
    background-color: ${(props) => props.theme.colors.LightGray};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

   ::-webkit-scrollbar {
     width: 10px;
    height: 6px;
   }
   ::-webkit-scrollbar-track {
     border-radius: 10px;
     background: rgba(0,0,0,0.1);
   }
   ::-webkit-scrollbar-thumb{
     border-radius: 10px;
     background: rgba(0,0,0,0.2);
   }
   ::-webkit-scrollbar-thumb:hover{
   	background: rgba(0,0,0,0.4);
 }
   ::-webkit-scrollbar-thumb:active{
   	background: rgba(0,0,0,.9);
   }
  p,
h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin:0;
    padding:0;
  }


  a,
  p,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  sup,
  sub,
  span,
  div,
   {
   font-family: 'Lato', sans-serif;
  }
  
  `;

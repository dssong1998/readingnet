import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    input{
        all:unset;
    }
   body {
        font-size: 14px;
        font-family: 'Nanum Gothic', 'Do Hyeon', 'Open Sans', sans-serif;
    }
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        font-family: 'Satoshi', sans-serif;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        background-color: #f5f5f5;
    }
    
    #slide-root {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        align-items: center;
    }
`;

export default GlobalStyle;

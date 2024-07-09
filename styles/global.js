import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Work Sans','Josefin Sans', sans-serif;
        font-size: large;
        font-weight: 500;
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    html{
        overflow: ${(props) => props.theme.overflow};
    }

    body{
        color: ${(props) => props.theme.colors.text};
        margin: 0;
        background-color: #fff;
        overflow: ${(props) => props.theme.overflow};
        background-color: ${(props) => props.theme.colors.bg};


    }
    img{
        max-width: 100%;
    }
    li{
        list-style-type: none;
    }
    ul{
        list-style-type: disc;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0;
    }
    a {
        color: #1f1f24;
        text-decoration: none; 
    }
    button {
        pointer-events: auto;
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    span{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
    }
    h2 {
        display: block;
        font-size: 1.5em;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    h3{
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    p {
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    }

    .react-p5{
        position:fixed;
    }

    .grain-texture {
        pointer-events: none;
        filter: grayscale(1);
        opacity: 78%;
        position: fixed;
        z-index: -99;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-image: url("/img/texture.jpg");
        background-repeat: repeat repeat;
        background-size: 128px 128px;
        mix-blend-mode: overlay;
        scale: 2;
    }

    .blinds rect{   
        cursor: pointer;
        shape-rendering: crispEdges;
        fill: url(#MyGradient);
    }
    .blinds .gradiant{
        position: "fixed";
        top: 0;
        left: 0;
        width: "100vw";
        height: "100vh";
        z-index: "1";
        opacity: "0.4";
    }
`;

export default GlobalStyles;

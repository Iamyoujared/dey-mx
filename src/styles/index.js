// Fonts
import KanitRegular from "../assets/fonts/Kanit-Light.ttf";
import KanitMedium from "../assets/fonts/Kanit-Medium.ttf";
import KanitSemiBold from "../assets/fonts/Kanit-SemiBold.ttf";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin:0;
    padding:0;
  }
  @font-face {
    font-family: KanitRegular;
    src: url('${KanitRegular}') format('opentype');
  }
  @font-face {
    font-family: KanitMedium;
    src: url('${KanitMedium}') format('opentype');
  }
  @font-face { 
    font-family: KanitSemiBold;
    src: url('${KanitSemiBold}') format('opentype');
  }
  body {
    overflow-x: hidden;
  }
  .slick-dots li button:before {
    font-size: 15px;
    color: #fff;
  }
  .slick-dots li.slick-active button:before {
    color: #fff;
  }
  @media screen and (max-width: 1024px) {
    .jmxOom div {
      height: 140px; 
    }
  }
  @media screen and (max-width: 480px) {
    .jmxOom div {
      height: 230px; 
    }
  }
`;

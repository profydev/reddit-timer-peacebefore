import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/** Montserrat Regular **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("../fonts/Montserrat-Regular.woff2") format("woff2"),
 url("../fonts/Montserrat-Regular.woff") format("woff");
  }

  /** Montserrat Medium **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: url("../fonts/Montserrat-Medium.woff2") format("woff2"),
 url("../fonts/Montserrat-Medium.woff") format("woff");
  }

  /** Montserrat SemiBold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
    src: url("../fonts/Montserrat-SemiBold.woff2") format("woff2"),
 url("../fonts/Montserrat-SemiBold.woff") format("woff");
  }

  /** Montserrat Bold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
    src: url("../fonts/Montserrat-Bold.woff2") format("woff2"),
 url("../fonts/Montserrat-Bold.woff") format("woff");
  }

  /** Bitter Regular **/
  @font-face {
    font-family: "Bitter";
    src: url("../fonts/Bitter-Regular.woff2") format("woff2"),
 url("../fonts/Bitter-Regular.woff") format("woff");
  }

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.l};
  line-height: ${(props) => props.theme.lineHeights.default};
  letter-spacing: 0.07px;
  color: ${(props) => props.theme.colors.brand.text};
}
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
a {
  color: #636363;
}

h1 {
  font-family: 'Bitter', serif;
  font-size: 38px;
  font-weight: 300;
  text-align: center;
}

h2 {
  font-family: 'Bitter', serif;
  font-weight: 300;
  font-size: 24px;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: #93918F;
}

button {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #FDB755;
  border-radius: 4px;
  border: none;
  padding: 10px;
}
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
p {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-align: center;
  color: #93918F;
}

a {
  font-size: 14px;
  color: #636363;
}

h1 {
  font-family: 'Bitter', serif;
  font-size: 38px;
  text-align: center;
}

h2 {
  font-family: 'Bitter', serif;
  font-size: 24px;
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

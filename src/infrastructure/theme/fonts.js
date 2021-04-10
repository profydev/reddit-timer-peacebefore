import { createGlobalStyle } from 'styled-components';

import Bitter from '../../../assets/fonts/Bitter-Regular.ttf';
import Montserrat from '../../../assets/fonts/Montserrat-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Bitter';
    src: local ('Bitter'), url(${Bitter}) format('ttf');
  };
  @font-face {
    font-family: 'Montserrat';
    src: local ('Montserrat'), url(${Montserrat}), format('ttf');
  }
`;

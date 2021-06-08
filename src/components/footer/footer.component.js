import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './footer.styles';

const Footer = () => (
  <S.Container>
    <S.ProfyLink as="a" href="https://profy.dev/employers">
      profy.dev
    </S.ProfyLink>
    <NavLink to="/">
      <S.Logo />
    </NavLink>
    <S.TermsLink to="/terms">
      Terms & Privacy
    </S.TermsLink>
  </S.Container>
);

export default Footer;

import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './header.styles';

const Header = () => (
  <S.Container>
    <NavLink to="/">
      <S.Logo />
    </NavLink>
    <nav>
      <S.Link to="/search/javascript">Search</S.Link>
      <S.Link to="#how-it-works">How it works</S.Link>
      <S.Link to="#about">About</S.Link>
    </nav>
  </S.Container>
);

export default Header;

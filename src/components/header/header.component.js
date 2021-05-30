import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/full-logo.svg';
import {
  NavContainer, LogoContainer, Links, LinkStyle,
} from './header.styles';

const Header = () => (
  <header>
    <NavContainer>
      <LogoContainer>
        <NavLink to="/"><Logo /></NavLink>
      </LogoContainer>
      <Links>
        <LinkStyle to="/search/javascript">Search</LinkStyle>
        <LinkStyle to="#how-it-works">How it works</LinkStyle>
        <LinkStyle to="#about">About</LinkStyle>
      </Links>
    </NavContainer>
  </header>
);

export default Header;

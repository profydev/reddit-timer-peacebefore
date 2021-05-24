import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavContainer, LogoContainer, Links, LinkStyle,
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/full-logo.svg';

const Header = () => (
  <header>
    <NavContainer>
      <LogoContainer>
        <NavLink to="/"><Logo /></NavLink>
      </LogoContainer>
      <Links>
        <LinkStyle to="/search/javascript">Search</LinkStyle>
        <LinkStyle to="#how-it-works">How It Works</LinkStyle>
        <LinkStyle to="#about">About</LinkStyle>
      </Links>
    </NavContainer>
  </header>
);

export default Header;

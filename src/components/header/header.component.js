import React from 'react';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
import { ReactComponent as Logo } from '../../assets/full-logo.svg';
import {
  NavContainer, LogoContainer, Links, LinkStyle,
} from './header.styles';
=======
import {
  NavContainer, LogoContainer, Links, LinkStyle,
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/full-logo.svg';
>>>>>>> 2553374f6fa1d627501b1dff25d3a3a11381881f

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

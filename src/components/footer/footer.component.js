import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Links, LinkStyle, LogoContainer, LogoStyle, NavContainer,
} from './footer.styles';

const Footer = () => (
  <footer>
    <NavContainer>
      <Links>
        <LinkStyle to="https://profy.dev/employers">profy.dev</LinkStyle>
      </Links>
      <LogoContainer>
        <NavLink to="/"><LogoStyle /></NavLink>
      </LogoContainer>
      <Links>
        <LinkStyle to="/terms">Terms & Privacy</LinkStyle>
      </Links>
    </NavContainer>
  </footer>
);

export default Footer;

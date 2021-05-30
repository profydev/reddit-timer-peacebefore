import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Links, LinkStyle, LogoContainer, LogoStyle, NavContainer, ProfyLink,
} from './footer.styles';

const Footer = () => (
  <footer>
    <NavContainer>
      <Links>
        <ProfyLink href="https://profy.dev/employers">profy.dev</ProfyLink>
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

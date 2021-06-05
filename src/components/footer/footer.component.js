import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Links, LinkStyle, LogoStyle, NavContainer, ProfyLink,
} from './footer.styles';

const Footer = () => (
  <footer>
    <NavContainer>
      <ProfyLink href="https://profy.dev/employers">profy.dev</ProfyLink>
      <NavLink to="/"><LogoStyle /></NavLink>
      <Links>
        <LinkStyle to="/terms">Terms & Privacy</LinkStyle>
      </Links>
    </NavContainer>
  </footer>
);

export default Footer;

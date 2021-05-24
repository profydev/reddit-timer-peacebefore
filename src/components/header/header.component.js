import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/full-logo.svg';

const NavContainer = styled.nav`
  height: 100px;
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: block;
`;

const Links = styled.div`
  font-family: 'Montserrat';
  font-size: 16px;
`;

const LinkStyle = styled(NavLink)`
  padding-left: 26px;
  text-decoration: none;
  align-self: center;
`;

const Header = () => (
  <header>
    <NavContainer>
      <LogoContainer>
        <NavLink to="/"><Logo /></NavLink>
      </LogoContainer>
      <Links>
        <LinkStyle to="/search/javascript">Search</LinkStyle>
        <LinkStyle to="#works">How It Works</LinkStyle>
        <LinkStyle to="#about">About</LinkStyle>
      </Links>
    </NavContainer>
  </header>
);

export default Header;

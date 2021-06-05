import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const NavContainer = styled.nav`
  height: 125px;
  width: 100%;
  max-width: 980px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoStyle = styled(Logo)`
  display: block;
`;

export const Links = styled.div`
  font-family: 'Montserrat';
  font-size: 0.875em;
  flex: 1;
  text-align: right;
`;

export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  align-self: center;
`;

export const ProfyLink = styled.a`
  font-family: 'Montserrat';
  font-size: 14px;
  text-decoration: none;
  flex: 1;
  text-align: left;
`;

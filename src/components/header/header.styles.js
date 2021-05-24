import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  height: 100px;
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: block;
`;

export const Links = styled.div`
  font-family: 'Montserrat';
  font-size: 16px;
`;

export const LinkStyle = styled(NavLink)`
  padding-left: 26px;
  text-decoration: none;
  align-self: center;
`;

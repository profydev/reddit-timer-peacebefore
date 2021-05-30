import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 55px;
`;

export const LogoContainer = styled.div`
  display: block;
  margin-left: 80px;
  margin-top: 33px;
`;

export const Links = styled.div`
  font-family: 'Montserrat';
  font-size: 15.5px;
  font-size-adjust: 15.5px;
  margin-right: 80px;
  margin-top: 30px;
`;

export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  align-self: center;
  padding-left: 26px;
  padding-right: 1px;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const NavContainer = styled.nav`
  height: 100px;
  margin-left: 250px;
  margin-right: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 0px;
  padding-left: 7px;
`;

export const LogoStyle = styled(Logo)`
  display: block;
`;

export const Links = styled.div`
  font-family: 'Montserrat';
  font-size: 14px;
`;

export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  align-self: center;
`;

import styled from 'styled-components';
import { NavLink as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from '../../assets/full-logo.svg';

export const Container = styled.header`
  width: 100%;
  height: ${(props) => props.theme.sizes.headerHeight};
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(UnstyledLogo)`
  display: block;
  margin-top: 8px;
`;

export const Link = styled(UnstyledLink)`
  margin-left: 26px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.brand.secondary}
`;

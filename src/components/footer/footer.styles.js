import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from '../../assets/logo.svg';

export const Container = styled.footer`
  width: 100%;
  max-width: 980px;
  height: ${(props) => props.theme.sizes.footerHeight};
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

const linkStyles = css`
  text-decoration: none;
  color: ${(props) => props.theme.colors.brand.secondary};
  font-size: ${(props) => props.theme.fontSizes.s};
  flex: 1;
`;

export const ProfyLink = styled(NavLink)`
  ${linkStyles}
  text-align: left;
`;

export const TermsLink = styled(NavLink)`
  ${linkStyles}
  text-align: right;
`;

export const Logo = styled(UnstyledLogo)`
  display: block;
`;

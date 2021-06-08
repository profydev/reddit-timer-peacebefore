import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ContentContainer = styled.main`
  min-height: ${(props) => `calc(100vh - ${props.theme.sizes.containerHeights.header} - ${props.theme.sizes.containerHeights.footer})`};
`;

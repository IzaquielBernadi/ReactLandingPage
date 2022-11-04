import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, background }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.space.sizes.large};
  `}
`;

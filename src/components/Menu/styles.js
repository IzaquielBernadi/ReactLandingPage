import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.light};

    ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    &${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lowerThanMedium} {
      height: 100vh;

      ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      &${Heading} {
        padding-bottom: ${theme.space.sizes.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lowerThanMedium} {
      display: block;
      text-align: center;
      padding: ${theme.space.sizes.xxlarge} 0;
    }
  `}
`;

export const Button = styled.div`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.light};
    border: 1px solid red;
  `}

  > svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

import styled, { css } from 'styled-components';

const titleSizes = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lowerThenMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const isUppercase = (transform) => css`
  text-transform: ${transform ? 'uppercase' : 'none'};
`;

const setTextColor = (color, theme) => css`
  color: ${color ? theme.colors.light : theme.colors.primaryColor};
`;

export const Title = styled.h1`
  ${({ theme, fontColor, size, uppercase }) => css`
    ${setTextColor(fontColor, theme)};
    ${isUppercase(uppercase)};
    ${titleSizes[size](theme)};
  `}
`;

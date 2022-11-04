import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { rerenderTheme } from '../../styles/rerenderTheme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>The text</Heading>);
    const heading = screen.getByRole('heading', { name: 'The text' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading fontColor>The text</Heading>);
    const heading = screen.getByRole('heading', { name: 'The text' });
    expect(heading).toHaveStyle({
      color: theme.colors.light,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">small</Heading>);
    const small = screen.getByRole('heading', { name: 'small' });
    expect(small).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(rerenderTheme(<Heading size="medium">medium</Heading>));

    const medium = screen.getByRole('heading', { name: 'medium' });
    expect(medium).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(rerenderTheme(<Heading size="big">big</Heading>));

    const big = screen.getByRole('heading', { name: 'big' });
    expect(big).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(rerenderTheme(<Heading size="huge">huge</Heading>));

    const huge = screen.getByRole('heading', { name: 'huge' });
    expect(huge).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  // it('should render correctly font-size when screen less than 768px', () => {
  //   const { rerender } = renderTheme(<Heading size="huge">The</Heading>);
  //   const heading = screen.getByRole('heading', { name: 'The' });
  //   expect(screen.getByRole('heading', { name: 'The' })).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
  //     media: theme.media.lowerThanMedium,
  //   });
  // });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>The</Heading>);
    const heading = screen.getByRole('heading', { name: 'The' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">The</Heading>);
    const heading = screen.getByRole('heading', { name: 'The' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLocaleLowerCase()).toBe('h6');
  });
});

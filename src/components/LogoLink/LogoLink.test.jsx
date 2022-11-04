import { render, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="link" />);
    const heading = screen.getByRole('heading', { name: 'link' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render a image logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello" image="assets/images/logo.svg" />);
    const heading = screen.getByRole('heading', { name: 'Hello' });
    expect(heading.firstChild.firstChild).toHaveAttribute('src', 'assets/images/logo.svg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Hello" image="image.jpg" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

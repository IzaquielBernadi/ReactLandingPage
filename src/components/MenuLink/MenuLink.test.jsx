import { renderTheme } from '../../styles/renderTheme';
import { screen } from '@testing-library/react';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(
      <MenuLink link="https://google.com" newTab>
        Children
      </MenuLink>,
    );
    const linkElement = screen.getByRole('link', { name: 'Children' });
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://google.com" newTab>
        Children
      </MenuLink>,
    );
    const linkElement = screen.getByRole('link', { name: 'Children' });
    expect(linkElement).toHaveAttribute('target', '_blank');
  });
});

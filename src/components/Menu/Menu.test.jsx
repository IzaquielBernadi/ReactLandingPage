import { render, screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu>Children</Menu>);
    expect(screen.getByRole('heading', { name: 'Children' })).toBeInTheDocument();
  });
});

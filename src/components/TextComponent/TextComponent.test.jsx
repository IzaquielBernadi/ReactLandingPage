import { renderTheme } from '../../styles/renderTheme';
import { screen } from '@testing-library/react';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const paragraph = screen.getByText('Children');
    expect(paragraph).toBeInTheDocument();
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

/**
 * Tambem e possivel utilizar o toMatchInlineSnapshot...
 */

import { render, screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<SectionContainer />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading', { name: 'Children' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

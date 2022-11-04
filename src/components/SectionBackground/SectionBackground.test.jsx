import { render, screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<SectionBackground />', () => {
  it('should render with background Dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading', { name: 'Children' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with background Light', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading', { name: 'Children' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

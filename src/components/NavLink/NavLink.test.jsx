import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import mock from './Mock';

describe('<NavLinks />', () => {
  it('should render', () => {
    renderTheme(<NavLinks links={mock} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/Link/i)).toHaveLength(0);
  });

  // it('should render links', () => {
  //   renderTheme(<NavLinks links={mock} />);
  //   expect(screen.getByText(/Link 9/i).parentElement).toHaveStyleRule('flex-flow', 'column wrap', {
  //     media: theme.media.lowerThanMedium,
  //   });
  // });
});

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const rerenderTheme = (children) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

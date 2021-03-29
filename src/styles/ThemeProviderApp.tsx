import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from './global';

export type ThemeProvider = {
  children: React.ReactElement;
};

const ThemeProviderApp = ({ children }: ThemeProvider) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderApp;

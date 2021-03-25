import React from 'react';
import render, { ReactTestRenderer } from 'react-test-renderer';
import ThemeProvider from '~/styles/ThemeProviderApp';

export const renderWithTheme = (
  children: React.ReactElement,
): ReactTestRenderer =>
  render.create(<ThemeProvider>{children}</ThemeProvider>);

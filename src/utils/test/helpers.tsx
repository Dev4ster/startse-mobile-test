import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';

import ThemeProvider from '~/styles/ThemeProviderApp';

export const renderWithTheme = (children: React.ReactElement): RenderAPI =>
  render(<ThemeProvider>{children}</ThemeProvider>);

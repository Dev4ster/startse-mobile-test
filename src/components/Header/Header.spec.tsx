import React from 'react';
import Header from './Header';
import { renderWithTheme } from '~/utils/test/helpers';

describe('<Header />', () => {
  test('should be render', () => {
    renderWithTheme(<Header />);
  });
});

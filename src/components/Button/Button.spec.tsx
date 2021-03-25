import React from 'react';
import Button from './Button';
import { renderWithTheme } from '~/utils/test/helpers';

describe('<Button />', () => {
  test('should be render', () => {
    renderWithTheme(<Button />);
  });
});

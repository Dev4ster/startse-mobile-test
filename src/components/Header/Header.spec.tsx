import React from 'react';

import Header from './Header';
import { renderWithTheme } from '~/utils/test/helpers';

describe('<EmptyState />', () => {
  it('should be match snapshot', () => {
    const { toJSON } = renderWithTheme(<Header />);
    expect(toJSON()).toMatchSnapshot();
  });
});

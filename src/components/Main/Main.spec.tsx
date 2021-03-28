import React from 'react';
import { Text } from 'react-native';

import Main from './Main';
import { renderWithTheme } from '~/utils/test/helpers';
import global from '~/styles/global';

describe('<Button />', () => {
  it('should be render', () => {
    renderWithTheme(
      <Main>
        <Text>teste</Text>
      </Main>,
    );
  });

  it('should be render correctly color', () => {
    const { getByTestId } = renderWithTheme(
      <Main>
        <Text>teste</Text>
      </Main>,
    );

    expect(getByTestId('main').props.style[0]).toMatchObject({
      backgroundColor: global.colors.primary,
    });
  });
});

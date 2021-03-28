import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import EmptyState from './EmptyState';
import { renderWithTheme } from '~/utils/test/helpers';

describe('<EmptyState />', () => {
  it('should be match snapshot', () => {
    const { toJSON } = renderWithTheme(
      <EmptyState title="Error na aplicação" />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be render correctly', () => {
    const { getByText } = renderWithTheme(
      <EmptyState title="Error na aplicação" />,
    );
    expect(getByText(/Error na aplicação/)).toBeTruthy();
  });

  it('should be render button to retry', () => {
    const { getByText } = renderWithTheme(
      <EmptyState title="Error na aplicação" retry={() => true} />,
    );

    expect(getByText(/Tentar novamente/)).toBeTruthy();
  });

  it('should be call retry onPress button', () => {
    const mockFn = jest.fn();

    const { getByTestId } = renderWithTheme(
      <EmptyState title="Error na aplicação" retry={mockFn} />,
    );

    fireEvent(getByTestId('button'), 'onPress', null);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should be render message if prop is passed', () => {
    const { getByText } = renderWithTheme(
      <EmptyState
        title="Error na aplicação"
        message="mensagem padrão de erro"
      />,
    );

    expect(getByText(/mensagem padrão de erro/)).toBeTruthy();
  });
});

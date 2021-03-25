import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import Button from './Button';

import { renderWithTheme } from '~/utils/test/helpers';

describe('<Button />', () => {
  it('should be render', () => {
    renderWithTheme(<Button>teste</Button>);
  });

  it('should be render text button', () => {
    const { getByText } = renderWithTheme(<Button>teste</Button>);
    const label = getByText('teste');
    expect(label).not.toBeNull();
  });

  it('should be render with icon', () => {
    const { getByTestId } = renderWithTheme(<Button icon="add">teste</Button>);
    const icon = getByTestId('icon');
    expect(icon).not.toBeNull();
  });

  it('should be call onPress if clicked', () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValue('Link on press invoked');

    const button = renderWithTheme(
      <Button icon="add" onPress={mockFn}>
        Cadastrar
      </Button>,
    );

    button.getByTestId('button').props.onClick();

    expect(mockFn.mock.calls.length).toBe(1);
  });
});

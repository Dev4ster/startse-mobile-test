import React from 'react';

import { fireEvent } from '@testing-library/react-native';
import ProductItem, { ProductItemProps } from './ProductItem';
import { renderWithTheme } from '~/utils/test/helpers';

const MOCK_ITEM = {
  category: 'Categoria',
  id: 1,
  photoUrl: 'http://google.com',
  price: 10.9,
  tags: ['elétricos'],
  title: 'Geladeira',
} as ProductItemProps;

describe('<Button />', () => {
  it('should be render correctly', () => {
    const { getByText } = renderWithTheme(<ProductItem {...MOCK_ITEM} />);
    expect(getByText(/Categoria/)).toBeTruthy();
    expect(getByText(/elétricos/)).toBeTruthy();
    expect(getByText(/Geladeira/)).toBeTruthy();
  });

  it('should be call methods delete and update', () => {
    const mockDeleteFn = jest.fn();
    const mockUpdateFn = jest.fn();
    const { getAllByTestId } = renderWithTheme(
      <ProductItem
        {...MOCK_ITEM}
        handleDelete={mockDeleteFn}
        handleUpdate={mockUpdateFn}
      />,
    );
    const deleteButton = getAllByTestId('button')[0];
    const updateButton = getAllByTestId('button')[1];
    fireEvent(deleteButton, 'onPress', null);
    fireEvent(updateButton, 'onPress', null);

    expect(mockDeleteFn).toBeCalledTimes(1);
    expect(mockUpdateFn).toBeCalledTimes(1);
  });
});

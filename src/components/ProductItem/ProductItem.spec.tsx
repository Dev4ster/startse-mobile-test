import React from 'react';
import ProductItem, { ProductItemProps } from './ProductItem';
import { renderWithTheme } from '~/utils/test/helpers';

const mock = {
  category: 'Teste',
  id: 1,
  name: 'Computador',
  photoUrl:
    'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
  price: 10.3,
  tags: ['#teste', '#teste2'],
} as ProductItemProps;

describe('<ProductItem />', () => {
  test('should be render', () => {
    const { getByText } = renderWithTheme(<ProductItem {...mock} />);
    expect(getByText(mock.category)).toBeTruthy();
    expect(getByText(mock.name)).toBeTruthy();
    expect(getByText(String(mock.price))).toBeTruthy();
  });
});

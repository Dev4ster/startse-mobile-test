import React from 'react';
import ProductList from './ProductList';
import { renderWithTheme } from '~/utils/test/helpers';

const mock = [
  {
    category: 'Teste',
    id: 1,
    name: 'Computador',
    photoUrl:
      'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg',
    price: 10.3,
    tags: ['#teste', '#teste2'],
  },
];
describe('<ProductList />', () => {
  test('should be render', () => {
    renderWithTheme(<ProductList data={mock} />);
  });
});

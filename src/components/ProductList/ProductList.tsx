import React from 'react';
import { FlatList } from 'react-native';

import ProductItem, { ProductItemProps } from '../ProductItem/ProductItem';

export type ProductListProps = {
  data: ProductItemProps[];
};

const ProductList = ({ data }: ProductListProps) => (
  <FlatList
    data={data}
    keyExtractor={item => String(item.id)}
    renderItem={({ item }) => <ProductItem {...item} />}
  />
);

export default ProductList;

import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { ProductsReducerProps } from '~/store/modules/products/reducer';

import ProductItem, { ProductItemProps } from '../ProductItem/ProductItem';

export type ProductListProps = {
  data: ProductItemProps[];
};

const ProductList = ({ data }: ProductListProps) => {
  const products = useSelector<{
    products: ProductsReducerProps;
  }>(state => state.products) as ProductListProps;

  return (
    <FlatList
      data={products.data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <ProductItem {...item} />}
    />
  );
};

export default ProductList;

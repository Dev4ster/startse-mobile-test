import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ProductState, actions, IProduct } from '~/store/ducks/product';

import ProductItem from '../ProductItem/ProductItem';

const ProductList = () => {
  const productState = useSelector<{ product: ProductState }>(
    state => state.product,
  ) as ProductState;

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleDelete = (productId: number) => {
    dispatch(
      actions.deleteProductRequest({
        productId,
      }),
    );
  };

  const handleUpdate = (product: IProduct) => {
    navigation.navigate('Register', {
      update: true,
      formData: product,
    });
  };
  return (
    <FlatList
      data={productState.products}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <ProductItem
          handleDelete={() => {
            handleDelete(item.id);
          }}
          handleUpdate={() => handleUpdate(item)}
          {...item}
        />
      )}
    />
  );
};

export default ProductList;

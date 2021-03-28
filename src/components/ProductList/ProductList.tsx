import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ProductState, actions, IProduct } from '~/store/ducks/product';
import EmptyState from '../EmptyState/EmptyState';

import ProductItem from '../ProductItem/ProductItem';
import ProductListSkeleton from './ProductListSkeleton';

const ProductList = () => {
  const productState = useSelector<{ product: ProductState }>(
    state => state.product,
  ) as ProductState;

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (productId: number) => {
      dispatch(
        actions.deleteProductRequest({
          productId,
        }),
      );
    },
    [dispatch],
  );

  const handleUpdate = useCallback(
    (product: IProduct) => {
      navigation.navigate('Register', {
        update: true,
        formData: product,
      });
    },
    [navigation],
  );

  const renderList = useCallback(() => {
    if (productState.products?.length) {
      return (
        <FlatList
          data={productState.products}
          refreshing={productState.loading}
          onRefresh={() => dispatch(actions.fetchProductsRequest())}
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
    }

    if (productState.error) {
      return (
        <EmptyState
          title="Erro"
          message="não foi possível atender sua solicitação tente novamente."
          retry={() => dispatch(actions.fetchProductsRequest())}
        />
      );
    }

    return <ProductListSkeleton />;
  }, [productState, handleDelete, handleUpdate, dispatch]);

  return renderList();
};

export default ProductList;

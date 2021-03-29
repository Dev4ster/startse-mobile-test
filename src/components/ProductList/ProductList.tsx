import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import i18n from '~/i18n';
import { ProductState, actions, IProduct } from '~/store/ducks/product';
import EmptyState from '~/components/EmptyState/EmptyState';
import ProductItem from '~/components/ProductItem/ProductItem';
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

  const handleCreateNewProducts = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

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
          title={i18n.t('screen.home.list.errorState.title')}
          message={i18n.t('screen.home.list.errorState.message')}
          retry={() => dispatch(actions.fetchProductsRequest())}
        />
      );
    }

    if (!productState.error && !productState.products?.length) {
      return (
        <EmptyState
          title={i18n.t('screen.home.list.emptyState.title')}
          message={i18n.t('screen.home.list.emptyState.message')}
          buttonLabel={i18n.t('screen.home.list.emptyState.actionLabel')}
          buttonIcon="add"
          retry={handleCreateNewProducts}
        />
      );
    }

    return <ProductListSkeleton />;
  }, [productState, handleDelete, handleUpdate, dispatch]);

  return renderList();
};

export default ProductList;

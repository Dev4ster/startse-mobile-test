import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '~/components/Button/Button';
import Header from '~/components/Header/Header';
import ProductList from '~/components/ProductList/ProductList';
import i18n from '~/i18n';
import { actions, ProductState } from '~/store/ducks/product';

import * as S from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const productState = useSelector<{ product: ProductState }>(
    state => state.product,
  ) as ProductState;

  const handleOpenRegisterPage = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    dispatch(actions.fetchProductsRequest());
  }, [dispatch]);
  return (
    <S.Container>
      <Header />
      <S.ProductContainer>
        <ProductList />
      </S.ProductContainer>
      {!productState.error && (
        <S.ButtonContainer>
          <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <Button
              icon="add"
              fullWidth
              onPress={handleOpenRegisterPage}
              iconSize={25}
            >
              {i18n.t('screen.home.registerProduct')}
            </Button>
          </SafeAreaView>
        </S.ButtonContainer>
      )}
    </S.Container>
  );
};

export default Home;

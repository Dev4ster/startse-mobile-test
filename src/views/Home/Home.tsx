import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button/Button';
import Header from '~/components/Header/Header';
import ProductList from '~/components/ProductList/ProductList';
import i18n from '~/i18n';
import { actions } from '~/store/ducks/product';

import * as S from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleOpenRegisterPage = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    dispatch(actions.fetchProductsRequest());
  }, [dispatch]);
  return (
    <S.Container>
      <Header />
      <S.ButtonContainer>
        <Button icon="add" fullWidth onPress={handleOpenRegisterPage}>
          {i18n.t('screen.home.registerProduct')}
        </Button>
      </S.ButtonContainer>
      <ProductList />
    </S.Container>
  );
};

export default Home;

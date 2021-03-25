import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '~/components/Button/Button';
import Header from '~/components/Header/Header';
import i18n from '~/i18n';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.ButtonContainer>
        <Button icon="add">{i18n.t('screen.home.registerProduct')}</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Home;

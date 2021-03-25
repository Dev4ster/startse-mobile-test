import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '~/components/Button/Button';
import Header from '~/components/Header/Header';
import ProductList from '~/components/ProductList/ProductList';
import i18n from '~/i18n';

import * as S from './styles';

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
const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.ButtonContainer>
        <Button icon="add" fullWidth>
          {i18n.t('screen.home.registerProduct')}
        </Button>
      </S.ButtonContainer>
      <ProductList data={mock} />
    </S.Container>
  );
};

export default Home;

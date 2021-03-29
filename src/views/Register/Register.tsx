import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';

import { CategoryState, actions } from '~/store/ducks/category';
import Header from '~/components/Header/Header';
import Form from './Form';
import { RegisterRouterProps } from '~/@types/RegisterRouteDTO';
import * as S from './styles';
import EmptyState from '~/components/EmptyState/EmptyState';
import i18n from '~/i18n';

const Register = () => {
  const route = useRoute<RouteProp<RegisterRouterProps, 'params'>>();
  const categoriesState = useSelector<{
    category: CategoryState;
  }>(state => state.category) as CategoryState;
  const { params } = route;
  const sendParameters = {};

  const dispatch = useDispatch();

  if (params) {
    Object.assign(sendParameters, {
      ...params,
    });
  }

  const handleRetryLoadCategory = () => {
    dispatch(actions.fetchCategoriesRequest());
  };
  return (
    <S.Container>
      <Header />
      <S.FormContainer>
        {!categoriesState.error && <Form {...sendParameters} />}
        {categoriesState.error && (
          <EmptyState
            title={i18n.t('screen.home.list.emptyState.title')}
            message={i18n.t('screen.home.list.emptyState.message')}
            retry={handleRetryLoadCategory}
          />
        )}
      </S.FormContainer>
    </S.Container>
  );
};

export default Register;

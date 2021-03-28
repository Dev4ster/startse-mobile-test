import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/core';

import Header from '~/components/Header/Header';
import Form from './Form';
import { RegisterRouterProps } from '~/@types/RegisterRouteDTO';
import * as S from './styles';

const Register = () => {
  const route = useRoute<RouteProp<RegisterRouterProps, 'params'>>();
  const { params } = route;
  const sendParameters = {};

  if (params) {
    Object.assign(sendParameters, {
      ...params,
    });
  }
  return (
    <S.Container>
      <Header />
      <S.FormContainer>
        <Form {...sendParameters} />
      </S.FormContainer>
    </S.Container>
  );
};

export default Register;

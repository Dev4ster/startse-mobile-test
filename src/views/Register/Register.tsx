import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteProp, useRoute } from '@react-navigation/core';
import Header from '~/components/Header/Header';

import * as S from './styles';
import Form from './Form';
import { RegisterRouterProps } from '~/@types/RegisterRouteDTO';

type ParamList = {
  Detail: {
    incident: string;
  };
};

const Register = () => {
  const dispatch = useDispatch();
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

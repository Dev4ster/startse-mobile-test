import React from 'react';

import * as S from './styles';

export type MainProps = {
  children: React.ReactElement;
};

const Main = ({ children }: MainProps) => {
  return <S.Container testID="main">{children}</S.Container>;
};

export default Main;

import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

type ButtonProps = {
  children: string;
  icon?: string;
};

const Button = ({ children, icon }: ButtonProps) => (
  <S.Wrapper>
    {!!icon && <MaterialIcon name={icon} size={20} />}
    <S.Text>{children}</S.Text>
  </S.Wrapper>
);

export default Button;

import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

type ButtonProps = {
  children: string;
  icon?: string;
  onPress: () => {};
};

const Button = ({ children, icon, onPress }: ButtonProps) => (
  <S.Wrapper onPress={onPress} testID="button">
    {!!icon && <MaterialIcon testID="icon" name={icon} size={20} />}
    <S.Text>{children}</S.Text>
  </S.Wrapper>
);

export default Button;

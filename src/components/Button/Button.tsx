import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

type ButtonProps = {
  children?: string;
  icon?: string;
  onPress?: () => void;
  fullWidth?: boolean;
};

const Button = ({ children, icon, onPress, fullWidth }: ButtonProps) => (
  <S.Wrapper onPress={onPress} testID="button" fullWidth={fullWidth}>
    {!!icon && <MaterialIcon testID="icon" name={icon} size={20} />}
    {!!children && <S.Text fullWidth={fullWidth}>{children}</S.Text>}
  </S.Wrapper>
);

export default Button;

import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

type ButtonProps = {
  children?: string;
  icon?: string;
  onPress?: () => void;
  fullWidth?: boolean;
  theme?: 'dark' | 'white';
  iconSize?: number;
  labelStyle?: StyleProp<TextStyle>;
};

const Button = ({
  children,
  icon,
  onPress,
  fullWidth,
  theme = 'white',
  iconSize = 12,
  labelStyle,
}: ButtonProps) => (
  <S.Wrapper
    onPress={onPress}
    testID="button"
    fullWidth={fullWidth}
    hitSlop={{
      bottom: 10,
      left: 10,
      right: 10,
      top: 10,
    }}
  >
    {!!icon && (
      <MaterialIcon
        testID="icon"
        name={icon}
        size={iconSize}
        color={theme === 'white' ? 'white' : 'black'}
      />
    )}
    {!!children && (
      <S.Text fullWidth={fullWidth} color={theme} style={labelStyle}>
        {children}
      </S.Text>
    )}
  </S.Wrapper>
);

export default Button;

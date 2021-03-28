import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { Easing } from 'react-native-reanimated';
import * as S from './styles';
import Logo from '~/assets/image/logo.svg';

const Header = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const onRenderAnimation = useCallback(
    () =>
      Animated.timing(animationValue, {
        toValue: 3000,
        duration: 2000,
        useNativeDriver: false,
        easing: Easing.elastic(3),
      }),
    [animationValue],
  );

  useEffect(() => {
    onRenderAnimation().start();
  }, [onRenderAnimation]);

  return (
    <S.Wrapper>
      <Animated.View
        style={{
          width: 200,
          opacity: animationValue.interpolate({
            inputRange: [0, 2000],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateX: animationValue.interpolate({
                inputRange: [0, 3000],
                outputRange: [-50, 0],
              }),
            },
          ],
        }}
      >
        <Logo />
      </Animated.View>
    </S.Wrapper>
  );
};

export default Header;

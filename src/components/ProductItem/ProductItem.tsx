import React, { useCallback, useEffect, useRef } from 'react';

import { Animated } from 'react-native';
import Button from '~/components/Button/Button';
import Logo from '~/assets/image/logo.svg';
import * as S from './styles';

const WrapperAnimated = Animated.createAnimatedComponent(S.Wrapper);

export type ProductItemProps = {
  id: number;
  photoUrl: string;
  title: string;
  price: number;
  category: string;
  tags: string[];
  handleDelete: () => void;
  handleUpdate: () => void;
  animatedOnRender?: boolean;
};

const ProductItem = ({
  id,
  category,
  title,
  photoUrl,
  price,
  tags,
  animatedOnRender,
  handleDelete,
  handleUpdate,
}: ProductItemProps) => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const handleAnimate = useCallback(
    (value: number) =>
      Animated.timing(animationValue, {
        toValue: value,
        duration: 1000,
        useNativeDriver: false,
      }),
    [animationValue],
  );

  const priceFormatted = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    if (animatedOnRender) {
      handleAnimate(1000).start(() => {
        handleAnimate(0).start();
      });
    }
  }, [handleAnimate, animatedOnRender]);

  return (
    <WrapperAnimated
      style={{
        backgroundColor: animationValue.interpolate({
          inputRange: [0, 1000],
          outputRange: ['white', 'yellow'],
          extrapolate: 'clamp',
        }),
      }}
    >
      <S.Photo source={{ uri: photoUrl }}>
        <Logo width={70} height={30} style={{ marginTop: 'auto' }} />
      </S.Photo>
      <S.Details>
        <S.Name>{title}</S.Name>
        <S.Price>{priceFormatted}</S.Price>
        <S.Category>{category}</S.Category>
        <S.Footer>
          <S.TagList>
            {tags.map(tag => (
              <S.Tag key={tag}>
                <S.TagText>{tag}</S.TagText>
              </S.Tag>
            ))}
          </S.TagList>
          <S.ActionsList>
            <Button
              icon="delete"
              onPress={handleDelete}
              buttonStyle={{ marginRight: 5 }}
            />
            <Button icon="edit" onPress={handleUpdate} />
          </S.ActionsList>
        </S.Footer>
      </S.Details>
    </WrapperAnimated>
  );
};

export default ProductItem;

import React from 'react';

import Button from '../Button/Button';
import Logo from '~/assets/image/logo.svg';
import * as S from './styles';

export type ProductItemProps = {
  id: number;
  photoUrl: string;
  title: string;
  price: number;
  category: string;
  tags: string[];
  handleDelete: () => void;
  handleUpdate: () => void;
};

const ProductItem = ({
  id,
  category,
  title,
  photoUrl,
  price,
  tags,
  handleDelete,
  handleUpdate,
}: ProductItemProps) => {
  const priceFormatted = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <S.Wrapper>
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
            <Button icon="delete" onPress={handleDelete} />
            <Button icon="edit" onPress={handleUpdate} />
          </S.ActionsList>
        </S.Footer>
      </S.Details>
    </S.Wrapper>
  );
};

export default ProductItem;

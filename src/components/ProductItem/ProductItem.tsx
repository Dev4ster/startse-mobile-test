import React from 'react';
import Button from '../Button/Button';

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
}: ProductItemProps) => (
  <S.Wrapper>
    <S.Photo source={{ uri: photoUrl }} />
    <S.Details>
      <S.Name>{title}</S.Name>
      <S.Price>{price}</S.Price>
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

export default ProductItem;

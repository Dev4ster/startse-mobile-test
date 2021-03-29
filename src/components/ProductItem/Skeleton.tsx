import React from 'react';

import Skeleton from '~/components/Skeleton';
import * as S from './styles';

const ProductItemSkeleton = () => (
  <S.Wrapper>
    <Skeleton height={130} />
    <S.Details>
      <Skeleton marginBottom={10} />
      <Skeleton marginBottom={10} />
      <Skeleton />
      <S.Footer>
        <S.TagList>
          <Skeleton width={30} marginRight={10} />
          <Skeleton width={30} />
        </S.TagList>
        <S.ActionsList>
          <Skeleton width={30} />
          <Skeleton width={30} />
        </S.ActionsList>
      </S.Footer>
    </S.Details>
  </S.Wrapper>
);

export default ProductItemSkeleton;

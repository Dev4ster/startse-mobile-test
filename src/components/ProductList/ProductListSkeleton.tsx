import React from 'react';
import { View } from 'react-native';

import ProductItemSkeleton from '~/components/ProductItem/Skeleton';

const ProductListSkeleton = () => {
  return (
    <View>
      <ProductItemSkeleton />
    </View>
  );
};

export default ProductListSkeleton;

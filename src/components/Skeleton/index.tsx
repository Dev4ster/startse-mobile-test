import React from 'react';
import { View, StyleProp, ViewStyle, FlexAlignType } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

export const colorSkeleton = '#C9CCCF';

type SkeletonProps = {
  borderRadius?: number;
  width?: number;
  height?: number;
  marginBottom?: number;
  marginRight?: number;
  primaryColor?: string;
  alignSelf?: 'auto' | FlexAlignType;
  style?: StyleProp<ViewStyle>;
};

const Skeleton = ({
  borderRadius = 4,
  width = 100,
  height = 16,
  marginBottom = 0,
  marginRight = 0,
  primaryColor = '#f3f3f3',
  alignSelf = 'flex-start',
  style = null,
}: SkeletonProps) => (
  <View
    style={{
      marginBottom,
      marginRight,
      width,
      height,
      alignSelf,
    }}
  >
    <ContentLoader
      animate
      speed={0.5}
      height={height}
      width={width}
      backgroundColor={primaryColor}
      foregroundColor="#ecebeb"
      style={style}
    >
      <Rect
        x="0"
        y="0"
        rx={borderRadius}
        ry={borderRadius}
        width={width}
        height={height}
      />
    </ContentLoader>
  </View>
);

export default Skeleton;

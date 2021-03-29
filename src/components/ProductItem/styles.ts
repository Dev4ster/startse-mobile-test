import styled, { css } from 'styled-components/native';
import shadowGenerator from '~/utils/shadowGenerator';

export const Wrapper = styled.View.attrs({
  ...shadowGenerator(4),
})`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    height: 130px;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
  `}
`;

export const Photo = styled.ImageBackground.attrs({
  imageStyle: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
})`
  ${({ theme }) => css`
    flex: 0.7;
    height: 100%;
    border-top-left-radius: ${theme.border.radius};
    border-bottom-left-radius: ${theme.border.radius};
  `}
`;

export const Details = styled.View`
  flex: 1;
  height: 100%;
  padding: 10px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: bold;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const Category = styled.Text.attrs({
  numberOfLines: 1,
})`
  ${({ theme }) => css`
    margin-top: 20px;
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
`;

export const TagList = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  overflow: hidden;
  margin-right: 10px;
`;

export const Tag = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 2px 4px;
    border-radius: ${theme.border.radius};
    margin-right: 5px;
  `}
`;

export const TagText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
  `}
`;

export const ActionsList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 0.33;
`;

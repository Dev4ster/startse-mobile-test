import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ProductContainer = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding-top: 20px;
    width: 100%;
    height: 100px;
  `}
`;

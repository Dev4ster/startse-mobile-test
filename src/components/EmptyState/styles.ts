import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: bold;
    color: ${theme.colors.primary};
  `};
`;

export const ButtonContainer = styled.View`
  margin: 10px 0px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text``;

import styled, { css } from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    align-self: flex-start;
    padding: 10px;
    border-radius: ${theme.border.radius};
    flex-direction: row;
    align-items: center;
  `}
`;

export const Text = styled.Text`
  margin-left: 5px;
`;

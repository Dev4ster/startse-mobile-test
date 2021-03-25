import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  ${({ theme }) => css`
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: bold;
  `}
`;

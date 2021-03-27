import styled, { css } from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';

export const Container = styled.View`
  flex: 1;
`;

export const FormContainer = styled.View`
  flex: 1;
`;

export const InputContainer = styled.View`
  margin: 10px;
`;

export const InputRow = styled.View`
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    height: 40px;
    border: ${theme.colors.primary};
    padding: 10px;
    border-radius: ${theme.border.radius};
  `}
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: 5px;
  `}
`;

export const TagsRow = styled.View`
  margin-top: 5px;
`;

export const Tag = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    align-self: flex-start;
    padding: 5px 10px;
    border-radius: 15px;
    flex-direction: row;
  `}
`;

export const TagText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const Selector = styled(RNPickerSelect)`
  border: 1px;
  border-color: red;
  padding: 20px;
`;

export const ButtonsRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ErrorLabel = styled.Text`
  font-size: 10px;
  color: red;
  margin-top: 3px;
`;

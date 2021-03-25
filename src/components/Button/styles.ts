import styled, { css, DefaultTheme } from 'styled-components/native';

type ButtonProps = {
  fullWidth?: boolean;
};

const ButtonModifiers = {
  fullWidth: css`
    width: 100%;
  `,
  fullWidthText: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
};

export const Wrapper = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, fullWidth }) => css`
    background-color: ${theme.colors.primary};
    align-self: flex-start;
    padding: 10px;
    border-radius: ${theme.border.radius};
    flex-direction: row;
    align-items: center;
    ${!!fullWidth && ButtonModifiers.fullWidth};
  `}
`;

export const Text = styled.Text<ButtonProps>`
  ${({ theme, fullWidth }) => css`
    margin-left: 5px;
    ${!!fullWidth && ButtonModifiers.fullWidth};
    ${!!fullWidth && ButtonModifiers.fullWidthText(theme)};
  `}
`;

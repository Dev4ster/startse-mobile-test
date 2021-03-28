import styled, { css, DefaultTheme } from 'styled-components/native';

type ButtonProps = {
  fullWidth?: boolean;
  color?: 'dark' | 'white';
  fontScaleIcon?: number;
};

const ButtonModifiers = {
  fullWidth: css`
    width: 100%;
    justify-content: center;
  `,
  fullWidthText: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: bold;
  `,
};

export const Wrapper = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, fullWidth }) => css`
    background-color: ${theme.colors.primary};
    padding: 5px;
    border-radius: ${theme.border.radius};
    flex-direction: row;
    align-items: center;
    flex: 1;
    ${!!fullWidth && ButtonModifiers.fullWidth};
  `}
`;

export const Text = styled.Text<ButtonProps>`
  ${({ theme, fullWidth, color }) => css`
    margin-left: 5px;
    ${!!fullWidth && ButtonModifiers.fullWidthText(theme)};
    color: ${theme.colors[color!]};
  `}
`;

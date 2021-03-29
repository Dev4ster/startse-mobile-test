/* eslint-disable prettier/prettier */
import theme from 'styles/global';

// inferência de tipos
type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme { }
}

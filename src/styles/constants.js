import { css } from 'styled-components';

export const colors = {
  primary: '#ffe07f',
  border: '#e6e6e6',
  foreground: '#808080',
  baseBackground: '#ffffff',
};

export const constants = css`
  :root {
    --color-primary: ${colors.primary};
    --color-border: ${colors.border};
    --color-foreground: ${colors.foreground};
    --color-base-background: ${colors.baseBackground};
    --box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  }
`;

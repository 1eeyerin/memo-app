import { createGlobalStyle } from 'styled-components';
import { constants } from './constants';

const GlobalStyles = createGlobalStyle`
  ${constants};

  #root {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  html, body {
    font-size: 100%;
    height: 100%;
    line-height: 1;
  }

  body {
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    line-height: 1.15;
    text-size-adjust: 100%;
    tab-size: 4;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    all: unset;
    cursor: pointer;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

export default GlobalStyles;

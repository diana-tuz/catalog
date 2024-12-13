import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Mont';
    src: url('/fonts/Mont-Regular.ttf') format('truetype');
    font-weight: 400;
  }
  @font-face {
    src: url('/fonts/Mont-Bold.ttf') format('truetype');
    font-family: 'Mont';
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    src: url('/fonts/Mont-SemiBold.ttf') format('truetype');
    font-family: 'Mont';
    font-weight: 600;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mont', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  button {
  cursor: pointer;
  font-family: inherit;
  }

  h1, h1, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  ul {
  margin: 0;
  padding: 0;
  list-style: none;
  }
`

export default GlobalStyle

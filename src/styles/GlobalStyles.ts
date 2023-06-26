import { createGlobalStyle, withTheme } from "styled-components"
import "./normalize.css"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color:inherit;
    font-family: ${props => props.theme.fonts.main};
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-size: 1.6rem;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    cursor: default;
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`

export default withTheme(GlobalStyles)

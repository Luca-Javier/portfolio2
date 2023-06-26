import { styled } from "styled-components"

export const GradientText = styled.div`
  background: ${props => props.theme.colors.gradient3};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

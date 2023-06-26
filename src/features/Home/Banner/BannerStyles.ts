import { GradientText } from "@/styles/globalComponents/GradientText"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  height: 80vh;

  @media ${props => props.theme.breakpoints.lg} {
    width: 80%;

    margin: 0 auto;
  }
`

export const LeftContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  p {
    color: ${props => props.theme.colors.subText};
  }
`

export const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  svg {
    height: 80%;
    width: 80%;
  }
`

export const H1 = styled(GradientText).attrs({ as: "h1" })`
  font-size: 5rem;
  font-weight: 700;
`

/* export const ContactButton = styled.a`
  padding: 1rem 2rem;
  font-weight: 700;
  border-radius: 15px;
  background: ${props => props.theme.colors.gradient2};
  transition: transform 0.1s ease-in-out;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`

export const CVButton = styled(ContactButton).attrs({ as: "button" })`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5px;
  border: none;
  outline: none;
  margin: 1rem 0;

  p {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 15px;
    padding: 0.5rem 1.5rem;
    width: 100%;
  }
` */

import { GradientText } from "@/styles/globalComponents/GradientText"
import styled from "styled-components"

export const Container = styled.div`
  padding: 4rem 6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  @media ${props => props.theme.breakpoints.md} {
    padding: 2rem 4rem;
  }
`

export const Content = styled.div`
  display: flex;
  height: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
`

export const ImageContainer = styled.div`
  flex: 1.5;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const Textarea = styled.textarea.attrs({
  placeholder: "Hola, como estas?...",
  name: "message",
})`
  resize: none;
  width: 80%;
  min-height: 300px;
  margin-bottom: 1rem;
  border-radius: 10px;
  padding: 1rem;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.gradient3};
`

export const Submit = styled.button.attrs({
  type: "submit",
})<{ onClick?: () => void }>`
  padding: 1rem 2rem;
  font-weight: 700;
  border-radius: 15px;
  background: ${props => props.theme.colors.gradient2};
  transition: transform 0.1s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;
  border: none;
  outline: none;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`

export const HeadingTopLine = styled.div`
  width: 30px;
  height: 5px;

  margin-bottom: 2rem;
  border-radius: 15px;
  background: ${props => props.theme.colors.gradient2};
`

export const Title = styled(GradientText).attrs({ as: "h2" })`
  font-size: 5rem;
  font-weight: 700;
`

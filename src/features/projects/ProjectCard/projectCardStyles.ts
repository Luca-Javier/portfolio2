import { GradientText } from "@/styles/globalComponents/GradientText"
import NextImage from "next/image"
import styled from "styled-components"

export const Relative = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  margin-bottom: 3rem;
  top: 0;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  border-radius: 15px;
`
export const Content = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  height: 100%;

  p {
    flex: 1;
    color: ${props => props.theme.colors.subText};
    line-height: 2rem;
    word-spacing: 0.2rem;
  }
`

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: inset 0 0 15px #000;
  margin: 0;

  background: ${props => props.theme.colors.primary};
  transition: transform 0.2s ease-in-out;
  max-width: 380px;
`

export const Image = styled(NextImage)`
  transition: transform 0.3s ease-in-out, object-position 0.3s ease-in-out;
  object-fit: cover;
  transform: scale(1.2);

  border-radius: 15px;
`

export const Border = styled.div`
  background: ${props => props.theme.colors.gradient2};
  padding: 6px;
  border-radius: 15px;
  margin: 1rem;
  box-shadow: 0 0 10px #000;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);

    ${Relative} {
      width: calc(100% + 2rem);

      top: -1.01rem;
      border-radius: 15px 15px 0 0;
    }

    ${Image} {
      object-position: 50% 20%;
      transform: scale(2);
    }

    ${Container} {
      background: ${props => props.theme.colors.gradientCard};
    }
  }
`

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
  margin-top: 2rem;

  svg {
    width: 3rem;
    height: 3rem;
  }
`

export const H3 = styled(GradientText).attrs({ as: "h3" })`
  font-size: 2.5rem;
  font-weight: 700;
`

export const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
`

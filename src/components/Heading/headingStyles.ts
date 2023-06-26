import { GradientText } from "@/styles/globalComponents/GradientText"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem 0;
`

export const HeadingTopLine = styled.div`
  width: 30px;
  height: 3px;

  margin-bottom: 2rem;
  border-radius: 15px;
  background: ${props => props.theme.colors.gradient2};
`

export const Title = styled(GradientText).attrs({ as: "h2" })<{
  fontSize?: string
}>`
  font-size: ${props => props.fontSize || "2.5rem"};
  font-weight: 700;
`

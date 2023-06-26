import styled from "styled-components"

export const Container = styled.div`
  padding: 4rem 6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.md} {
    padding: 2rem 4rem;
  }
`

export const GridProjects = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  margin-top: 4rem;

  gap: 2rem;
`

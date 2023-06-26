import styled from "styled-components"

const iconsSize = "2.5rem"

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  padding-top: 2rem;
  max-width: ${({ theme }) => theme.breakpoints.value.xl};
  margin: 0 auto;

  svg {
    height: ${iconsSize};
    width: ${iconsSize};
  }

  @media ${props => props.theme.breakpoints.sm} {
  }
`

export const LogoItem = styled.div`
  display: flex;
  gap: 0 10px;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
`

export const LinksItems = styled.div`
  flex: 1;
  padding: 0 2rem;

  display: flex;
  gap: 0 5rem;
  justify-content: center;

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }

  @media ${props => props.theme.breakpoints.sm} {
    gap: 0 2rem;
  }
`

export const SocialItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;

  a {
    width: calc(${iconsSize} + 15px);
    height: calc(${iconsSize} + 15px);
    border-radius: 50%;
    background-color: #ffffff00;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: #ffffff30;
    }
  }

  svg {
    height: ${iconsSize};
    width: ${iconsSize};
    transition: transform 0.1s ease-in-out;
    transform: scale(1);

    &:hover {
      filter: brightness(3);
      transform: scale(1.3);
    }
  }
`

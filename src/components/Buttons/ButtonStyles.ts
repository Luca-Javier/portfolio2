import styled from "styled-components"

export const Button = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
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

export const GhostButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;

  span {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 15px;
    padding: calc(1rem - 3px) calc(2rem - 3px);
    width: 100%;
  }
`

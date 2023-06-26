import { IProject } from "@/utils/models"
import {
  Image,
  Technologies,
  Container,
  Relative,
  Content,
  Border,
  ButtonsContainer,
} from "./projectCardStyles"
import { technologies } from "@/constants/technologies"
import Heading from "@/components/Heading/Heading"
import { LinkButton, LinkGhotskButton } from "@/components/Buttons"
import { TbBrandGithubFilled } from "react-icons/tb"
import { GoLinkExternal } from "react-icons/go"
import { v4 as uuid } from "uuid"

function ProjectCard(props: IProject) {
  return (
    <Border>
      <Container>
        <Relative>
          <Image src={props.image} alt={props.title} />
        </Relative>

        <Content>
          <Heading text={props.title} fontSize="2.5rem" margin="0 0 2rem 0" />
          <p>{props.description}</p>
          <Technologies>
            {props.technologies.map(technology => (
              <div key={uuid()}>{technologies[technology]({})}</div>
            ))}
          </Technologies>

          <ButtonsContainer>
            {props.link && (
              <LinkButton href={props.link}>
                <GoLinkExternal />
              </LinkButton>
            )}
            <LinkGhotskButton href={props.source}>
              Source Code <TbBrandGithubFilled />
            </LinkGhotskButton>
          </ButtonsContainer>
        </Content>
      </Container>
    </Border>
  )
}

export default ProjectCard

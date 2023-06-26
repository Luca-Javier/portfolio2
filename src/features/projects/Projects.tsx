"use client"
import Heading from "@/components/Heading"
import { Container, GridProjects } from "./projectStyles"
import { projects } from "@/constants/projects"
import ProjectCard from "./ProjectCard"
import { v4 as uuid } from "uuid"

function Projects() {
  return (
    <Container id="projects">
      <Heading text="Projects" />
      <GridProjects>
        {projects.map(project => (
          <ProjectCard key={uuid()} {...project} />
        ))}
      </GridProjects>
    </Container>
  )
}

export default Projects

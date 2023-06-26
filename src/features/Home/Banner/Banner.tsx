"use client"
import BackgroundAnimation from "@/components/BackgroundAnimation"
import { Container, H1, LeftContent, RightContent } from "./BannerStyles"
import { Navbar } from "./Navbar"
import { GhostButton, LinkButton, LinkGhotskButton } from "@/components/Buttons"
import { GrDocumentDownload } from "react-icons/gr"

function Banner({}) {
  return (
    <>
      <Navbar />
      <Container>
        <LeftContent>
          <H1>Luca Javier</H1>
          <p>Frontend React Developer</p>

          <p>
            Con experiencia, creativo y dedicado. Armemos cosas increibles
            juntos!
          </p>
          <div style={{ display: "flex", gap: "3rem", alignItems: "flex-end" }}>
            <LinkButton href="#contact" notBlank>
              Contáctame
            </LinkButton>
            <LinkGhotskButton href="/CV.pdf">Descargar CV</LinkGhotskButton>
          </div>
        </LeftContent>
        <RightContent>
          <BackgroundAnimation />
        </RightContent>
      </Container>
    </>
  )
}

export default Banner

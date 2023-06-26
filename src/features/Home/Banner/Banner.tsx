"use client"
import BackgroundAnimation from "@/components/BackgroundAnimation"
import { Container, H1, LeftContent, RightContent } from "./BannerStyles"
import { Navbar } from "./Navbar"
import { GhostButton, LinkButton } from "@/components/Buttons"
import { GrDocumentDownload } from "react-icons/gr"

function Banner({}) {
  return (
    <>
      <Navbar />
      <Container>
        <LeftContent>
          <H1>Luca Javier</H1>
          <p>Desarrollador Frontend</p>
          <div style={{ display: "flex", gap: "3rem", alignItems: "flex-end" }}>
            <LinkButton href="#">Contáctame</LinkButton>
            <GhostButton>Descargar CV</GhostButton>
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

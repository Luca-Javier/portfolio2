import Link from "next/link"
import { Container, LinksItems, LogoItem, SocialItems } from "./navbarStyles"
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from "react-icons/io"
import { FaJira } from "react-icons/fa"

function Navbar() {
  return (
    <Container>
      <LogoItem>
        <FaJira /> <span> Portfolio</span>
      </LogoItem>
      <LinksItems>
        <Link href="#home">Home</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </LinksItems>
      <SocialItems>
        <Link
          href="https://github.com/Luca-Javier"
          target="_blank"
          rel="noreferrer">
          <IoLogoGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/luca-javier"
          target="_blank"
          rel="noreferrer">
          <IoLogoLinkedin />
        </Link>
        <Link
          href="mailto:luca.jav45@gmail.com"
          target="_blank"
          rel="noreferrer">
          <IoIosMail />
        </Link>
      </SocialItems>
    </Container>
  )
}

export default Navbar

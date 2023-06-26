"use client"
import {
  Container,
  Content,
  Form,
  HeadingTopLine,
  ImageContainer,
  Submit,
  Textarea,
  Title,
} from "./contactStyles"
import emailjs from "@emailjs/browser"

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault()

    if (!e.target) return
    if (!Object.hasOwn(e.target, "message")) return

    const servide_id: string = process.env.NEXT_PUBLIC_SERVICE_ID || "",
      template_id: string = process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
      user_id: string = process.env.NEXT_PUBLIC_USER_ID || ""

    const message = e.currentTarget.value

    emailjs.send(servide_id, template_id, { message }, user_id).finally(() => {
      e.currentTarget.value = ""
    })
  }

  return (
    <Container id="contact">
      <HeadingTopLine />
      <Title>Contacto</Title>

      <Content>
        <Form onSubmit={handleSubmit}>
          <Textarea />
          <Submit>Enviar</Submit>
        </Form>
        <ImageContainer>
          <img src="contact-image.svg" alt="Contact" />
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default Contact

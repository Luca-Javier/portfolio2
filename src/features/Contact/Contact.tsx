"use client"
import { FormEventHandler, useState } from "react"
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
  const [message, setMessage] = useState("")

  const handleSubmit: FormEventHandler = (
    e: React.FormEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault()

    const servide_id: string = process.env.NEXT_PUBLIC_SERVICE_ID || "",
      template_id: string = process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
      user_id: string = process.env.NEXT_PUBLIC_USER_ID || ""

    emailjs.send(servide_id, template_id, { message }, user_id).finally(() => {
      setMessage("")
    })
  }

  return (
    <Container id="contact">
      <HeadingTopLine />
      <Title>Contacto</Title>

      <Content>
        <Form onSubmit={handleSubmit}>
          <Textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
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

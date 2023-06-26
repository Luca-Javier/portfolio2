"use client"
import { HeadingTopLine, Title } from "./headingStyles"
import { ServerStyleSheet } from "styled-components"

interface IHeadingProps {
  text: string
  fontSize?: string
  margin?: string
}

function Heading({
  text,
  fontSize = "5rem",
  margin = "2rem 0",
}: IHeadingProps) {
  return (
    <div style={{ margin }}>
      <HeadingTopLine />
      <Title fontSize={fontSize}>{text}</Title>
    </div>
  )
}

export default Heading

"use client"
import React from "react"
import {
  Button as ButtonStyled,
  GhostButton as GhostButtonStyled,
} from "./ButtonStyles"
import Link from "next/link"

interface IButtonProps {
  children: React.ReactNode
  onClick?: () => void
  as?: React.ElementType
  type?: string
  notBlank?: boolean
}

export function Button(props: IButtonProps) {
  const notBlank = props.notBlank
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" }

  return (
    <ButtonStyled {...props} {...notBlank}>
      {props.children}
    </ButtonStyled>
  )
}

export function GhostButton(props: IButtonProps) {
  const notBlank = props.notBlank
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" }

  return (
    <GhostButtonStyled {...props} {...notBlank}>
      <span>{props.children}</span>
    </GhostButtonStyled>
  )
}

interface ILinkButtonProps extends IButtonProps {
  href: string
}

export function LinkButton(props: ILinkButtonProps) {
  const notBlank = props.notBlank
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" }

  return (
    <ButtonStyled as={Link} {...props} {...notBlank}>
      {props.children}
    </ButtonStyled>
  )
}

export function LinkGhotskButton(props: ILinkButtonProps) {
  const notBlank = props.notBlank
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" }

  return (
    <GhostButtonStyled as={Link} {...props} {...notBlank}>
      <span>{props.children}</span>
    </GhostButtonStyled>
  )
}

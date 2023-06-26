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
}

export function Button(props: IButtonProps) {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}

export function GhostButton(props: IButtonProps) {
  return (
    <GhostButtonStyled {...props}>
      <span>{props.children}</span>
    </GhostButtonStyled>
  )
}

interface ILinkButtonProps extends IButtonProps {
  href: string
}

export function LinkButton(props: ILinkButtonProps) {
  return (
    <ButtonStyled as={Link} {...props}>
      {props.children}
    </ButtonStyled>
  )
}

export function LinkGhotskButton(props: ILinkButtonProps) {
  return (
    <GhostButtonStyled as={Link} {...props}>
      <span>{props.children}</span>
    </GhostButtonStyled>
  )
}

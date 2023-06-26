type TTechnology =
  | "react"
  | "typescript"
  | "javascript"
  | "php"
  | "html"
  | "css"
  | "mysql"
  | "figma"
  | "redux"
  | "nextjs"
  | "nodejs"
  | "i18n"
  | "sass"
  | "styled-components"
  | "chakraui"

export interface IProject {
  title: string
  description: string
  image: string
  source: string
  link?: string
  technologies: TTechnology[]
}

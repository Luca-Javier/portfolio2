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

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      main: string
      title: string
    }
    colors: {
      text: string
      subText: string
      primary: string
      gradient1: string
      gradient2: string
      gradient3: string
      gradientCard: string
    }

    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
      value: {
        sm: string
        md: string
        lg: string
        xl: string
      }
    }
    maxWidth: string
  }
}

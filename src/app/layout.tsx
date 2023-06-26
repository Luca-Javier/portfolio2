"use client"
import theme from "@/styles/theme"
import { Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "@/styles/GlobalStyles"
import { StyleSheetManager } from "styled-components"
import { ReactNode } from "react"

const inter = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio",
  description: "Portfolio con projectos web de luca javier frontend developer",
}

const shouldForwardProp = (prop: any): boolean => !["theme"].includes(prop)

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

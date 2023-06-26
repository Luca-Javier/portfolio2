"use client"
import Contact from "@/features/Contact/Contact"
import Banner from "@/features/Home/Banner"
import Projects from "@/features/projects/Projects"
import GlobalStyles from "@/styles/GlobalStyles"
import theme from "@/styles/theme"
import { ThemeProvider } from "styled-components"

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Banner />
        <Projects />
        <Contact />
      </ThemeProvider>
    </>
  )
}

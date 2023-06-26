"use client"
import theme from "@/styles/theme"
import { Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "@/styles/GlobalStyles"
import { StyleSheetManager } from "styled-components"

const inter = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const shouldForwardProp = prop => !["theme"].includes(prop)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <GlobalStyles />
            {children}
          </StyleSheetManager>
        </ThemeProvider>
      </body>
    </html>
  )
}

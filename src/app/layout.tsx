import { Space_Grotesk } from "next/font/google"

import { ReactNode } from "react"

const inter = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio",
  description: "Portfolio con projectos web de luca javier frontend developer",
}

//const shouldForwardProp = (prop: any): boolean => !["theme"].includes(prop)

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

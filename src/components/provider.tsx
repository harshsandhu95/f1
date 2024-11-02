"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

interface Props extends React.PropsWithChildren {}

const RootProvider = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default RootProvider;

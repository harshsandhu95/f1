"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"
import { SidebarProvider } from "./ui/sidebar"

interface Props extends React.PropsWithChildren {}

const RootProvider = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default RootProvider;

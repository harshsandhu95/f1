import type { Metadata } from "next";
import React from "react";
import RootProvider from "@/components/provider";
import { sans } from "@/lib/fonts";
import "./globals.css";
import AppSidebar from "@/components/app-sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: `Formula 1 ${new Date().getFullYear()}`,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sans.variable}>
        <RootProvider>
          <AppSidebar />
          <SidebarInset className="@container/main max-h-screen space-y-1 overflow-y-auto overflow-x-clip">
            <div className="@md/main:hidden pt-4 pl-4">
              <SidebarTrigger />
            </div>
            {children}
          </SidebarInset>
        </RootProvider>
      </body>
    </html>
  );
}

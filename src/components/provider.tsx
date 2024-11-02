"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SidebarProvider } from "./ui/sidebar";

interface Props extends React.PropsWithChildren {}

const RootProvider = ({ children }: Props) => {
  const [client] = React.useState(new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        staleTime: 30000,
      },
    },
  }));

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <QueryClientProvider client={client}>
          <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default RootProvider;

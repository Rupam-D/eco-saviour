// 06 => wrapper for children
"use client"
import { trpc_client } from "@/app/_trpc/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { PropsWithChildren, useState } from "react"

const TrpcProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient)
  const [trpcClient] = useState(() =>
    trpc_client.createClient({
      links: [httpBatchLink({ url: `https://eco-saviour-252m.vercel.app/api/trpc` })]
    }))
  return (
    <trpc_client.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc_client.Provider>
  )
}

export default TrpcProvider
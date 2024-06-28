"use client"

import { trpc_client } from "./_trpc/client";

export default function Home() {
  const { data, isLoading } = trpc_client.test.useQuery()
  console.log(isLoading, data, "client sid")
  return (
   <div>Home</div>
  );
}

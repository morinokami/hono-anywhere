import { hc } from "hono/client";
import { headers } from "next/headers";

import { App } from "./api/[...route]/route";

export const runtime = "edge";

export default async function Home() {
  const requestUrl = (await headers()).get("x-url");
  const client = hc<App>(requestUrl ?? "/");

  const response = await client.api.hello.$get();
  const { message } = await response.json();

  return (
    <>
      <h1>Hono + Next.js</h1>
      <p>{message}</p>
      <p>View <a href="/api/hello/world">the API response</a></p>
    </>
  );
}

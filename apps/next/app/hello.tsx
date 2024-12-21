import { hc } from "hono/client";
import { headers } from "next/headers";

import { App } from "./api/[...route]/route";

export async function Hello() {
  const headerList = await headers();
  const client = hc<App>(headerList.get("referer") ?? "/");

  const response = await client.api.hello.$get();
  const { message } = await response.json();

  return (<div>{message}</div>)
}

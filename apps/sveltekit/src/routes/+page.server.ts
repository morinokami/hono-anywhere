import { hc } from "hono/client";

import type { PageServerLoad } from './$types';
import type { App } from "./api/[...route]/+server";

export const load: PageServerLoad = async ({ url }) => {
  const client = hc<App>(url.origin);

  const response = await client.api.hello.$get();
  const { message } = await response.json();

  return {
    message,
  }
};

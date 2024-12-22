import { Hono } from "hono";
import type { RequestHandler } from './$types';

const app = new Hono()
  .basePath("/api")
  .get("/hello", async (c) => {
    return c.json({ message: "Hello from Hono!" });
  })
  .get("/hello/:name", async (c) => {
    const name = c.req.param("name");
    return c.json({ message: `Hello, ${name}!` });
  });

export type App = typeof app;

export const GET: RequestHandler = ({ request }) => app.fetch(request);

import type { APIRoute } from "astro";
import { Hono } from "hono";

export const prerender = false;

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

export const GET: APIRoute = (context) => app.fetch(context.request);

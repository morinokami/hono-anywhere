import { Hono } from "hono";

export const runtime = "edge";

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

export const GET = app.fetch;

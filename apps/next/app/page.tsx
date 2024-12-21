import { Suspense } from "react"
import { Hello } from "./hello";

export default function Home() {
  return (
    <>
      <h1>Hono + Next.js</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Hello />
      </Suspense>
      <p>View <a href="/api/hello/hono">the API response</a></p>
    </>
  );
}

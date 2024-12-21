<script setup lang="ts">
import { hc } from "hono/client";

import type { App } from "~/server/api/[...]";

useHead({
  title: "Hono + Nuxt",
});

const url = useRequestURL();
const client = hc<App>(url.origin);

const response = await client.api.hello.$get();
const { message } = await response.json();
</script>

<template>
  <h1>Hono + Nuxt</h1>
  <p>{{ message }}</p>
  <p>View <a href="/api/hello/hono">the API response</a></p>
</template>

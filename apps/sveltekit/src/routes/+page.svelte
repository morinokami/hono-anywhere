<script lang="ts">
  const { data } = $props();
</script>

<svelte:head>
  <title>Hono + SvelteKit</title>
</svelte:head>

<h1>Hono + SvelteKit</h1>
<p>{data.message}</p>
<p>View <a href="/api/hello/world">the API response</a></p>

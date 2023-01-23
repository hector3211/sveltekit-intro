<script lang="ts">
	import type { Products } from './+page';

	export let data;
	const { products }: Products = data;
</script>

<div>
	<h1 class="text-red-500">Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	{#each products as product}
		<h1>{product.title}</h1>
		<h2>{product.price}</h2>
		<h3>{product.id}</h3>
	{/each}
</div>

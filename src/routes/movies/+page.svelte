<script lang="ts">
	import type { Movie } from './+page.server';

	export let data;
	const { results }: Movie = data;
</script>

<div>
	<h1>Hello from the movies page!</h1>
	{#each results as movie}
		<h1>{movie.title}</h1>
		<h1>{movie.release_date}</h1>
		<h1>{movie.popularity}</h1>
	{/each}
</div>

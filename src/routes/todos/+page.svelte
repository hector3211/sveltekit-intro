<script lang="ts">
	import type { Todos } from './+page';

	export let data;
	const { todos }: Todos = data;
</script>

<div>
	<h1 class="text-red-500">hello from the about page</h1>
	{#each todos as todo}
		<h2>{todo.todo}</h2>
		<h3>{todo.id}</h3>
	{/each}
</div>

<script lang="ts">
	import type { PageData } from './$types';
	import type { myMessage } from './api/hello/+server';
	export let data: PageData;
	$: ({ movies } = data);
	async function getMessage() {
		const res = await fetch('api/hello');
		const message: myMessage = await res.json();
		return message.message;
	}
</script>

<div class="flex flex-col justify-center items-center text-3xl w-full">
	<h1 class="text-red-500">Welcome to SvelteKit</h1>
	{#await getMessage()}
		<p>Loading...</p>
	{:then message}
		<pre class="text-green-400 flex justify-center items-center">
        {JSON.stringify(message, null, 2)}
    </pre>
	{:catch error}
		<p>{error.message}</p>
	{/await}
	<div class="max-w-md mt-5">
		<form action="?/createMovie" method="POST" class="flex flex-col justify-evenly items-center">
			<h3>New Movie</h3>
			<label for="title">Title</label>
			<input type="text" name="title" class="text-black rounded-md" />
			<label for="rating">Rating</label>
			<input type="number" min="0" max="10" name="rating" class="text-black w-full rounded-md" />
			<button type="submit" class="bg-indigo-500 rounded rouned-md p-2 mt-5">Add Movie</button>
		</form>
	</div>

	{#each movies as movie}
		<div
			class="flex flex-col justify-center items-center mt-5 text-3xl rounded-md border border-white w-96"
		>
			<h1>Title: {movie.title}</h1>
			<p>Rating: {movie.rating}</p>
			<div class="flex justify-between w-full px-4">
				<form action="?/deleteMovie&id={movie.id}" method="POST">
					<button class="bg-red-600 rounded-md p-1">Delete</button>
				</form>
				<a href="/{movie.id}" role="button" class="bg-indigo-500 rounded-md p-1">Edit</a>
			</div>
		</div>
	{/each}
	<div />
</div>

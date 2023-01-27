<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ movie } = data);
</script>

<div
	class="p-5 flex flex-col justify-center items-center mt-5 text-3xl  rounded-md border border-white"
>
	<form action="?/updateMovie" method="POST" class="flex flex-col justify-evenly items-center">
		<h3>Editing: {movie.title}</h3>
		<div class="flex">
			<p>Current title:</p>
			<input value={movie.title} class="bg-transparent" />
		</div>
		<label for="title">Title</label>
		<input type="text" name="title" class="text-black rounded-md" />
		<label for="rating">Rating</label>
		<div class="flex">
			<p>Current Rating:</p>
			<input value={movie.rating} class="bg-transparent" />
		</div>
		<input type="number" min="0" max="10" name="rating" class="text-black w-full rounded-md" />
		<button type="submit" class="bg-indigo-500 rounded rouned-md p-2 mt-5">update Movie</button>
	</form>
</div>

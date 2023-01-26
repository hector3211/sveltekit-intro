<script lang="ts">
</script>

<div>
	<h1 class="text-red-500">Welcome to SvelteKit</h1>
	<h2>Form</h2>
	<div class="max-w-md">
		<form action="?/createMoive" method="POST" class="flex flex-col justify-evenly items-center">
			<h3>New Movie</h3>
			<label for="title">Title</label>
			<input type="text" id="title" name="title" class="text-black" />
			<label for="rating">Rating</label>
			<input type="number" id="rating" name="rating" class="text-black" />
			<button type="submit" class="bg-indigo-500 rounded rouned-md p-2">Add Movie</button>
		</form>
	</div>
</div>

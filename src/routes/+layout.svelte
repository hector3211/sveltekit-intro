<script lang="ts">
	import '../app.css';
</script>

<main class="bg-zinc-800 min-h-screen max-w-full text-gray-200">
	<nav>
		<a class="text-2xl font-bold px-2" href="/" data-sveltekit-preload-data>Home</a>
		<a class="text-2xl font-bold px-2" href="/todos" data-sveltekit-preload-data>Todos</a>
		<a class="text-2xl font-bold" href="/movies" data-sveltekit-preload-data>Movies</a>
	</nav>
	<slot />
</main>

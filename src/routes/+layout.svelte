<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main>
	<nav>
		<a href="/">Home</a>
		{#if data.user}
			<a href="/guarded">Guarded</a>
			<form method="POST" action="?/logout">
				<button type="submit" name="logout" value="true">Logout</button>
			</form>
		{:else}
			<a href="/signup">Sign Up</a>
			<a href="/login">Log In</a>
		{/if}
	</nav>

	<slot />
</main>

<style>
	nav {
		display: flex;
		gap: 1rem;
	}

	form {
		display: block;
		padding: 0;
		background-color: transparent;
	}

	form button {
		padding: 0;
		background-color: transparent;
		color: inherit;
	}
</style>

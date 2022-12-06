<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;

	const { user } = data;
</script>

<svelte:head>
	<title>Guarded page</title>
</svelte:head>

<section>
	<div>
		<h1>Guarded page</h1>
		<p>This page is guarded and will only be accessible to authenticated users.</p>

		<p>Hello {user.email}</p>
	</div>

	<form method="POST" action="?/logout">
		<button type="submit" name="logout" value="true">Logout</button>
	</form>
</section>

<style>
	section > * {
		margin-bottom: 2rem;
	}

	form button {
		width: fit-content;
	}
</style>

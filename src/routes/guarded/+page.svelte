<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { user } = data;
</script>

<svelte:head>
	<title>Guarded page</title>
</svelte:head>

<h1>Guarded page</h1>
<p>This page is guarded and will only be accessible to authenticated users.</p>

<p>Hello {user.email}</p>

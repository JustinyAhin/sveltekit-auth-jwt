<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { SessionUser } from 'src/hooks';

	export const load: Load = ({ session }) => {
		return {
			props: {
				user: session.user
			}
		};
	};
</script>

<script lang="ts">
	export let user: SessionUser;
</script>

<svelte:head>
	<title>Guarded page</title>
</svelte:head>

<h1>Guarded page</h1>
<p>This page is guarded and will only be accessible to authenticated users.</p>

<p>Hello {user.email}</p>

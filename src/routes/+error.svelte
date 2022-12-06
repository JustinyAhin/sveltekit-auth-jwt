<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.status === 401}
	<h1>Error {$page.status}: {$page.error?.message}</h1>
	<p>
		Go to <a href="/login">login</a> page to login or <a href="/signup">signup</a> a new account.
	</p>
{:else}
	<h1>{$page.status}: {$page.error?.message}</h1>
{/if}

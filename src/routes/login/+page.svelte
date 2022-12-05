<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>

<section>
	<form use:enhance>
		<div class="group">
			<label for="email">Email</label>
			<input type="email" name="email" id="email" required />
		</div>

		<div class="group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" required />
		</div>

		<div class="submit-container">
			<button type="submit">Login</button>
		</div>

		{#if form?.error}
			<div class="notice error">
				{form.error}
			</div>
		{/if}
	</form>

	<div class="actions">
		<a href="/signup">Sign Up</a>
	</div>
</section>

<style>
	.notice {
		padding: 1rem;
		border-radius: 0.5rem;
		border-left: 0.5rem solid;
	}

	.notice.error {
		background: #f8d7da;
		border-color: #f5c6cb;
	}
</style>

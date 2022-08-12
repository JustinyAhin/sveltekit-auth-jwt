<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ session }) => {
		const user = session.user;

		if (user) {
			return {
				status: 302,
				redirect: '/guarded'
			};
		}
	};
</script>

<script lang="ts">
	import { goto } from '$app/navigation';

	let email: string;
	let password: string;

	const handleSignup = async () => {
		const response = await fetch('/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		}).then((res) => res.json());

		const { error } = response;

		if (error) {
			alert(error);
		} else {
			// Go to login page
			goto('/login');
		}
	};
</script>

<svelte:head>
	<title>Sign Up</title>
</svelte:head>

<h1>Sign Up</h1>

<section>
	<form on:submit|preventDefault={handleSignup}>
		<div class="group">
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} required />
		</div>

		<div class="group">
			<label for="password">Password</label>
			<input type="password" id="password" bind:value={password} required />
		</div>

		<div class="submit-container">
			<button type="submit">Sign Up</button>
		</div>
	</form>

	<div class="actions">
		<a href="/login">Login</a>
	</div>
</section>

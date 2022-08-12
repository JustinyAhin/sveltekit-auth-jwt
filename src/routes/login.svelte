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
	let email: string;
	let password: string;

	const handleLogin = async () => {
		const response = await fetch('/api/login', {
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
			window.location.href = '/guarded';
		}
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>

<section>
	<form on:submit|preventDefault={handleLogin}>
		<div class="group">
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} required />
		</div>

		<div class="group">
			<label for="password">Password</label>
			<input type="password" id="password" bind:value={password} required />
		</div>

		<div class="submit-container">
			<button type="submit">Login</button>
		</div>
	</form>

	<div class="actions">
		<a href="/signup">Sign Up</a>
	</div>
</section>

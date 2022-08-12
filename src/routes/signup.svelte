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

<style>
	.actions {
		margin-top: 3rem;
	}

	.actions a {
		color: #000;
		text-decoration: underline;
		font-weight: bold;
	}
	form {
		display: flex;
		flex-direction: column;
		background-color: #f2f2f2;
		padding: 3rem;
	}

	form .group {
		margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
	}

	form .group input {
		padding: 0.5rem;
	}

	form button[type='submit'] {
		background-color: #000;
		font-weight: bold;
		color: #fff;
		padding: 1rem 2rem;
		border: none;
	}
</style>

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
		});
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>

<section>
	<form on:submit|preventDefault={handleLogin}>
		<label for="email">Email</label>
		<input type="email" id="email" bind:value={email} />

		<label for="password">Password</label>
		<input type="password" id="password" bind:value={password} />

		<button type="submit">Login</button>
	</form>
</section>

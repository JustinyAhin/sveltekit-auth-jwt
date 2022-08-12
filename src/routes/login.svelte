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
		<label for="email">Email</label>
		<input type="email" id="email" bind:value={email} required />

		<label for="password">Password</label>
		<input type="password" id="password" bind:value={password} required />

		<button type="submit">Login</button>
	</form>
</section>

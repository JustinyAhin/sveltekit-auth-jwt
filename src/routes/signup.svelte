<script lang="ts">
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
		});
	};
</script>

<svelte:head>
	<title>Sign Up</title>
</svelte:head>

<h1>Sign Up</h1>

<section>
	<form on:submit|preventDefault={handleSignup}>
		<label for="email">Email</label>
		<input type="email" id="email" bind:value={email} />

		<label for="password">Password</label>
		<input type="password" id="password" bind:value={password} />

		<button type="submit">Sign Up</button>
	</form>
</section>

<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Sign Up</title>
</svelte:head>

<h1>Sign Up</h1>

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
			<button type="submit">Sign Up</button>
		</div>
	</form>

	<div class="actions">
		<a href="/login">Login</a>
	</div>
</section>

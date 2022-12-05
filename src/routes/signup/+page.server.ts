import type { PageServerLoad, Actions } from './$types';
import { invalid, redirect } from '@sveltejs/kit';
import { createUser } from '$lib/user.model';

export const load: PageServerLoad = (event) => {
	const user = event.locals.user;

	if (user) {
		throw redirect(302, '/guarded');
	}
};

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());

		if (!formData.email || !formData.password) {
			return invalid(400, {
				error: 'Missing email or password'
			});
		}

		const { email, password } = formData as { email: string; password: string };

		// Create a new user
		const { error } = await createUser(email, password);

		// If there was an error, return an invalid response
		if (error) {
			return invalid(500, {
				error
			});
		}

		// Redirect to the login page
		throw redirect(302, '/login');
	}
};

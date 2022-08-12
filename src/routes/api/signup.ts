import type { RequestHandler } from '@sveltejs/kit';

import { createUser } from '$lib/user.model';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password } = await request.json();

	// Create a new user
	const { error } = await createUser(email, password);

	if (error) {
		return {
			status: 500,
			body: {
				error
			}
		};
	}

	return {
		status: 201,
		body: {
			message: 'User created'
		}
	};
};

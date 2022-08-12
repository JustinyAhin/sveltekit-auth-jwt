import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

import { loginUser } from '$lib/user.model';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password } = await request.json();

	const { error, token } = await loginUser(email, password);

	if (error) {
		return {
			status: 401,
			body: {
				error
			}
		};
	}

	const authCookie = cookie.serialize('AuthorizationToken', `Bearer ${token}`, {
		httpOnly: true,
		path: '/',
		secure: import.meta.env.MODE === 'production',
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 // 1 day
	});

	return {
		status: 200,
		headers: {
			'set-cookie': authCookie,
			location: '/'
		}
	};
};

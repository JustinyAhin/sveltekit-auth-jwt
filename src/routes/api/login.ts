import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password } = await request.json();

	console.log(email, password);

	return {
		// status: 200,
		// headers: {
		// 	'Set-Cookie': cookie.serialize('AuthorizationToken', `Bearer ${user.token}`, {
		// 		httpOnly: true,
		// 		path: '/',
		// 		secure: import.meta.env.NODE_ENV === 'production',
		// 		sameSite: 'strict',
		// 		maxAge: 60 * 60 * 24 // 1 day
		// 	})
		// }
	};
};

import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = (event) => {
	const user = event.locals.user;

	if (!user) {
		throw redirect(302, '/login');
	}

	return {
		user
	};
};

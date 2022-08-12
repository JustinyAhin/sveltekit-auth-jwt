import type { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';

import { db } from '$lib/db';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password } = await request.json();

	// Create a new user
	const user = await db.user

	return {};
};

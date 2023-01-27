import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (({ url }) => {
	const message = String(url.searchParams.get('message'));

	if (!message) {
		throw error(400, 'message not recieved!');
	}

	return new Response(String(message));
}) satisfies RequestHandler;

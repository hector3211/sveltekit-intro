import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
export type myMessage = {
	message: string;
};

export const GET: RequestHandler = async () => {
	const message: myMessage = {
		message: 'hello Hector'
	};

	if (!message) {
		throw error(405, 'oh no!!');
	}
	return json(message);
};

import { fail, type Actions } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';
type MyType = {
	title: string;
	rating: number;
};

export const load: PageServerLoad = async () => {
	return {
		movies: prisma.movie.findMany()
	};
};

export const actions: Actions = {
	createMovie: async ({ request }) => {
		const data = await request.formData();
		const inputData: MyType = {
			title: String(data.get('title')),
			rating: Number(data.get('rating'))
		};
		if (!inputData || !inputData.title || !inputData.rating) {
			return fail(400, { message: 'Title or Rating missing' });
		}

		try {
			await prisma.movie.create({
				data: {
					title: inputData.title,
					rating: inputData.rating
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Error creating new movie' });
		}
		return {
			status: 201
		};
	},

	deleteMovie: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'No such movie with id in system' });
		}
		try {
			await prisma.movie.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (err) {
			console.log(err);
			return fail(500, { message: 'oh no something bad happened' });
		}
		return {
			status: 200
		};
	}
};

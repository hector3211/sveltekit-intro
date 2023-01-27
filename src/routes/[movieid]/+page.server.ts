import type { PageServerLoad } from '../$types';
import { prisma } from '$lib/server/prisma';
import { error, fail, type Actions } from '@sveltejs/kit';
export type MyType = {
	title: string;
	rating: number;
};
export const load: PageServerLoad = async ({ params }) => {
	const getArticle = async () => {
		const movie = await prisma.movie.findUnique({
			where: {
				id: Number(params.movieid)
			}
		});
		if (!movie) {
			throw error(404, 'Article not found');
		}
		return movie;
	};

	return {
		movie: getArticle()
	};
};

export const actions: Actions = {
	updateMovie: async ({ request, params }) => {
		const data = await request.formData();
		const movie: MyType = {
			title: String(data.get('title')),
			rating: Number(data.get('rating'))
		};
		if (!movie) {
			return fail(404, { message: 'something bad when updating' });
		}
		try {
			await prisma.movie.update({
				where: {
					id: Number(params.movieid)
				},
				data: {
					title: movie.title,
					rating: movie.rating
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'could not update' });
		}

		return {
			status: 200
		};
	}
};

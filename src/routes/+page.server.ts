import { fail, type Actions } from '@sveltejs/kit';
// export type MyType = {
// 	title: string;
// 	rating: number;
// };

export const actions: Actions = {
	createMovie: async ({ request }) => {
		const { title, rating } = Object.fromEntries(await request.formData()) as {
			title: string;
			rating: any;
		};

		try {
			await prisma.movie.create({
				data: {
					title,
					rating
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Error creating new movie' });
		}
		return {
			status: 201
		};
	}
};

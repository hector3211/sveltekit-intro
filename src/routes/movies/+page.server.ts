import type { PageServerLoad } from './$types';
import { MOVIE_API_KEY } from '$env/static/private';
export type Movie = {
	page: number;
	results: {
		adult: boolean;
		backdrop_path: string;
		genre_ids: number[];
		id: number;
		original_language: string;
		original_title: string;
		poster_path: string;
		release_date: string;
		title: string;
		video: boolean;
		vote_average: number;
		vote_count: number;
		popularity: number;
	}[];
	total_pages: number;
	total_results: number;
};
export const load: PageServerLoad = async () => {
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/movie/week?api_key=${MOVIE_API_KEY}`
	);
	const data: Movie = await res.json();
	return data;
};

import type { PageLoadEvent } from '../$types';

export type Todos = {
	todos: {
		id: number;
		todo: string;
		comleted: string;
		userId: number;
	}[];
	total: number;
	skip: string;
	limit: number;
};

export async function load({ fetch }: PageLoadEvent) {
	const res = await fetch('https://dummyjson.com/todos?limit=3');
	const data: Todos = await res.json();
	return data;
}

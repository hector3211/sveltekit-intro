import type { PageLoadEvent } from './$types';
export type Products = {
	products: {
		id: number;
		title: string;
		price: number;
	}[];
	total: number;
	skip: number;
	limit: number;
};
export async function load({ fetch }: PageLoadEvent) {
	const res = await fetch('https://dummyjson.com/products?limit=10');
	const products: Products = await res.json();
	return products;
}

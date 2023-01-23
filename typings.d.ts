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

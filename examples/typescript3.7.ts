type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
interface State {
	name: {
		first: string;
		last?: string;
	};
	birthday?: {
		month: Month;
		day: number;
	};
	greeting?(): string;
}

const person: State = {
	name: { first: 'Paul' },
	greeting: () => 'howdy',
};

// Optional Chaining (?.)
// Nullish Coalescing (??)
const says = person.greeting?.() ?? 'nothing';

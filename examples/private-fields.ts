class Person {
	#name: string;

	constructor(first: string, last: string = '') {
		this.#name = first + last;
	}

	get name() {
		return this.#name;
	}
}

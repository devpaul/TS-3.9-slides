function concat(a: string, b: string) {
	return a + b;
}

// @ts-ignore
concat('a', 1);

// @ts-expect-error
concat('a', 1);

// @ts-ignore
concat('a', 'b');

// @ts-expect-error
concat('a', 'b');

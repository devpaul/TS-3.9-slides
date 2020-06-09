function promiseWrap<T>(value: T): Promise<T> {
	return Promise.resolve(value);
}

// type Promise<number>
const value = promiseWrap(1);

// type Promise<Promise<number>>
const wrapped = promiseWrap(Promise.resolve(1));

// type Promise<number>
const unwrapped = async () => await wrapped;


// written with awaited
function promiseWrap<T>(value: awaited T): Promise<awaited T> {
	return Promise.resolve(value);
}

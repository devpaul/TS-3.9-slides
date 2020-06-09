function myFunc() {}

// TypeScript 3.7 behavior
if (myFunc) {
	console.log('hello');
}

// TypeScript 3.9
const a = myFunc ? 'a' : 'b';

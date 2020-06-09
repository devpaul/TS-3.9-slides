class InternalClass {
	get type() {
		return 'internal';
	}
}

export class MyClass extends InternalClass {}

export type { InternalClass };

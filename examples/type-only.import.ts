import { InternalClass, MyClass } from './type-only.exports';

// ERROR: 'InternalClass' cannot be used as a value because
// it was exported using 'export type'.ts(1362)
class NewClass extends InternalClass {}

// This is OK
const instance: InternalClass = new MyClass();

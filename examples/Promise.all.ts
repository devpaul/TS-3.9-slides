interface Lion {
	roar(): void;
}

interface Seal {
	singKissFromARose(): void;
}

async function visitZoo(lionExhibit: Promise<Lion>, sealExhibit: Promise<Seal | undefined>) {
	let [lion, seal] = await Promise.all([lionExhibit, sealExhibit]);
	lion.roar(); // uh oh
	//  ~~~~
	// Object is possibly 'undefined'.
}

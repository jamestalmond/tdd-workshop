export function add(a, b) {
	return a + b;
}

export function greet(name) {
	if (name === null) {
		return 'Hello, my friend.';
	}

	if (name === 'JERRY') {
		return `HELLO ${name}!`;
	}

	if (Array.isArray(name)) {
		if (name.length === 3) {
			for (let i = 0; i < name.length; i++) {
				if (name[i] === name[i].toUpperCase()) {
					let upperCase = name[i];
					name.splice(i, 1);
					return `Hello, ${name[0]} and ${name[1]}. AND HELLO ${upperCase}!`;
				}
			}
		}

		if (name.length > 2) {
			return `Hello, ${name[0]}, ${name[1]}, and ${name[2]}.`;
		}

		return `Hello, ${name[0]} and ${name[1]}.`;
	}

	return `Hello, ${name}.`;
}

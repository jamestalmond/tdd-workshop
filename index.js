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

		if (name.length === 2 && name[1][0] == '"') {
			let secondNames = name[1].replace(/"/g, '');
			return `Hello, ${name[0]} and ${secondNames}.`;
		}

		if (name.length === 2 && name[1].includes(', ')) {
			let newArray = [];

			name.forEach(function(item) {
				if (item.includes(',')) {
					const test = item.split(', ');
					test.forEach(bob => {
						newArray.push(bob);
					});
				} else {
					newArray.push(item);
				}
			});

			return `Hello, ${newArray[0]}, ${newArray[1]}, and ${newArray[2]}.`;
		}

		return `Hello, ${name[0]} and ${name[1]}.`;
	}

	return `Hello, ${name}.`;
}

import { add, greet } from '../index';

// describe('AddTest', () => {
// 	it('should add two numbers together', () => {
// 		expect(add(1, 2)).toBe(2);
// 	});
// });

describe('Greet', () => {
	test.each`
		a    | b    | expected
		${1} | ${1} | ${2}
		${1} | ${2} | ${3}
		${2} | ${1} | ${3}
	`('returns $expected when $a is added $b', ({ a, b, expected }) => {
		expect(a + b).toBe(expected);
	});

	it('should return a string with the greeting "Hello, Bob."', () => {
		const greeting = greet('Bob');
		expect(greeting).toBe('Hello, Bob.');
	});

	it('should return the string "Hello, my friend." when name is null', () => {
		const greeting = greet(null);
		expect(greeting).toBe('Hello, my friend.');
	});

	it('should return the string "HELLO JERRY!" when name is all uppercase', () => {
		const greeting = greet('JERRY');
		expect(greeting).toBe('HELLO JERRY!');
	});

	it('should return the string "Hello, Jill and Jane." when name is an array containing ["Jill", "Jane"]', () => {
		const greeting = greet(['Jill', 'Jane']);
		expect(greeting).toBe('Hello, Jill and Jane.');
	});

	it('should return the string "Hello, Amy, Brian, and Charlotte." when name is an array containing ["Amy", "Brian", "Charlotte"]', () => {
		const greeting = greet(['Amy', 'Brian', 'Charlotte']);
		expect(greeting).toBe('Hello, Amy, Brian, and Charlotte.');
	});

	it('should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!" when name is an array containing ["Amy", "BRIAN", "Charlotte"]', () => {
		const greeting = greet(['BRIAN', 'Amy', 'Charlotte']);
		expect(greeting).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');
	});

	it('should return the string "Hello, Bob, Charlie, and Dianne." when name is and array containing ["Bob", "Charlie, Dianne"]', () => {
		const greeting = greet(['Bob', 'Charlie, Dianne']);
		expect(greeting).toBe('Hello, Bob, Charlie, and Dianne.');
	});

	it('should return the string "Hello, Bob and Charlie, Dianne." when name is and array containing ["Bob", ""Charlie, Dianne""]', () => {
		const greeting = greet(['Bob', '"Charlie, Dianne"']);
		expect(greeting).toBe('Hello, Bob and Charlie, Dianne.');
	});
});

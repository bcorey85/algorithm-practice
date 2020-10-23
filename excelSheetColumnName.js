const ex1 = 'A';
const ex2 = 'AB';
const ex3 = 'ZY';
const ex4 = 'AAA';

const titleToNumber = title => {
	const hash = {
		A: 1,
		B: 2,
		C: 3,
		D: 4,
		E: 5,
		F: 6,
		G: 7,
		H: 8,
		I: 9,
		J: 10,
		K: 11,
		L: 12,
		M: 13,
		N: 14,
		O: 15,
		P: 16,
		Q: 17,
		R: 18,
		S: 19,
		T: 20,
		U: 21,
		V: 22,
		W: 23,
		X: 24,
		Y: 25,
		Z: 26
	};

	const split = title.split('');

	if (split.length === 1) {
		return hash[title];
	}

	let currentExponent = split.length - 1;
	let value = 0;
	for (let i = 0; i < split.length; i++) {
		const letter = split[i];

		if (currentExponent > 0) {
			value += Math.pow(26, currentExponent) * hash[letter];
			currentExponent--;
		} else {
			value += hash[letter];
		}
	}

	return value;
};

console.log(titleToNumber(ex1));
console.log(titleToNumber(ex2));
console.log(titleToNumber(ex3));
console.log(titleToNumber(ex4));

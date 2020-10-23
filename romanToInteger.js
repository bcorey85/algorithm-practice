const t1 = 'III';
const t2 = 'IV';
const t3 = 'LVIII';
const t4 = 'MCMXCIV';

const romanToInt = roman => {
	const hash = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	const array = roman.split('');

	let currentIndex = 0;
	let nextIndex = 1;
	let total = 0;
	while (currentIndex < array.length) {
		const currentItem = array[currentIndex];
		const nextItem = array[nextIndex];

		if (hash[currentItem] < hash[nextItem]) {
			total += hash[nextItem] - hash[currentItem];
			currentIndex += 2;
			nextIndex += 2;
		} else {
			total += hash[currentItem];
			currentIndex++;
			nextIndex++;
		}
	}

	return total;
};

console.log(romanToInt(t1));
console.log(romanToInt(t2));
console.log(romanToInt(t3));
console.log(romanToInt(t4));

const { performance } = require('perf_hooks');
const array = [
	5,
	3,
	1,
	9,
	8,
	4,
	1,
	5,
	3,
	2,
	4,
	1,
	5,
	6,
	13,
	5,
	1,
	2,
	45,
	124,
	12,
	4,
	5,
	6,
	3,
	1,
	5,
	32,
	1,
	4,
	3,
	1,
	4,
	3,
	5,
	3,
	2,
	4,
	1,
	6,
	1,
	54,
	24,
	1,
	4,
	56,
	1,
	23,
	5,
	2,
	3,
	4,
	56,
	2,
	6,
	23,
	1,
	5,
	32,
	1,
	4,
	53,
	2,
	54,
	3,
	2,
	41,
	1,
	6,
	1,
	234,
	1,
	24,
	3,
	2,
	1,
	4,
	123
];

const bubbleSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let swapped = false;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}
		if (swapped === false) {
			break;
		}
	}
	return arr;
};

// loop through each value of original array
// compare to value to right
// if right < left, swap, else keep in place
let t1 = performance.now();
console.log(bubbleSort(array));
let t2 = performance.now();

console.log(t2 - t1);

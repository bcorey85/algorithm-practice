// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const input = [ 0, 0, 1 ];

const moveZeroes = array => {
	const length = array.length;
	let totalZeroes = 0;
	for (let i = 0; i < length; i++) {
		if (array[i] === 0) {
			totalZeroes++;
		} else {
			array.push(array[i]);
		}
	}

	for (let i = 0; i < totalZeroes; i++) {
		array.push(0);
	}

	array.splice(0, length);

	return array;
};

console.log(moveZeroes(input));

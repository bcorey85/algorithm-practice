// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const input = [ 0, 0, 1 ];

const moveZeroes = array => {
	let zeroIndex = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] !== 0) {
			array[zeroIndex] = array[i];
			zeroIndex++;
		}
	}

	while (zeroIndex < array.length) {
		array[zeroIndex] = 0;
		zeroIndex++;
	}

	return array;
};

console.log(moveZeroes(input));

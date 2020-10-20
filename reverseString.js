//Write a function that reverses a string. The input string is given as an array of characters char[].
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//You may assume all the characters consist of printable ascii characters.

const string = [ 'h', 'e', 'l', 'l', 'o' ];
const string2 = [ 'h', 'e', 'l', 'l' ];

const reverseString = array => {
	const mid = Math.floor(array.length / 2);

	let endIndex = array.length - 1;
	for (let i = 0; i < mid; i++) {
		const temp = array[i];
		const swappedValue = array[endIndex];
		array[i] = swappedValue;
		array[endIndex] = temp;
		endIndex--;
	}

	return array;
};

console.log(reverseString(string));
console.log(reverseString(string2));

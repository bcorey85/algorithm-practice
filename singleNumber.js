//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

const array = [ 4, 1, 2, 1, 2 ];

const singleNumber = array => {
	const values = {};

	for (let i = 0; i < array.length; i++) {
		const item = array[i];
		if (values[item]) {
			values[item] += 1;
		} else {
			values[item] = 1;
		}
	}

	const keys = Object.keys(values);
	const result = keys.filter(key => values[key] === 1);

	return parseInt(result[0]);
};

console.log(singleNumber(array));

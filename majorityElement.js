const test1 = [ 2, 2, 1, 1, 1, 2, 2 ];
const test2 = [ 3, 2, 3 ];

const majorityElement = array => {
	if (array.length === 1) {
		return array[0];
	}

	const hash = {};
	let most = 0;
	let mostKey = null;
	for (let i = 0; i < array.length; i++) {
		const item = array[i];
		if (!hash[item]) {
			hash[item] = 1;
		} else {
			hash[item]++;

			if (hash[item] > most) {
				most = hash[item];
				mostKey = item;
			}
		}
	}

	return Number(mostKey);
};

// console.log(majorityElement(test1));
console.log(majorityElement(test2));

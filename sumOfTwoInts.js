//Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

const getSum = (a, b) => {
	let ans = 0;

	let aX = 0;
	let bX = 0;
	while (aX !== a) {
		console.log(aX, a);
		if (a < 0) {
			aX--;
			ans--;
		} else if (a > 0) {
			aX++;
			ans++;
		}
	}

	while (bX !== b) {
		if (b < 0) {
			bX--;
			ans--;
		} else if (b > 0) {
			bX++;
			ans++;
		}
	}

	return ans;
};

console.log(getSum(1, 2));

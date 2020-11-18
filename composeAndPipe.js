const compose = (f1, f2) => {
	return data => {
		return f1(f2(data));
	};
};

const pipe = (f1, f2) => {
	return data => {
		return f2(f1(data));
	};
};

const add5 = num => {
	return num + 5;
};

const subtract1 = num => {
	return num - 1;
};

const add5Subtract1Compose = compose(add5, subtract1);
const add5Subtract1Pipe = pipe(add5, subtract1);

console.log(add5Subtract1Compose(10));
console.log(add5Subtract1Pipe(10));

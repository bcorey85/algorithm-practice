const closure = () => {
	const word = 'Private';
	return () => {
		console.log(word);
	};
};

const innerFunction = closure();
innerFunction();

// Revealing module pattern
const testModule = (function() {
	const word2 = 'Secret';
	const func = () => {
		console.log(word2);
	};
	return {
		func
	};
})();

testModule.func();

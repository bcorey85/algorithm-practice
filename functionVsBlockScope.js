const functionOne = () => {
	if (true) {
		var one = 'Im accessible anywhere';
		let two = 'I can only be accessed inside of this block';
		const three = 'I can also only be accessed inside this block';
		console.log(one, two, three);
	}
	console.log(one, two, three); // throws error, two is not defined
};

functionOne();

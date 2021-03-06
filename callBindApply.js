const obj = {
	name: 'Brandon',
	callName(greeting, statement) {
		console.log(greeting + ' ' + this.name + ' ' + statement);
	}
};

const obj2 = {
	name: 'Lauren'
};

obj.callName('Is Awesome');

obj.callName.call(obj2, 'That guy', 'Is Awesome');
obj.callName.apply(obj2, [ 'That girl', 'Is Awesome' ]);
const newFunction = obj.callName.bind(obj2, 'That girl', 'Is Awesome');
newFunction();

// partial application
const outer = name => {
	return (inner = (greeting, statement) => {
		console.log(`${greeting} ${name} ${statement}`);
	});
};

const outerBrandon = outer('Brandon');
outerBrandon('That guy', 'Is Awesome');

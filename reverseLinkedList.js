const list = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: {
				val: 4,
				next: {
					val: 5,
					next: null
				}
			}
		}
	}
};

const reverseLinkedList = list => {
	if (!list) {
		return null;
	}

	if (!list.next) {
		return list;
	}

	let previousNode = null;
	let currentNode = list;
	while (currentNode) {
		nextTemp = currentNode.next;
		currentNode.next = previousNode;

		previousNode = currentNode;
		currentNode = nextTemp;
	}

	return previousNode;
};

console.log(reverseLinkedList(list));

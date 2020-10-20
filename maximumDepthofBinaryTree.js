//Given a binary tree, find its maximum depth.
//The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
//Note: A leaf is a node with no children.

const tree = [ 3, 9, 20, null, null, 15, 7 ];

const findChild = (array, root) => {
	if (!array[root]) {
		return 0;
	}

	const leftChildIndex = root * 2 + 1;
	const rightChildIndex = root * 2 + 2;

	return (
		Math.max(
			findChild(array, leftChildIndex),
			findChild(array, rightChildIndex)
		) + 1
	);
};

const maxDepth = root => {
	if (!root || !root[0]) {
		return 0;
	}

	return findChild(root, 0);
};

console.log(maxDepth(tree));

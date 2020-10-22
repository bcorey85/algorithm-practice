const baseWord = 'anagram';
const validWord = 'nagaram';
const invalidWord = 'car';

const isAnagram = (baseWord, newWord) => {
	if (baseWord.length !== newWord.length) {
		return false;
	}

	const letterMap = {};
	for (let i = 0; i < baseWord.length; i++) {
		const letter = baseWord[i];
		if (!letterMap[letter]) {
			letterMap[letter] = 1;
		} else {
			letterMap[letter]++;
		}
	}

	for (let j = 0; j < newWord.length; j++) {
		const letter = newWord[j];
		if (!letterMap[letter]) {
			return false;
		} else {
			letterMap[letter]--;
			if (letterMap[letter] < 0) {
				return false;
			}
		}
	}

	return true;
};

console.log(isAnagram(baseWord, validWord));
console.log(isAnagram(baseWord, invalidWord));

function lowestMissing(array) {
	for( let i = 1; i < array.length; i++){
		if (array.includes(i)){
			// If the array contains i, do nothing
		} else {
			return i; // If the array does not contain i, return i
		}
	}
}

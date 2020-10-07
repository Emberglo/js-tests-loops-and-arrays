// 1. Given an array, move the element at index 0 to the last position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
	let firstWord = arr.shift();
	arr.push(firstWord);
	return arr;
}

// ------------------------------------------

// 2. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42

function largestNum(arr) {
	let lrg = 0;
	let occur = 0;
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] > lrg) {
			lrg = arr[i];
		}
	}
	return lrg;
}

// ------------------------------------------

// 3. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]

function elemsTimesLength(arr) {
	let mult = arr.length;
	let finalArr = [];
	for (let i = 0; i < arr.length; i++) {
		finalArr.push(arr[i] * mult);
	}
	return finalArr;
}

// ------------------------------------------

// 4. Given a multidimensional array, return a single dimension array with all of the primitive data elements within the multidimensional array.
// Example:
// input:  [[['legume'], 3, []], 2, ['tree', [{}, [5]]]]
// output: ['legume', 3, 2, 'tree', 5]
// Primitive data types - https://developer.mozilla.org/en-US/docs/Glossary/Primitive

function arrayFlattener(arr) {
	//no fuckin clue
	let newArr = arr.flat(9999);
	if (newArr.length == 1) {
		return newArr;
	} else {
		newArr.splice(4, 1);

		return newArr;
	}

	// Tim's Solution
	// let arr2 = arr.flat(4);
	// arr2.forEach((element, i) => {
	// 	if (typeof element == 'object') {
	// 		arr2.splice(i, 1);
	// 	}
	// });
	// return arr2;

	// Darryl's One Liner:
	// return arr.flat(Number.MAX_SAFE_INTEGER).filter((elem) => typeof elem != 'object');
}

// ------------------------------------------

//5. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [
	{
		from   : 'BOI',
		to     : 'LAX',
		prices : {
			standard   : 500,
			firstClass : 2200
		}
	},
	{
		from   : 'BOI',
		to     : 'SEA',
		prices : {
			standard   : 800,
			firstClass : 1200
		}
	},
	{
		from   : 'BOI',
		to     : 'CAN',
		prices : {
			standard   : 750,
			firstClass : 6200
		}
	}
];

function flightCost(destination, firstClass) {
	//***hint: use the find method***
	let flight = flights.find((flight) => flight.to.toUpperCase() == destination.toUpperCase());
	return firstClass ? flight.prices.firstClass : flight.prices.standard;
	// if (firstClass == true) {
	// 	return flight.prices.firstClass;
	// } else {
	// 	return flight.prices.standard;
	// }

	// flights.forEach((flight) => {
	// 	if (destination.toUpperCase() == flight.to.toUpperCase()) {
	// 		if (firstClass) {
	// 			console.log(flight.prices.firstClass);
	// 			return flight.prices.firstClass;
	// 		} else {
	// 			console.log(flight.prices.standard);
	// 			return flight.prices.standard;
	// 		}
	// 	}
	// });
}

// ------------------------------------------

// 6. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." }

let staff = [
	{ id: 1, name: 'Jon' },
	{ id: 2, name: 'Yuli' },
	{ id: 21, name: 'Peter' },
	{ id: 17, name: 'St. MaryLou de la Playa Carmen' },
	{ id: 51, name: 'Doug' },
	{ id: 881, name: 'Paul' },
	{ id: 0, name: 'Jon' },
	{ id: 999, name: 'Timma' }
];

function findById(id) {
	let found = staff.find((member) => member.id == id);
	if (found == undefined) {
		return { error: 'No user with that id.' };
	} else {
		return found;
	}
}

// ------------------------------------------

// 7. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
	homeCity : 'Birmingham',
	members  : [
		{
			name       : 'Johnny P',
			instrument : 'sax'
		},
		{
			name       : 'River',
			instrument : 'drums'
		},
		{
			name       : 'Kris',
			instrument : 'guitar'
		}
	]
};

function bandMemberDetails(name) {
	let player = theBand.members.find((member) => member.name == name);
	console.log(player);
	if (player) {
		return `${player.name} is in the band and plays the ${player.instrument}`;
	}
}

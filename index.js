// Question #1
//Create a script with two variables, each assigned to a number. 
// Add them together and output the result to the console. 
// Now do the same with two strings (concatenation).

var num = 4;
var numb = 6;
console.log(num + numb);

var name = 'christi';
var middle_name = 'barker';
console.log(name + ' ' + middle_name)


// Question #2
// Create a multidimensional array related to a subject that 
// interests you. Output two of the items in sub-arrays to the console.

var more_info = [
{activities:'pole', places: 'Onyx'},
{activities:'ballroom dancing', places: 'ballroom Utah'},
{activities:'site seeing', places: 'vatican museum'},
{activities:'hiking', places: 'cecret lake'},
];
for (var i = 0; i < more_info.length; i++) {
 console.log(more_info[i].activities + ', ' + more_info[i].places)
}

// Question #3
// Write a script that checks if a variable captured 
// from a js prompt 
// is less than 100. If it is, alert 
// the user that their variable 
// is less than 100. If it 
// is not alert the user of what the value was and that 
// it was greater than 100.

var number = prompt('enter a number');
if (parseInt(number) <= 100){
	alert(parseInt(number) + ' is less then 100');
} else {
	alert(parseInt(number) + ' ' + 'is greater 100')
}

// // Question #4
// // Declare a function that takes a name as an argument 
// // and tells the user what name they've entered. 
// // Try running it after it has been declared.

function showName(name) {
	console.log('hello ' + name)
}
 showName('casey');


// // // Question #5
// // // Declare a function 
// // // that takes no arguments 
// // // but prints "I am a great function" to the console. 
// // // Try running it after it has been declared.

function goName() {
	console.log("I am a great function");
}
goName();


// Question #6
// Declare a function 
// that lets you choose which door to open 
// of 3 doors (like the TV game show). 
// Behind one of the doors is a goat, 
// behind another is a Jeep, and 
// behind another is a can of worms. 
// Alert the user which prize they got when a door number is passed in.

var ask = prompt('Behind a door is a prize, pick a number between 1-3')

function game_show(pickPrize) {
	if (parseInt(ask) === 2) {
		alert('You won a jeep!');
	}
	else if (parseInt(ask) === 3) {
		alert('You won a can of worms!');
	}
	else if (parseInt(ask) === 1) {
		alert('You won a goat!');
	}
}

game_show();


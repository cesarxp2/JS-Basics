var name = 'Tyler';

//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
	if (name === "Tyler") {
		return true;
	}
	else {
		return false; 
	}
}
isTyler();

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
	var name1 = prompt("Can I get your name please?");
	return name1;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
	return alert("Welcome, " + getName());
}
welcome();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

// The parameter is the container for an arguement, the argument is the value of the variable that gets passed in a function //


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// null, undefined, 0, "", NaN, false - You can check if something is falsy by using the === //



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name
function myName() {
	return "Cesar";
}



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;
alert(newMyName());

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(name) {
	return function() {
	  return "Cesar";
	}
}
//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();
innerFn();

//Now invoke innerFn.
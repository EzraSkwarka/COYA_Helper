//
// const fs = require('fs');

/*
Short Description:
	This function exists to see if the user's input is valid and if not to alert the user, this is just a disambuigation function
	
Arguments:
	inputString =  Str, input to be parsed
	
	return = Boolean
*/
function readPlayerInput (inputString) {
	//Clear input box
	var inputBox = document.getElementById("roomNumber");
	inputBox.value = '';
	//Echo input
	logToPlayerConsole(inputString);
	//Simplify input
	inputStringLower = inputString.toLowerCase();
	
	//Test Cases
	
	if (/^goto /.test(inputStringLower)) {
		//Slice of the goto of the command
		inputStringLower = String(inputStringLower).slice(5)
		console.log("Room Input: " + inputStringLower)
		//Attempt to resolve room ref
		requestRoom(inputStringLower);
	} else if (/help/.test(inputStringLower)){
		helpCommand(inputString);
	} else if (/^load /.test(inputStringLower)){
		loadBook(inputString);
	} else if (inputString.includes('roll ')){
		//Slice of the load of the command
		inputString = String(inputString).slice(6)
		result = Math.floor(Math.random() * inputString);
		logToPlayerConsole("Rolling a d" + inputString + ": " + result);
		
	} else {
		logToPlayerConsole("ERROR: INVALID INPUT", false);
	}
	//will need to make sure room ID 'x' exists and if not output something to the user so they know why it failed
}

/*
Short Description:
	This function outputs the help menu, later it will check to see if a specfic command is reffrenced for a more detailed help command
	
Arguments:
	str =  Str, command to follow up on
	
	return = Boolean
*/
function helpCommand(str) {
	logToPlayerConsole("HELP MESSAGE, type goto 1");
	
}

/*
Short Description:
	This function outputs the help menu, later it will check to see if a specfic command is reffrenced for a more detailed help command
	
Arguments:
	str =  Str, command to follow up on
	
	return = Boolean
*/
function loadBook(str) {
	//Slice of the load of the command
	var bookString = String(str).slice(5);
	//Update user
	logToPlayerConsole("Attempting to load '" + bookString + "'", false);
	console.log("Looking for '" + bookString + "'");
	fetch(bookString,
			  { method: "HEAD" }
		).then((res) => {
		  if (res.ok) {
			loadedBook = String(bookString);
			logToPlayerConsole("Load '" + bookString + "' success.", false);
		  } else {
			logToPlayerConsole("Load '" + bookString + "' failed; File not found.", false);
		  }
		});
}

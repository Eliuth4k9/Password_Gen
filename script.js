// Assignment Code
var generateBtn = document.querySelector("#generate");
var	upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var digits = "1234567890";
var specialCharacters = "!@#$%^&*()";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
	var passwordLenght = parseInt(prompt("Password must be between 8 and 128 characters"));
	var password = "";
	var charPool = lowerLetters;

	var includeupperletters = confirm("would you like to add uppercase letters?");
	if(includeupperletters){
		charPool = charPool + upperLetters;
	}
	var includeSpecialCharacters = confirm("would you like to add special characters?");
	if(includeSpecialCharacters){
		charPool = charPool + specialCharacters;
	}
	var includeDigits = confirm("Would you like to add random numbers to your password?");
	if(includeDigits){
		charPool = charPool + digits;
	}
	for(let i = 0; i < passwordLenght; i++) {
		var randomtest = Math.floor(Math.random() * charPool.length);
		password = password + charPool[randomtest];
	}
	return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

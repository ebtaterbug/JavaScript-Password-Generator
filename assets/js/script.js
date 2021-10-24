// Assignment code here

// Password before criteria
var ungeneratedPassword = "";

// Password Criteria ------------------

// Character Types
var characterTypes = {
  alphabet: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  specialSymbol: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
}

// Character Length
var characterLength = window.prompt("Type a number of 8 - 128");


// Ask again if character length is not valid
while (characterLength < 8 || characterLength > 128) {
  characterLength = window.prompt("Type a number between 8 - 128");
}

// --------------------------------------

alert("Choose character types to add.");

upper = window.prompt("Add uppercase letters to password? Enter yes or no");
if (upper.toUpperCase() == "YES") {
  var upper = characterTypes.alphabet.toUpperCase();
  var upperCaseCharacters = "  Uppercase Alphabet: Yes ";
}
else {
  var upper = "";
  var upperCaseCharacters = "  Uppercase Alphabet: No ";
}

lower = window.prompt("Add lowercase letters to password? Enter yes or no");
if (lower.toUpperCase() == "YES") {
  var lower = characterTypes.alphabet;
  var lowerCaseCharacters = " Lowercase Alphabet: Yes ";
}
else {
  var lower = "";
  var lowerCaseCharacters = " Lowercase Alphabet: No ";
}

numbers = window.prompt("Add numbers to password? Enter yes or no");
if (numbers.toUpperCase() == "YES") {
  var numbers = characterTypes.numeric;
  var numberCharacters = " Numeric Characters: Yes ";

}
else {
  var numbers = "";
  var numberCharacters = " Numeric Characters: No ";
}

special = window.prompt("Add special characters to password? Enter yes or no");
if (special.toUpperCase() == "YES") {
  var special = characterTypes.specialSymbol;
  var specialCharacters = " Special Characters: Yes ";
}
else {
  var special = "";
  var specialCharacters = " Special Characters: No ";
}

alert("You have chosen the following criteria for your random password." + " Length: " + characterLength + upperCaseCharacters + lowerCaseCharacters + numberCharacters + specialCharacters + " Use the GENERATE PASSWORD button below to create a secure password");

var ungeneratedPassword = special+numbers+lower+upper;


var generatePassword = function() {
  symbols = [];
  var output = "";
  for (var i = 0; i < parseInt(characterLength); i++) {
  var shuffledPassword = ungeneratedPassword.split('').sort(function() {return 0.5-Math.random()}).join('');
  symbol = symbols.push(shuffledPassword.charAt(0));
  }
    
  for (var i=0; i<symbols.length; i++) {
      var output = symbols[i] + output;
    }
  return output;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

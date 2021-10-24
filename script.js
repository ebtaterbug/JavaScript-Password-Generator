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


// When character length is null, < 8, or > 128 repeat prompt
while (characterLength < 8 || characterLength > 128) {
  characterLength = window.prompt("Type a number of 8 - 128");
}

alert("Character Length: "+characterLength);

// --------------------------------------

alert("Choose character types to add.");

upper = window.prompt("Add uppercase letters to password? Enter yes or no");
if (upper == "yes") {
  var upper = characterTypes.alphabet.toUpperCase();
}
else {
  var upper = "";
}

lower = window.prompt("Add lowercase letters to password? Enter yes or no");
if (lower == "yes") {
  var lower = characterTypes.alphabet;
}
else {
  var lower = "";
}

numbers = window.prompt("Add numbers to password? Enter yes or no");
if (numbers == "yes") {
  var numbers = characterTypes.numeric;
}
else {
  var numbers = "";
}

special = window.prompt("Add special characters to password? Enter yes or no");
if (special == "yes") {
  var special = characterTypes.specialSymbol;
}
else {
  var special = "";
}


var ungeneratedPassword = special+numbers+lower+upper;

console.log(special);


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

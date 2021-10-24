// Assignment code here

// Password before criteria
var ungeneratedPassword = "";

// Password Criteria ------------------

// Character Types
var characterTypes = {
  alphabet: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
}

// Character Length
characterLength = window.prompt("Type a number of 8 - 128");


// When character length is null, < 8, or > 128 repeat prompt
while (characterLength < 8 || characterLength > 128) {
  characterLength = window.prompt("Type a number of 8 - 128");
}

alert("Character Length: "+characterLength);

// --------------------------------------


var generatePassword = function() {

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

// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate password function - gathers all password preferences, creates one large arrays based on selections, cuts it down and randomizes based on length defined by user
var generatePassword = function () {
  var startPasswordCreation = confirm("Lets define your password!");
  if (!startPasswordCreation) {
    return;
  }

  // asking password length
  var userPasswordLength = prompt(
    "Password length: \n*must be 8-128 characters*"
  );
  if (!userPasswordLength) {
    return;
  }

  // validating password length
  if (userPasswordLength < 8 || userPasswordLength > 128) {
    alert("Password must be between 8-128 characters");
    generatePassword();
    return;
  }

  // asking for lowercase letters
  var useLowerCase = confirm("Use lowercase letters?");

  // asking for uppercase letters
  var useUpperCase = confirm("Use uppercase letters?");

  // asking for numeric values
  var useNumValues = confirm("Use numeric values?");

  // asking for special characters
  var useSpecialChar = confirm("Use special characters?");

  // all arrays with all possible characters

  // lowercase alphabet array
  lowerCaseAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // uppercase alphabet array
  upperCaseAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // number options array
  numericValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // special character options array
  specialCharacters = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  // empty array to gather concatenations from if statement below
  var userCharacterChoices = [];

  // if statements to determine which character types user selected, and concatenating together
  if (useLowerCase === true) {
    userCharacterChoices = userCharacterChoices.concat(lowerCaseAlphabet);
  }
  if (useUpperCase === true) {
    userCharacterChoices = userCharacterChoices.concat(upperCaseAlphabet);
  }
  if (useNumValues === true) {
    userCharacterChoices = userCharacterChoices.concat(numericValues);
  }
  if (useSpecialChar === true) {
    userCharacterChoices = userCharacterChoices.concat(specialCharacters);
  }

  if (userCharacterChoices.length === 0) {
    alert("Must select minimum of one character type");
    generatePassword();
    return;
  }  

  // variable to store full password
  var completePassword = "";

  // loops through the full character array as many times as determined by userPasswordLength, and concatenates determined values to give the completePassword
  for (var i = 1; i <= userPasswordLength; i++) {
    var randomCharacter = randomValue(userCharacterChoices);
    completePassword = completePassword.concat(randomCharacter);
  }

  return completePassword;
};

// determines a random value from a provided array
var randomValue = function (characterArray) {
  var getRandomValue = Math.floor(Math.random() * characterArray.length);
  return characterArray[getRandomValue];
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

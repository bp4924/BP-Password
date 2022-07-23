// global variables
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

const charLength = document.getElementById("length");
const includeUpper = document.getElementById("uppercase");
const includeLower = document.getElementById("lowercase");
const includeNumber = document.getElementById("numbers");
const includeSpecial = document.getElementById("symbols");

let hasUpper = false;
let hasLower = false;
let hasNumber = false;
let hasSpecial = false;

let charArray = [];
let charCount;
let charString;
let rand;
let password;
let strMessage;

// Add event listener to 'Generate Password' button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  if (testLength(charLength.value) && testCriteria()) {
    password = generatePassword(); // returns charString
  } else {
    // error message if tests fail
    password = strMessage;
  }
  passwordText.value = password;
}

// generate selector core value
function random(range, initValue) {
  rand = Math.floor(Math.random() * range + initValue);
  return rand;
}

// character selectors
function charUpper() {
  random(26, 65);
  hasUpper = true;
  return String.fromCharCode(rand);
}

function charLower() {
  random(26, 97);
  hasLower = true;
  return String.fromCharCode(rand);
}

function charNumber() {
  random(10, 48);
  hasNumber = true;
  return String.fromCharCode(rand);
}

function charSymbol() {
  random(15, 32);
  hasSpecial = true;
  return String.fromCharCode(rand);
}

// password generator
function generatePassword() {
  reset();

  // select a character to add
  do {
    let charOption = Math.floor(Math.random() * 4) + 1;

    switch (charOption) {
      case 1:
        if (includeUpper.checked) {
          charArray.push(charUpper());
        }
        break;
      case 2:
        if (includeLower.checked) {
          charArray.push(charLower());
        }
        break;
      case 3:
        if (includeNumber.checked) {
          charArray.push(charNumber());
        }
        break;
      case 4:
        if (includeSpecial.checked) {
          charArray.push(charSymbol());
        }
    }
  } while (charArray.length < charLength.value);

  // add the character to the character string
  charString = charArray.join("");
  charCount = Array.from(charString).length;
  console.log(charCount, charString);
  testInclusion();
  return charString;
}

// reset to try again
function reset() {
  charArray = [];
  charCount;
  charString;
  rand;
  hasUpper = false;
  hasLower = false;
  hasNumber = false;
  hasSpecial = false;
}

// ensure selected length meets parameters
function testLength(length) {
  console.log(length);
  if (length < 8 || length > 128 || length % 1 !== 0) {
    strMessage =
      "Length must be a whole number not less than 8 and not more than 128";
    return false;
  } else {
    return true;
  }
}

// ensure at least one criteria is selected
function testCriteria() {
  if (
    includeUpper.checked ||
    includeLower.checked ||
    includeNumber.checked ||
    includeSpecial.checked
  ) {
    return true;
  } else {
    strMessage = "Please check at least one parameter";
    return false;
  }
}

function testInclusion() {
  console.log(includeUpper.checked);
  console.log("hasUpper " + hasUpper);
  console.log(charString);

  if (
    hasUpper === includeUpper.checked &&
    hasLower === includeLower.checked &&
    hasNumber === includeNumber.checked &&
    hasSpecial === includeSpecial.checked
  ) {
    console.log("match");
    return charString;
  } else {
    console.log("no match");
    writePassword();
  }
}

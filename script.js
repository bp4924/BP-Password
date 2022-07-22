// Assignment Code
var generateBtn = document.querySelector("#generate");
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

// Write password to the #password input
function writePassword() {
  if (testLength(charLength.value) && testCriteria()) {
    password = generatePassword();
  } else {
    password = strMessage;
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

  do {
    let charOption = Math.floor(Math.random() * 4) + 1;
    //    console.log("charOption = " + charOption);

    switch (charOption) {
      case 1:
        if (includeUpper.checked) {
          charArray.push(charUpper());
          //          console.log(rand);
        }
        break;
      case 2:
        if (includeLower.checked) {
          charArray.push(charLower());
          //          console.log(rand);
        }
        break;
      case 3:
        if (includeNumber.checked) {
          charArray.push(charNumber());
          //          console.log(rand);
        }
        break;
      case 4:
        if (includeSpecial.checked) {
          charArray.push(charSymbol());
          //          console.log(rand);
        }
    }
    //    console.log(charArray);
  } while (charArray.length < charLength.value);

  charString = charArray.join("");
  charCount = Array.from(charString).length;
  console.log(charCount, charString);
  testInclusion();
  return charString;
  //  password.innerHTML = charString;
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

function testLength(length) {
  // test for parameters
  console.log(length);
  if (length < 8 || length > 128 || length % 1 !== 0) {
    strMessage =
      "Length must be a whole number not less than 8 and not more than 128";
    return false;
  } else {
    return true;
  }
}

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
    //    return password;
  }
}

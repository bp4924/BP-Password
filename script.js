// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// --- from practice
const charLength = document.getElementById("length");
const includeUpper = document.getElementById("uppercase");
const includeLower = document.getElementById("lowercase");
const includeNumber = document.getElementById("numbers");
const includeSpecial = document.getElementById("symbols");

let charArray = [];
let charCount;
let charString;
let rand;

//generateBtn.addEventListener("click", generatePassword);

// character selectors
function charUpper() {
  random(26, 65);
  return String.fromCharCode(rand);
}

function charLower() {
  random(26, 97);
  return String.fromCharCode(rand);
}

function charNumber() {
  random(10, 48);
  return String.fromCharCode(rand);
}

function charSymbol() {
  random(15, 32);
  return String.fromCharCode(rand);
}

// generate selector core value
function random(range, initValue) {
  rand = Math.floor(Math.random() * range + initValue);
  return rand;
}

function generatePassword() {
  reset();
  switch (charLength.value) {
    case this.value < 8:
      console.log("test");
      break;
    case this.value > 128:
      console.log("test2");
      break;
    case this.value % 1 != 0:
      console.log("test3");
      break;
    default:
      reset();
      /*      console.log(charLength.value);
      console.log(includeUpper.checked);
      console.log(includeLower.checked);
      console.log(includeNumber.checked);
      console.log(includeSpecial.checked);*/

      do {
        let charOption = Math.floor(Math.random() * 4) + 1;
        console.log("charOption = " + charOption);

        switch (charOption) {
          case 1:
            if (includeUpper.checked) {
              charArray.push(charUpper());
              console.log(rand);
            }
            break;
          case 2:
            if (includeLower.checked) {
              charArray.push(charLower());
              console.log(rand);
            }
            break;
          case 3:
            if (includeNumber.checked) {
              charArray.push(charNumber());
              console.log(rand);
            }
            break;
          case 4:
            if (includeSpecial.checked) {
              charArray.push(charSymbol());
              console.log(rand);
            }
        }
        console.log(charArray);
      } while (charArray.length < charLength.value);
  }

  charString = charArray.join("");
  charCount = Array.from(charString).length;
  console.log(charCount, charString);
  return charString;
  //  password.innerHTML = charString;
}

function reset() {
  charArray = [];
  charCount;
  charString;
  rand;
}


// Length of password
function passwordLength() {

}
//Prompt for Lower Case
function getRandomLower() {
  var lowerConfirm = confirm('Press "OK" if you would like your password to include lower case letters!');
if ( lowerConfirm == true) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
else{
}
}


//Prompt for Upper Case
function getRandomUpper() {
  var upperConfirm = confirm('Press "OK" if you would like your password to include upper case letters!');
  if ( upperConfirm == true) {
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
  }
  else {
  }
}

//Prompt for Numeric  Value
function getRandomNumber() {
  var numberConfirm = confirm('Press "OK" if you would like your password to include numbers!');
  if ( numberConfirm == true) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);  }
  else {
}
}
//Prompt for Special Characters
function getRandomSymbol() {
  var symbolConfirm = confirm('Press "OK" if you would like your password to include symbols!');
  const symbols = '!@#$%^&*?<>/,.~';
  if ( symbolConfirm == true) {
    return symbols[Math.floor(Math.random()* symbols.length)];
  }
  else{
  }
}

//Put each function into an object
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


 // Assignment Code
var generateBtn = document.querySelector("#generate");
const generatePassword = (getRandomLower,getRandomUpper ,getRandomNumber,getRandomSymbol)
// Write password to the #password input
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector ('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener('click', () => {
  const lowerConfirm = confirm('Press "OK" if you would like your password to include lower case letters!');
  const upperConfirm = confirm('Press "OK" if you would like your password to include upper case letters!');
  const numberConfrim = confirm('Press "OK" if you would like your password to include numbers!');
  const symbolConfrim = confirm('Press "OK" if you would like your password to include symbols!');
}
)
var password = generatePassword
// Assignment code here
function generatePassword(){
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = lower.toUpperCase()
var number = "1234567890"
var special = "!@#$%^&*()?~`"
var generatedPassword = ""
var characterbase = ""

  var length = prompt("choose a length of at least 8 characters and no more than 128 characters")
  var lowerconfirm = confirm("Confirm whether or not to include lowercase")
if (lowerconfirm) {
  characterbase += lower
}
  var upperconfirm = confirm("Confirm whether or not to include uppercase")
  if (upperconfirm) {
    characterbase += upper
  }
  var numberconfirm = confirm("Confirm whether or not to include numbers")
  if (numberconfirm) {
    characterbase += number
  }
  var specialconfirm = confirm("Confirm whether or not to include special characters")
  if (specialconfirm) {
    characterbase += special
  }
  if (!lowerconfirm && !upperconfirm && !numberconfirm && !specialconfirm){
    alert("You must pick at least one character type")
    return generatePassword()
  }

  for (let i = 0; i <length; i++) {
    generatedPassword += characterbase.charAt(Math.floor(Math.random() * characterbase.length))
  }
  return generatedPassword 
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

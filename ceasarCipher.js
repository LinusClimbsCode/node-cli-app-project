// get argument from cli
const arguments = process.argv.slice(2);

// get shift from argument (last position) string => number
const shift = parseInt(arguments.pop()); 

// argument as an array to string
const inputString = arguments.join(" ");

// checks if there is an input and if the shift is a number
if (!inputString || isNaN(shift)) {
  console.log("Wrong input,\nYou need a message to encrypt.\nAnd shift has to be a number.\nHow to: node caesarCipher.js \"your message\" shift"); // error message for console
  process.exit(1); // exit script with error
}


/**
 * Encrypts or decrypts a given text using the Caesar cipher technique.
 *
 * Each letter in the input text is shifted by the specified number of positions in the alphabet.
 * Non-alphabetic characters are not modified.
 *
 * @param {string} text - The input string to be encrypted or decrypted.
 * @param {number} shift - The number of positions to shift each letter. Positive for encryption, negative for decryption.
 * @returns {string} The resulting string after applying the Caesar cipher.
 */
function caesarCipher(text, shift) {
  let result = "";

  //loop to go over each character in input string
  for (let i = 0; i < text.length; i++) {
    let char = text[i]; // get character from inputString (text) via index
    let charCode = char.charCodeAt(0) // get ascii code from character

    if (charCode >= 65 && charCode <= 90) { //checks if character is part of the capital alphabet
        let shiftedCode = ((charCode - 65 + shift) % 26 + 26) % 26 + 65; // get the charCode to an equal point 0-25 = 26 letters, schift letters add ascii code 
        char = String.fromCharCode(shiftedCode); // change ascii code into new character
    } else if (charCode >= 97 && charCode <= 122) { //checks if character is part of the lower alphabet
        let shiftedCode = ((charCode - 97 + shift) % 26 + 26) % 26 + 97; // get the charCode to an equal point 0-25 = 26 letters, schift letters add ascii code 
        char = String.fromCharCode(shiftedCode); // change ascii code into new character
    }

    // add new character to result
    result += char; 
  }

  // return result
  return result;
}

//start function
const encrypted = caesarCipher(inputString, shift); // start function and safed in variable
console.log(encrypted); // print result
  process.exit(0); // exit script with no error

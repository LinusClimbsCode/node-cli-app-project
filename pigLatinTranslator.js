// get input after "node pigLatinTranslator
const inputArray = process.argv.slice(2); // get only the input after ....js
const outputArray = []

console.log(inputArray)

// checks input lenght if any input is given
if (inputArray.length == 0) {
    console.log("You didn't enter a phrase, please restart and try again"); // error message 
    process.exit(1); // exit script 
}

// list of vowel and consonant
const vowel = ["a", "e", "i", "o", "u"];

const consonant = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "z",
];

// loop over each word in input array
inputArray.forEach((input) => {
  let word = input;
  let isUpperCase = false;

  // Check if the first character is uppercase and set isUpperCase true and set word lowerCase
  if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
    isUpperCase = true;
    word = word.toLowerCase();
  }

  // checks the first two letters for vowal and consonant 
    if (vowel.includes(word[0])) {
    word = word + "way";
    } else if (
    consonant.includes(word[0]) &&
    consonant.includes(word[1])
    ) {
    word = word.slice(2) + word.slice(0, 2) + "ay";
    } else if (
    consonant.includes(word[0]) &&
    vowel.includes(word[1])
    ) {
    word = word.slice(1) + word[0] + "ay";
    }

    if (isUpperCase) {
        word.toUpperCase()
    }

    outputArray.push(word)
});

const outputString = outputArray.toString().replace(/,/g, " ")

console.log(outputString)
process.exit(1); // exit script

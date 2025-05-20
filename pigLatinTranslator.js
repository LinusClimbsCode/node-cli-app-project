// get input after "node pigLatinTranslator
const inputArray = process.argv.slice(2);
const outputArray = []

console.log(inputArray)

if (inputArray.length == 0) {
    console.log("You didn't enter a phrase, please restart and try again");
}

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

inputArray.forEach((input) => {
  let word = input;
  let isUpperCase = false;

  // Check if the first character is uppercase
  if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
    isUpperCase = true;
    word = word.toLowerCase();
  }

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

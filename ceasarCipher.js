const arguments = process.argv.slice(2);

const shift = parseInt(arguments.pop()); 

const inputString = arguments.join(" ");


if (!input || isNaN(shift)) {
  console.log("Wrong input. How to: node caesarCipher.js \"your message\" shift");
  process.exit(1);
}

function caesarCipher(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let charCode = char.charCodeAt(0)

    if (charCode >= 65 && charCode <= 90) {
        let shiftedCode = ((charCode - 65 + shift) % 26 + 26) % 26 + 65;
        char = String.fromCharCode(shiftedCode);
    } else if (charCode >= 97 && charCode <= 122) {
        let shiftedCode = ((charCode - 97 + shift) % 26 + 26) % 26 + 97;
        char = String.fromCharCode(shiftedCode);
    }

    result += char;
  }

  return result;
}


const encrypted = caesarCipher(inputString, shift);
console.log(encrypted);

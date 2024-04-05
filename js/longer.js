const sentence = "The USA's capital is Washington";
const words = sentence.split(" ");
let longestWord = "";

for (let word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(longestWord);

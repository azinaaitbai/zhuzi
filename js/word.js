function getLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  console.log(longestWord);
}

getLongestWord("i am a student hgfjthgfyly");

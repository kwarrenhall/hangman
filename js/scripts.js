function HangMan(word) {
  this.word = word;
}

// passed test prototype for specific word
HangMan.prototype.randomWord = function() {
  return this.word;
};

HangMan.prototype.getLength = function() {
  return this.word.length;
};

// HangMan.prototype.randomWord = function() {
//   var wordSelector = ["labrador", "poodle", "boston terrier"];
//     var randomNum = Math.floor((Math.random() * 3));
//       return wordSelector[randomNum];
// }

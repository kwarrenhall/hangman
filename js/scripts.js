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

// interface
debugger;
var userInput = "a";
var ourWord = "labrador";
userInput = userInput.toLowerCase();
var outPut;
for (var i = 0; i < ourWord.length; i++) {
  if (userInput === ourWord.charAt(i)) {
    // console.log(ourWord.charAt([i]))
    // outPut = ourWord.replace(/[userInput]/g, ourWord.charAt([i]));
    console.log("test pass")
  }
}


// HangMan.prototype.randomWord = function() {
//   var wordSelector = ["labrador", "poodle", "boston terrier"];
//     var randomNum = Math.floor((Math.random() * 3));
//       return wordSelector[randomNum];
// }

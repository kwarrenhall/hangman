function HangMan(word) {
  this.word = word;
}

// interface
debugger;

var blanks = [];
blanks = ourword.length;
var userInput = "a";
var ourWord = "labrador";
userInput = userInput.toLowerCase();
var outPut;
for (var i = 0; i < ourWord.length; i++) {
  if (userInput === ourWord.charAt(i)) {
    outPut = letters.push(i)
  }
}

var userInput;
var blanks = [];
var letters = [];

var randomWord = function() {
  var wordSelector = ["labrador", "poodle", "boston terrier"];
  var randomNum = Math.floor((Math.random() * 3));
  var randomWord =  wordSelector[randomNum];
  var letters = []
    for (var i = 0; i < randomWord.length; i++) {
      letters = randomWord.split("");
    }
  return letters;
};
 blanks.length = randomWord().length;
 for (var i = 0; i < randomWord.length; i++) {
   if (userInput === randomWord.charAt(i)) {
     blanks[i] = randomWord.charAt(i);
   };
 };

// var randomWord = "cat";
// var letters = []
//   for (var i = 0; i < randomWord.length; i++) {
//     letters = randomWord.split("");
//   }

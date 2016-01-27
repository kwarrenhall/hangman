
describe("HangMan", function(){
  it("will return a word", function() {
    var testHangMan = new HangMan("dog");
    expect(testHangMan.word).to.equal("dog");
  });

  it("will return a word", function() {
    var testHangMan = new HangMan("dog");
    expect(testHangMan.randomWord()).to.equal("dog");
  });

  it("will determine the length of selected word", function() {
    var testHangMan = new HangMan("dog");
    expect(testHangMan.getLength()).to.equal(3);
  });
  
});




 // script for random word selector
  //  it("will randomly a word from array with working prototype", function() {
  //    var testHangMan = new HangMan(["labrador", "poodle", "boston terrier"]);
  //    expect(testHangMan.randomWord()).to.equal("labrador" || "poodle" || "boston terrier");
  //  });






// describe('vowelReplace', function() {
//   it("will replace vowel a with -", function() {
//     expect(vowelReplace("a")).to.equal("-");
//   });

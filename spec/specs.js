
describe("HangMan", function(){
   it("will randomly select a word from the array", function() {
   var testHangMan = new HangMan("dog");
     expect(testHangMan.word).to.equal("dog");
   });
});


// describe('vowelReplace', function() {
//   it("will replace vowel a with -", function() {
//     expect(vowelReplace("a")).to.equal("-");
//   });

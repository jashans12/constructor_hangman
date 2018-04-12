var Letter = require("./Letter.js")
var letterObj = [];

var a = new Letter("a");
a.check();
a.reveal();

var b = new Letter("b");
b.check();
b.reveal();

var Word = function(word) {
// An array of new Letter objects representing the letters of the underlying word

    this.word = word;
    this.wordThing = function(word) {
        for (let i = 0; i < this.word.length; i++) {
            const newObj = new Letter(this.word[i]);
            letterObj.push(newObj)
            console.log(newObj.storeLetter + ",");
        }
    }
// A function that returns a string representing the word. 

//This should call the function on each letter object 
//(the first function defined in Letter.js) that displays 
//the character or an underscore 

//and concatenate those together.

// A function that takes a character as an argument 

//and calls the guess function on each letter object (the second function defined in Letter.js)
};

var quiz = new Word("quiz");
console.log(quiz);
quiz.wordThing();
var test = function() {
    for (let j = 0; j < letterObj.length; j++) {
    console.log(letterObj[j].storeLetter);
    }
}
test();
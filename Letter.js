var Letter = function(storeLetter) {
    // A string value to store the underlying character for the letter
    this.storeLetter = storeLetter;
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    // A function that returns 
    this.reveal = function() {
    //the underlying character if the letter has been guessed, 
        if (this.guessed === true) {
            console.log(this.storeLetter + " ")
            return this.storeLetter + " ";
        }
    //or a placeholder (like an underscore) if the letter has not been guessed
        // else {
            console.log("_ ")
            return "_ ";
        //}
    };
    // A function that takes a character as an argument 
    this.check = function() {
        var char = "a";
    //and checks it against the underlying character, 
        if (char === this.storeLetter) {
    //updating the stored boolean value to true if it was guessed correctly
            this.guessed = true;
            console.log("True! Nice!")
        }
        else {
            console.log("Darn, it's wrong!");
        }
    }
};

module.exports = Letter;

// var a = new Letter("a");
// a.check();
// a.reveal();

// var b = new Letter("b");
// b.check();
// b.reveal();
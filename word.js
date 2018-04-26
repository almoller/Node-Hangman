var letter = require("./letter.js");

function Word() {
    this.wordLetters = [];
    this.formWord = function(letter) {
        this.wordLetters.Push(new Letter(letter));
    };
    for (var i = 0; i < this.wordLetters.length; i++) {
        var displayWord = (this.wordLetters[i].returnLetter() + " ");
    }
};

function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.returnLetter = function () {
        if (this.guessed) {
            return this.letter + " ";
        } else if (this.letter === " ") {
            return " ";
        } else {
            return "_ ";
        }
    }
    this.checkLetter = function (inputLetter) {
        if (inputLetter.toUpperCase() === this.letter.toUpperCase()) {
            this.guessed = true;
        } else if (this.letter === " ") {
            this.guessed = true;
        } return this.guessed;
    }
}

module.exports = Letter;
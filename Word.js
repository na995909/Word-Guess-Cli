var Letter = require("./Letter.js");

function Word (string) {
	this.letters = new Array();

	var array = string.split("");
	for(var i =0; i < array.length; i++) {
		var l = new Letter(array[i]);
		this.letters.push(l);
	}

	this.displayWord = function () {
		var result = "";
		for (var i =0; i < this.letters.length; i++) {
			result += this.letters[i].display();
		}
		return result;
	} 

	this.guess = function (character) {
		var any_guess = false;
		var num_of_correct = 0;
		for (var i =0; i < this.letters.length; i++) {
			if(this.letters[i].guessed)
				num_of_correct ++;
		}
		for (var i =0; i < this.letters.length; i++) {
			var guessed = this.letters[i].guess(character);
			if(guessed){
				num_of_correct --;
			}
			any_guess = any_guess || guessed;
		}

		if(any_guess){
			console.log("CORRECT!!!");
		} else {
			console.log("INCORRECT!!!");
			return 1;
		}

		if(num_of_correct < 0){
			return 1;
		}

		return 0;
	}

	this.isGuessed =  function(){
		var res = true;
		for (var i =0; i < this.letters.length; i++) {
			res = res && this.letters[i].guessed;
		}
		return res;
	}

}

/*
var w = new Word ("abc");
console.log(w.displayWord());
w.guess("a");
console.log(w.displayWord());
*/

module.exports =  Word;

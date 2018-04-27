function Letter (character) {
	this.character = character;
	this.guessed = false;
	this.display = function () {
	if (this.guessed) {
	   return this.character;
	} else {
		return "_";
	} 

	};
	this.guess = function (userGuess) {
		var res = this.character === userGuess;
     	this.guessed = this.guessed || res;
     	return res;
    }

}


module.exports =  Letter;

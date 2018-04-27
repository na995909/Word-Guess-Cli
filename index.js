var Word = require("./Word.js");
var inquirer = require('inquirer');
var words = ["apple","pear","grape","orange","kiwi"];
var attempts = 10;

var w = "";


function initWord(){
	var index = Math.floor(Math.random()*5);
	w = new Word(words[index]);
	attempts = 10;
	console.log(w.displayWord());
}

initWord();
ask();

function ask(){
	inquirer.prompt([{
	      type: 'input',
	      name: 'guess',
	      message: 'Guess letter, attempts remained ' + attempts,
	      default: ''
	    }]).then(answers => {
	    	var res = w.guess(answers.guess);
	    	console.log(w.displayWord());
			attempts = attempts - res;
			if(attempts > 0 && !w.isGuessed()){
				ask();
			}
			else if(w.isGuessed()){
				console.log("You got it right!!! Next Word.");
				initWord();
				ask();
			} else {
				console.log("You got it wrong!!! Next Word.");
				initWord();
				ask();
			}
		});
}

var word = require('./Word.js');

var inquirer = require('inquirer');

let wordList = ['programmer', 'constructor', 'javascript', 'variable'];
let blanksMixed = [];

newGame();

function newGame() {
    inquirer.prompt({
        type: 'confirm',
        message: 'Do you want to start a new game? Yes/No',
        default: true,
        name: 'start'
    }).then(function (answer) {
        if (answer.start) startGame()
        else console.log('Okay, maybe later!')
    })
}

function startGame() {
    console.log("Let's start!");
    // picks word randomly from wordList
    currentWord = wordList[Math.random() * wordList];
    // pass word through Word constructor
    new Word(currentWord);
    // use new Word object to build _ _ _ _ and console log
    for (i in currentWord) {
        blanksMixed.push(currentWord[i].placeholder)
    }
    console.log(blanksMixed)
}

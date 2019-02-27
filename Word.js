var letter = require ('./Letter.js');

currentWord = [];

// constructor that builds words from letters
function Word(word) {
    for ( i=0 ; i<=word.length ; i++ ){
        let char = new Letter(word[i])
        currentWord.push(char)
    }
};

module.exports =  Word

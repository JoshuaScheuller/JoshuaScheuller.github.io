const alphabet = [
    "a","b","c","d","e","f","g",
    "h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u",
    "v","w","x","y","z"
]
const threeLetterWords = [
    "the", "and", "for", "are", "but", "not", "you", 
    "all", "any", "can", "had", "her", "was", "one", 
    "our", "out", "day", "get", "has", "him", "his", 
    "how", "man", "new", "now", "old", "see", "two", 
    "way", "who", "boy", "did", "its", "let", "put", 
    "say", "she", "too", "use"
]
const fourLetterWords = [
    "with", "have", "this", "will", "your", "from", "they", "want",
    "been", "good", "much", "some", "very"
]
const fiveLetterWords = [
    "movie", "solve", "elbow", "ditch", "proud", "whole", "ready",
    "sleep", "ankle", "swear", "quote", "funny", "heart", "screw",
    "clock", "sheep", "rugby"
]
const sixLetterWords = [
    "nature", "collar", "gossip", "worker", "stitch", "stress",
    "buffet", "glance", "cancel", "crouch"
]
const sevenLetterWords = [
    "healthy", "ceiling", "fiction", "justice", "urgency", "leaflet",
    "program", "nuclear", "overeat", "surface", "maximum", "replace"
]
function threeLetter(){
    var wordThree = "";
    for (let i = 1; i <= 3; i++) {
        wordThree += generateRandomLetter();
      }
    document.getElementById("result").innerHTML = wordThree;
}
function fourLetter(){
    var wordFour = "";
    for (let i = 1; i <= 4; i++) {
        wordFour += generateRandomLetter();
      }
    document.getElementById("result").innerHTML = wordFour;
}
function fiveLetter(){
    var wordFive = "";
    for (let i = 1; i <= 5; i++) {
        wordFive += generateRandomLetter();
      }
    document.getElementById("result").innerHTML = wordFive;
}
function sixLetter(){
    var wordSix = "";
    for (let i = 1; i <= 6; i++) {
        wordSix += generateRandomLetter();
      }
    document.getElementById("result").innerHTML = wordSix;
}
function sevenLetter(){
    var wordSeven = "";
    for (let i = 1; i <= 7; i++) {
        wordSeven += generateRandomLetter();
      }
    document.getElementById("result").innerHTML = wordSeven;
}
function threeWord(){
    var realThree = ""
    realThree += generateRandomThreeLetterWord();
    document.getElementById("word").innerHTML = realThree;
}
function fourWord(){
    var realFour = ""
    realFour += generateRandomFourLetterWord();
    document.getElementById("word").innerHTML = realFour;
}
function fiveWord(){
    var realFive = ""
    realFive += generateRandomFiveLetterWord();
    document.getElementById("word").innerHTML = realFive;
}
function sixWord(){
    var realSix = ""
    realSix += generateRandomSixLetterWord();
    document.getElementById("word").innerHTML = realSix;
}
function sevenWord(){
    var realSeven = ""
    realSeven += generateRandomSevenLetterWord();
    document.getElementById("word").innerHTML = realSeven;
}
function generateRandomLetter(){
    const randomElement = alphabet[Math.floor(Math.random() * alphabet.length)];
    return randomElement
}
function generateRandomThreeLetterWord(){
    const randomElement = threeLetterWords[Math.floor(Math.random() * threeLetterWords.length)];
    return randomElement
}
function generateRandomFourLetterWord(){
    const randomElement = fourLetterWords[Math.floor(Math.random() * fourLetterWords.length)];
    return randomElement
}
function generateRandomFiveLetterWord(){
    const randomElement = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
    return randomElement
}
function generateRandomSixLetterWord(){
    const randomElement = sixLetterWords[Math.floor(Math.random() * sixLetterWords.length)];
    return randomElement
}
function generateRandomSevenLetterWord(){
    const randomElement = sevenLetterWords[Math.floor(Math.random() * sevenLetterWords.length)];
    return randomElement
}
/*
If you are looking at this code you are probably cheating
*/
/*
                                                            |
                                                            \
                                                             |
                                                             /
                                                            /
                                                           /
                                                           |
                                                           /
                                                          /
                                                          |
                                                        OOOOOO
                                                      Oo      OO
                                                      O        O
                                                      OO      OO
                                                       OOOOOOO
*/                                              
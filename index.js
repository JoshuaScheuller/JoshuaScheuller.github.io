const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function threeLetter(){
    var wordThree = "";
    for (let i = 1; i <= 3; i++) {
        wordThree += generateRandomLetter();
      }
    document.getElementById("result").innerHTML = wordThree;
}
function fourLetter(){
    var wordFour = randomFour();
}
function fiveLetter(){
    var wordFive = randomFive();
}
function sixLetter(){
    var wordSix = randomSix();
}
function sevenLetter(){
    var wordSeven = randomSeven();
}
function generateRandomLetter(){
    const randomElement = alphabet[Math.floor(Math.random() * alphabet.length)];
    return randomElement
}
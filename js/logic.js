let gamesWon = 0;
let gamesLost = 0;
let gamesPlayed = 0;
let displayWon = document.getElementById("won");
let displayLost = document.getElementById("lost");
let displayPlayed = document.getElementById("played"); 

function flipCoin(side) {
    let choice = document.getElementById("choice") // players selection (button choice)
    let result = document.getElementById("result") // game result
    let flip = document.getElementById("flip") // what the coin landed on
    let rand = Math.ceil(Math.random() * 2) // random computer flip

    if (rand == 1) {
        flip.innerText = "Heads"
    } else {
        flip.innerText = "Tails"
    }

    let status
    if (side === flip.innerText) {
        status = "Won"
        gamesWon++ // increment the numbe of wins
    } else {
        status = "Lost"
        gamesLost++;
    }

    gamesPlayed++

    choice.innerText = side // display what the player chose 
    result.innerText = status // display if the player won or lost
    displayWon.innerText = gamesWon; // display the current number of wins
    displayLost.innerText = gamesLost; // display the current number of losses
    displayPlayed.innerText = gamesPlayed; // displays number of games played
}

function resetScore() {
  gamesWon = 0;
  gamesLost = 0;
  gamesPlayed = 0;
  displayWon.innerText = gamesWon; // display the current number of wins
  displayLost.innerText = gamesLost; // display the current number of losses
  displayPlayed.innerText = gamesPlayed; // displays number of games played
}
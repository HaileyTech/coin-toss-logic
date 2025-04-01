// function flipCoin(x) {
//     let pick = x; // pick is set to the passed-in parameter (from html)
//     let choice = document.getElementById('choice'); // to show player choice
//     let flip = document.getElementById('flip'); // to show flip result
//     let result = document.getElementById('result'); // to show game result

//     // Determines the face of the toss
//     let randNum = Math.ceil(Math.random() * 2); // randomly a 1 or 2
//     let toss; // to hold the toss result

//     if (randNum === 1) {
//         toss = 'heads';
//     } else {
//         toss = 'tails';
//     }

//     // determines the result of guess
//     let status; // to hold the result of the guess
//     if (pick === toss ) {
//         status = "won";
//     } else {
//         status = 'lost';
//     }

//     // read-outs of all the results
//     choice.innerText = pick;
//     flip.innerText = toss;
//     result.innerText = status;
// }

// // Shows how to pass a paremeter
// function flipCoin(pick) {
//     let choice = document.getElementById('choice');
//     choice.innerText = pick;
// }

// function flipCoin() {
//     let display = document.getElementById('flip');
//     let randNum = Math.floor(Math.random() * 2) + 1;
//     let toss;
//     if (randNum == 1) {
//         toss = 'tails';
//     } else {
//         toss = 'heads';
//     }
//     display.innerText = toss;
//     console.log(randNum);
// }

// function flipCoin() {
//     let display = document.getElementById('flip');
//     let randNum = Math.floor(Math.random() * 2) + 1;
//     display.innerText = randNum;
//     console.log(randNum);
// }

// function flipCoin() {
//     let display = document.getElementById('flip');
//     // let randNum = Math.ceil(Math.random() * 4); // --> 1 to 4
//     // let randNum = Math.ceil(Math.random() * 2); // --> 1 or 2
//     // let randNum = Math.floor(Math.random() * 2); // --> 0 or 1
//     // let randNum = Math.ceil(Math.random()); // rounds up to integer
//     // let randNum = Math.floor(Math.random()); // rounds down to integer
//     let randNum = Math.random(); // generates digits between 0 and 1
//     display.innerText = randNum;
    
//     // logs randNum in the console (browser inspector)
//     console.log(randNum);
// }

function flipCoin(side) {
    
    let choice = document.getElementById("choice"); // players selection (button choice)

    let result = document.getElementById("result"); // game result

    let flip = document.getElementById("flip"); // what the coin landed on
    let rand = Math.ceil(Math.random() * 2); // random computer flip

    if (rand == 1) {
        flip.innerText = "Heads"
    } else {
        flip.innerText = "Tails"
    }

    let status
    if (side === flip.innerText) {
        status = "Won"
    } else {
        status = "Lost"
    }

    choice.innerText = side; // display what the player chose 
    result.innerText = status; // display if the player won or lost
}
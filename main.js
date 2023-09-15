/*
Alex
Marco
Kit
*/

//Set scores to 0
let scoreP1 = 0;
let scoreP2 = 0;
//Welcome Players
alert("Welcome to Rock Paper Scissors \n Two player game");

//Player Name Prompts
const nameP1 = prompt("Player 1 Name");
const nameP2 = prompt("Player 2 Name");

// Alert for rules
alert("Rules for Rock Paper Scissors:\n-Rock beats     Scissors\n-Scissors beats Paper\n-Paper beats Rock");
alert("How to Play:\nType 'rock' 'paper' or 'scissors' on your turn.");

//Loop for move/input
while(true){

    let moveP1 = prompt(`${nameP1}\nChoose your move`);
    let moveP2 = prompt(`${nameP2}\nChoose your move`);

    if(moveP1 === "rock" && moveP2 === "scissors" || 
    moveP1 === "scissors" && moveP2 === "paper" ||
    moveP1 === "paper" && moveP2 === "rock") {
        scoreP1 ++; 
    }
        else if(moveP1 === "rock" && moveP2 === "paper" || 
        moveP1 === "scissors" && moveP2 === "rock" ||
        moveP1 === "paper" && moveP2 === "scissors") {
            scoreP2 ++;
        }
            else{}
    
    console.log(`P1 score: ${scoreP1} P2 score: ${scoreP2}`);
    
   let keepPlay = confirm("Do you want to continue?");
   if(keepPlay === false) break;
}
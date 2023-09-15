/*
Alex
Marco
Kit
*/

//Set scores to 0
let scoreP1 = 0;
let scoreP2 = 0;
let moveP1;
let moveP2;

//Welcome Players
alert("Welcome to Rock Paper Scissors \n Two player game");

//Player Name Prompts
const nameP1 = prompt("Player 1 Name");
if (nameP1 === null) {
  nameP1 = "Player 1";
}
const nameP2 = prompt("Player 2 Name");
if (nameP2 === null) {
  nameP2 = "Player 1";
}

// Alert for rules
alert("Rules for Rock Paper Scissors:\n-Rock beats Scissors\n-Scissors beats Paper\n-Paper beats Rock");
alert("How to Play:\nType 'rock' 'paper' or 'scissors' on your turn.");

//Loop for move/input
while(true){

  do {
    moveP1 = prompt(`${nameP1}\nChoose your move`);
    moveP1 = moveP1.toLowerCase();
  }
  while (!((moveP1 === "rock") || (moveP1 === "paper") || (moveP1 === "scissors")));

  do {
    moveP2 = prompt(`${nameP2}\nChoose your move`);
    moveP2 = moveP2.toLowerCase();
  }
  while (!((moveP2 === "rock") || (moveP2 === "paper") || (moveP2 === "scissors"))); 

    if(moveP1 === "rock" && moveP2 === "scissors" || 
    moveP1 === "scissors" && moveP2 === "paper" ||
    moveP1 === "paper" && moveP2 === "rock") {
        scoreP1 ++; 
        alert(`${nameP1} played ${moveP1}, ${nameP2} played ${moveP2}\n${nameP1} Wins!`);

        alert(`${nameP1}'s score: ${scoreP1} - ${nameP2}'s score: ${scoreP2}`);
    }
        else if(moveP1 === "rock" && moveP2 === "paper" || 
        moveP1 === "scissors" && moveP2 === "rock" ||
        moveP1 === "paper" && moveP2 === "scissors") {
            scoreP2 ++;
        alert(`${nameP1} played ${moveP1}, ${nameP2} played ${moveP2}\n${nameP2} Wins!`);

        alert(`${nameP1}'s score: ${scoreP1} - ${nameP2}'s score: ${scoreP2}`);
        }
            else{
              alert(`${nameP1} played ${moveP1}, ${nameP2} played ${moveP2}\nIt's a draw!`);

              alert(`${nameP1}'s score: ${scoreP1} - ${nameP2}'s score: ${scoreP2}`);
            }
    
    console.log(`P1 score: ${scoreP1} P2 score: ${scoreP2}`);
    
   let keepPlay = confirm("Do you want to continue?");
   if(keepPlay === false) break;
}
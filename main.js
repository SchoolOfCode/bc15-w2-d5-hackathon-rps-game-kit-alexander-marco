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
let nameP1;
let nameP2 = "computer";
let gameType;

//Function to ask players which move they make

function functionMove(nameP){
        //Loop to make sure that move1 is valid
  do {
    moveP = prompt(`${nameP}\nChoose your move`);
    moveP = moveP.toLowerCase();
  }
  while (!((moveP === "rock") || (moveP === "paper") || (moveP === "scissors")));
  return moveP;
}

//Function to check who wins

function functionCheck() {

  //Condition to player1 wins
  if(((moveP1 === "rock") && (moveP2 === "scissors")) ||
  ((moveP1 === "scissors") && (moveP2 === "paper")) ||
  ((moveP1 === "paper") && (moveP2 === "rock"))) {
  
      scoreP1 ++; 

      alert(`${nameP1} played ${moveP1}, ${nameP2} played ${moveP2}\n${nameP1} Wins!`);
      alert(`${nameP1}'s score: ${scoreP1} - ${nameP2}'s score: ${scoreP2}`);
}
//Condition to player2 wins
  else if(((moveP1 === "rock") && (moveP2 === "paper")) || 
          ((moveP1 === "scissors") && (moveP2 === "rock")) ||
          ((moveP1 === "paper") && (moveP2 === "scissors"))) {
          
              scoreP2 ++;
          
              alert(`${nameP1} played ${moveP1}, ${nameP2} played ${moveP2}\n${nameP2} Wins!`);
              alert(`${nameP1}'s score: ${scoreP1} - ${nameP2}'s score: ${scoreP2}`);
  }
  //Condition draw
          else{

              alert(`${nameP1} played ${moveP1}, ${nameP2} played ${moveP2}\nIt's a draw!`);
              alert(`${nameP1}'s score: ${scoreP1} - ${nameP2}'s score: ${scoreP2}`);
      }

}

//Welcome Players
alert("Welcome to Rock Paper Scissors \n Two player game");

gameType = prompt("Type '1' for a 1-player game \nType '2' for a two-player game");

if (gameType == "2") {

//Player Name Prompts
nameP1 = prompt("Player 1 Name");
if (nameP1 === null) {
  nameP1 = "Player 1";
}
nameP2 = prompt("Player 2 Name");
if (nameP2 === null) {
  nameP2 = "Player 1";
}

// Alert for rules
alert("Rules for Rock Paper Scissors:\n-Rock beats Scissors\n-Scissors beats Paper\n-Paper beats Rock");
alert("How to Play:\nType 'rock' 'paper' or 'scissors' on your turn.");

//Loop for move/input
while(true){

    moveP1 = functionMove(nameP1);
    moveP2 = functionMove(nameP2);

    functionCheck();

    //Ask to continue or not, eventually goes out of the loop move/input
   let keepPlay = confirm("Do you want to continue?");
   if(keepPlay === false) break;
}
}

if (gameType == "1") {
    //Player Name Prompts
    nameP1 = prompt("Player 1 Name");
    if (nameP1 === null) {
    nameP1 = "Player 1";
    }
    nameP2 = "computer";
}

//Loop for move/input
while(true){

    moveP1 = functionMove(nameP1);
    // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
const randomDecimal = Math.random();
// Map the random decimal to 1, 2, or 3
let randomNumber;
if (randomDecimal < 0.33) {
  randomNumber = 1;
} else if (randomDecimal < 0.67) {
  randomNumber = 2;
} else {
  randomNumber = 3;
}
    switch(randomNumber) {
        case 1:
            moveP2 = "rock";
            break;
        case 2: 
            moveP2 = "paper";
            break;
        case 3:
            moveP2 = "scissors";
            break;
    }

    functionCheck();

    //Ask to continue or not, eventually goes out of the loop move/input
   let keepPlay = confirm("Do you want to continue?");
   if(keepPlay === false) break;


}



let playerScore = 0;
let computerScore = 0;
rounds = parseInt(prompt("Please enter number of rounds: "));

function logText(e){
    playerMove = e.target.id;
    console.log(playerMove);
    document.getElementById("playMove").textContent = `Player's Move: ${playerMove}`;
    game();
}

function indivRound(){
    window.addEventListener('click', logText);
}

for (let i = 0; i < rounds; i++) {
    indivRound();
    continue;
}

function game(){
    computerMove = getComputerChoice();
    roundResult = playRound(playerMove,computerMove);
    document.getElementById("mid").textContent = roundResult;
    if (roundResult.match("Win") !== null){
        playerScore++;
        document.getElementById("playerScoreCur").textContent = `Player's Score: ${playerScore}`;
    } else if (roundResult.match("Lose") !== null){
        computerScore++;
        document.getElementById("computerScoreCur").textContent = `Computer's Score: ${computerScore}`;
    }
    if (playerScore + computerScore === rounds) matchstatus(playerScore, computerScore);
}

function getComputerChoice(){
    let arr = ["Rock", "Paper", "Scissors"];
    computerMove = (arr[(Math.floor(Math.random() * arr.length))]);
    document.getElementById("compMove").textContent = `Computer's Move: ${computerMove}`;
    return computerMove;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Rock"){
        return("Draw! No winner for this round");
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return("You Win! Rock beats Scissors");
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return("You Lose! Paper beats Rock");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        return("Draw! No winner for this round");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return("You Win! Scissors beats Paper");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return("You Lose! Rock beats Scissors");
    }
    else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return("Draw! No winner for this round");
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return("You Win! Paper beats Scissors");
    }            
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return("You Lose! Rock beats Paper");
    } 
}   

function remEventListener(){
    window.removeEventListener('click', logText);
}

function matchstatus(){
    if (computerScore < playerScore){
        document.getElementById("winner").textContent = "Player Wins!";
    } else{
        document.getElementById("winner").textContent = "Computer Wins!";
    }
    remEventListener();
}



// function playerSelection(){
//     initialPlayerMove = prompt("Your move: ");
//     while (true){
//     playerMove = initialPlayerMove.toLowerCase();
//     firstChar = playerMove.charAt(0);
//     playerMove = firstChar.toUpperCase() + playerMove.slice(1);
//     if (playerMove === "Rock" || playerMove === "Scissors" || playerMove === "Paper"){
//         console.log("Your Move: ", playerMove);
//         return playerMove;
//         break
//     }
//     initialPlayerMove = prompt("Invalid Input. Choose from Rock, Paper, or Scissors: ")
//     } 
// }
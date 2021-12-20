let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const reset_button = document.getElementById("newgame")



reset_button.addEventListener('click', function(){
    playerScore_span.innerHTML = "0";
    compScore_span.innerHTML = "0";
    playerScore = 0;
    compScore = 0;
})

function computerPlay(){
    const compOptions = ["rock", "paper", "scissors"]
  
    let compAnswer = compOptions[Math.floor(Math.random()*compOptions.length)];
    return compAnswer
}

function convertWord(choice){
    if(choice === "rock"){
        return "Rock";
    } else if(choice === "paper"){
        return "Paper";
    } else {
         return "Scissors";
    }
}

function win(playerSelection, computerSelection){
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = "(Player) " + convertWord(playerSelection) + " beats " + "(Computer) " + convertWord(computerSelection) + ". You win!";
    document.getElementById(playerSelection).classList.add('greenGlow');
    setTimeout(function(){document.getElementById(playerSelection).classList.remove('greenGlow')}, 1000);
}

function lose(playerSelection, computerSelection){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "(Computer) " + convertWord(computerSelection) + " beats " + "(Player) " + convertWord(playerSelection) + ". Computer wins!";
    document.getElementById(playerSelection).classList.add('redGlow');
    setTimeout(function(){document.getElementById(playerSelection).classList.remove('redGlow')}, 1000);
}

function tie(playerSelection){
    result_p.innerHTML = "Its a draw."
    document.getElementById(playerSelection).classList.add('blueGlow');
    setTimeout(function(){document.getElementById(playerSelection).classList.remove('blueGlow')}, 1000);
}

function play_Round(playerSelection) {
    const computerSelection = computerPlay();
    
    
    if (playerSelection === 'rock'){
        if (computerSelection === 'scissors') {
            win(playerSelection, computerSelection);
        } else if( computerSelection === 'paper'){
            lose(playerSelection,computerSelection);
        } else{
            tie(playerSelection);
        }
    }
    
    else if (playerSelection === 'scissors'){
        if (computerSelection === 'paper') {
            win(playerSelection, computerSelection);    
        }else if (computerSelection === 'rock'){
            lose(playerSelection,computerSelection);
        }else {
            tie(playerSelection);
        }
    }
    
    else if (playerSelection === 'paper'){
        if(computerSelection === 'rock') {
            win(playerSelection, computerSelection);
        } else if(computerSelection === 'scissors'){
            lose(playerSelection,computerSelection);
        } else {
            tie(playerSelection);
        }
    }
}




function main(){
    rock_div.addEventListener('click', function(){
        play_Round("rock");
    })
    
    paper_div.addEventListener('click', function(){
        play_Round("paper"); 
    })
    
    scissors_div.addEventListener('click', function(){
        play_Round("scissors");   
    })
   
}
main();
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const outcomeResponse = document.getElementById('gameOutcome');
const restartButton = document.getElementById('restartButton');
let userChoice = '';
let computerChoice = Math.floor(Math.random() * 3) +1;
const rock = 1;
const paper = 2;
const scissors = 3;
console.log(computerChoice);


rockButton.addEventListener('click', e => {
    userChoice = e.target.id
    // console.log(computerChoice);
    computerChoice = e.target.id
    // outcomeResponse.innerText = "Rock button pressed!"
})

paperButton.addEventListener('click', e => {
    userChoice = e.target.id
    // outcomeResponse.innerText = "Paper button pressed!"
})

scissorsButton.addEventListener('click', e => {
    userChoice = e.target.id
    // outcomeResponse.innerText = "Scissors button pressed!"
})

restartButton.addEventListener('click', () => {
    outcomeResponse.innerText = "";
})
//lose function

//outcome

//plan:

/*user presses rock, paper, or scissors button
    save user choice in a variable 
computer chooses rock, paper, or scissors
    randomly choice one of three options 
    save the computer choice 

which option beats what?
display winning outcome to user
user can play again
*/

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const gameOutcome = document.getElementById('gameOutcome');


rockButton.addEventListener('click', () => {
    gameOutcome.innerText = "Rock button pressed!"
})



paperButton.addEventListener('click', () => {
    gameOutcome.innerText = "Paper button pressed!"
})




scissorsButton.addEventListener('click', () => {
    gameOutcome.innerText = "Scissors button pressed!"
})
//lose function

//outcome


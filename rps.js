const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const outcomeResponse = document.getElementById('gameOutcome');
const restartButton = document.getElementById('restartButton');


rockButton.addEventListener('click', () => {
    outcomeResponse.innerText = "Rock button pressed!"
})

paperButton.addEventListener('click', () => {
    outcomeResponse.innerText = "Paper button pressed!"
})

scissorsButton.addEventListener('click', () => {
    outcomeResponse.innerText = "Scissors button pressed!"
})

restartButton.addEventListener('click', () => {
    outcomeResponse.innerText = "";
})
//lose function

//outcome


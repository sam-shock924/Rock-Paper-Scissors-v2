const outcomeResponse = document.getElementById('gameOutcome');
const restartButton = document.getElementById('restartButton');
let userChoice = '';

function computerChoice() {
    const choices = ['rock','paper','scissors'];
    const randomChoice  = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function game(userChoice) {
    const compChoice = ComputerChoice();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, compChoice);
            break; 
    }
}

function changeCase(items) {
    if (items === "rock") return "Rock";
    if (items === "paper") return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) {
    outcomeResponse.innerText = changeCase(userChoice) + " beats " + changeCase(compChoice) + ". " + "Nice!"
}

function lose(userChoice, compChoice) {
    outcomeResponse.innerText = changeCase(userChoice) + " defeats " + changeCase(compChoice) + ". " + "AI wins!"

}
function draw(userChoice, compChoice) {
    outcomeResponse.innerText = "It's a draw!"

}    

const optionButton = document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', e => {
        userChoice = e.target.id
        game(userChoice);
    })
  });


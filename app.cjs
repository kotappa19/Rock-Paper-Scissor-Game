let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.cursor-pointer');
let msg = document.querySelector('#msg');
let userCount = document.querySelector('#user-score');
let compCount = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const idx = Math.floor(Math.random()*3);
    return options[idx];
};

const drawGame = () => {
    console.log('Game was drawn');
    msg.innerText = 'Oh! it is a draw, play again';
    msg.style.backgroundColor = 'blue';
}

const showScore = (userScore, compScore) => {
    userCount.innerText = userScore;
    compCount.innerText = compScore;
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore += 1;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice} :)`;
        msg.style.backgroundColor = 'Green';
    } else {
        compScore += 1;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice} :(`;
        msg.style.backgroundColor = 'Red';
    }
    showScore(userScore, compScore);
}

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        // draw condition
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock') {
            //  paper, scissor
            userWin = compChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper') {
            // rock, scissor
            userWin = compChoice === 'rock' ? true : false;
        } else if(userChoice === 'scissor'){
            // rock, paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
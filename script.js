const displayPlayer1Score = document.getElementById('player1Score');
const displayPlayer2Score = document.getElementById('player2Score');

const displayWinScore = document.querySelector('p span');
const inputScore = document.getElementById('input');
const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
const resetBtn = document.getElementById('reset')

let p1Score = 0;
let p2Score = 0;
const winningScore = 10;
let gameOver = false;

player1Btn.addEventListener('click', () => {
    if (!gameOver) {
        // Data change
        p1Score++;
        processWinner(p1Score, winningScore);

    }
    // Showing changed data
    displayPlayer1Score.innerText = p1Score;
})

player2Btn.addEventListener('click', () => {
    if (!gameOver) {
        // Data change
        p2Score++;
        processWinner(p2Score, winningScore);
    }
    // Showing changed data
    displayPlayer2Score.innerText = p2Score;

})

function processWinner(preScore, winningScore) {
    // Game over
    if (preScore === winningScore) {
        gameOver = true;
        // gameOver != gameOver; // Replace another value

        player1Btn.setAttribute('disabled', 'disabled');
        player2Btn.setAttribute('disabled', 'disabled');
    }
}

resetBtn.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    displayPlayer1Score.innerText = 0;
    displayPlayer2Score.innerText = 0;
    player1Btn.removeAttribute('disabled');
    player2Btn.removeAttribute('disabled');
})
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
        // Game over
        if (p1Score === winningScore) {
            gameOver = true;
            // player1Btn.setAttribute('disabled', 'disabled');
            // player2Btn.setAttribute('disabled', 'disabled');
        }
    }
    // Showing changed data
    displayPlayer1Score.innerText = p1Score;
})

player2Btn.addEventListener('click', () => {
    if (!gameOver) {
        // Data change
        p2Score++;
        // Game over
        if (p2Score === winningScore) {
            gameOver = true;
            // player1Btn.setAttribute('disabled', 'disabled');
            // player2Btn.setAttribute('disabled', 'disabled');
        }
    }
    // Showing changed data
    displayPlayer2Score.innerText = p2Score;

})
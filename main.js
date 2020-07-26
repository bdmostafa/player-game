// Code refactoring with IIFE
(function () {
    const displayPlayer1Score = document.getElementById('player1Score');
    const displayPlayer2Score = document.getElementById('player2Score');

    const displayWinScore = document.querySelector('p span');
    const inputTarget = document.getElementById('inputTarget');
    const inputMin = document.getElementById('inputMin');
    const inputMax = document.getElementById('inputMax');
    const player1Btn = document.getElementById('player1Btn');
    const player2Btn = document.getElementById('player2Btn');
    const resetBtn = document.getElementById('reset')

    let p1Score = 0;
    let p2Score = 0;
    let targetScore = 10;
    let start;
    let end;
    let playerScore;
    let gameOver = false;

    function displayWinningScore() {
        targetScore = Math.floor(inputTarget.value);
        displayWinScore.textContent = targetScore;
        inputTarget.value = '';
        reset();
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        const playerScore = Math.floor(Math.random() * (max - min + 1)) + min;
        return playerScore;
    }

    function processWinner(playerScore, targetScore) {
        if (playerScore === targetScore) {
            if (p1Score === targetScore) displayPlayer1Score.classList.add('winnerColor');
            else displayPlayer2Score.classList.add('winnerColor');

            gameOver = true;
            // gameOver != gameOver; // Replace another value
            player1Btn.setAttribute('disabled', 'disabled');
            player2Btn.setAttribute('disabled', 'disabled');
        }
    }



    function reset() {
        p1Score = 0;
        p2Score = 0;
        gameOver = false;
        displayPlayer1Score.textContent = 0;
        displayPlayer2Score.textContent = 0;
        player1Btn.removeAttribute('disabled');
        player2Btn.removeAttribute('disabled');
        displayPlayer1Score.classList.remove('winnerColor');
        displayPlayer2Score.classList.remove('winnerColor');
    }

    inputTarget.addEventListener('change', displayWinningScore)

    inputMin.addEventListener('change', () => start = Math.floor(inputMin.value))

    inputMax.addEventListener('change', () => end = Math.floor(inputMax.value))

    player1Btn.addEventListener('click', () => {
        if (!gameOver) {
            playerScore = getRandomInt(start, end);
            processWinner(playerScore, targetScore);
        }
        p1Score = playerScore;
        displayPlayer1Score.textContent = playerScore;
    })

    player2Btn.addEventListener('click', () => {
        if (!gameOver) {
            playerScore = getRandomInt(start, end);
            processWinner(playerScore, targetScore);
        }
        p1Score = playerScore;
        displayPlayer2Score.textContent = playerScore;

    })

    resetBtn.addEventListener('click', reset)
})();
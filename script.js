// Code refactoring with IIFE
(function () {
    const displayPlayer1Score = document.getElementById('player1Score');
    const displayPlayer2Score = document.getElementById('player2Score');

    const displayWinScore = document.querySelector('p span');
    const inputScore = document.getElementById('input');
    const player1Btn = document.getElementById('player1Btn');
    const player2Btn = document.getElementById('player2Btn');
    const resetBtn = document.getElementById('reset')

    let p1Score = 0;
    let p2Score = 0;
    let winningScore = 10;
    let gameOver = false;

    function processWinner(preScore, winningScore) {
        // Game over
        if (preScore === winningScore) {
            if (p1Score === winningScore) displayPlayer1Score.classList.add('winnerColor');
            else displayPlayer2Score.classList.add('winnerColor');

            gameOver = true;
            // gameOver != gameOver; // Replace another value
            player1Btn.setAttribute('disabled', 'disabled');
            player2Btn.setAttribute('disabled', 'disabled');
        }
    }

    function displayWinningScore() {
        winningScore = Math.floor(inputScore.value);
        displayWinScore.textContent = winningScore;
        inputScore.value = '';
        reset();
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

    player1Btn.addEventListener('click', () => {
        if (!gameOver) {
            // Data change
            p1Score++;
            processWinner(p1Score, winningScore);
        }
        // Showing changed data
        displayPlayer1Score.textContent = p1Score;
    })

    player2Btn.addEventListener('click', () => {
        if (!gameOver) {
            p2Score++;
            processWinner(p2Score, winningScore);
        }
        displayPlayer2Score.textContent = p2Score;

    })

    inputScore.addEventListener('change', displayWinningScore)

    resetBtn.addEventListener('click', reset)
})();
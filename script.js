const boxes = document.querySelectorAll('.box');
const message = document.getElementById('message');
const playAgainButton = document.getElementById('play-again-button');

let ballIndex = Math.floor(Math.random() * 3);

function checkBox(index) {
    if (index === ballIndex) {
        message.textContent = 'Congratulations! You found Mark!';
        boxes[index].style.backgroundImage = 'url("mark.jpg")'; // Replace "mark.jpg" with your image path
        playAgainButton.style.display = 'block'; // Show the "Play Again" button
    } else {
        message.textContent = 'Oops, Try again.';
        boxes[index].style.backgroundImage = 'url("ced.jpg")';

        // Reset the game automatically after a brief delay (e.g., 1 second)
        setTimeout(resetGame, 1000);
    }

    // Disable further clicks on boxes
    boxes.forEach((box, i) => {
        if (i !== ballIndex) {
            box.style.pointerEvents = 'none';
        }
    });
}

function resetGame() {
    ballIndex = Math.floor(Math.random() * 3);
    boxes.forEach((box, index) => {
        box.style.backgroundColor = '#ccc';
        box.style.backgroundImage = 'none';
        box.style.pointerEvents = 'auto';
    });
    message.textContent = 'Click on a box to find Mark!';
    playAgainButton.style.display = 'none'; // Hide the "Play Again" button
}

resetGame();

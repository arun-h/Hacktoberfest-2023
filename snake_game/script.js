const snake = document.getElementById("snake");
const food = document.getElementById("food");
const gridSize = 20;
let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;
let dx = gridSize;
let dy = 0;
let snakeLength = 1;
const snakeBody = [{ x: snakeX, y: snakeY }];

function getRandomPosition() {
    return Math.floor(Math.random() * gridSize) * gridSize;
}

function updateFoodPosition() {
    foodX = getRandomPosition();
    foodY = getRandomPosition();
    food.style.left = `${foodX}px`;
    food.style.top = `${foodY}px`;
}

function checkCollision() {
    for (let i = 1; i < snakeLength; i++) {
        if (snakeX === snakeBody[i].x && snakeY === snakeBody[i].y) {
            return true;
        }
    }
    return false;
}

function gameLoop() {
    snakeX += dx;
    snakeY += dy;

    if (snakeX < 0) snakeX = gridSize * (gridSize - 1);
    if (snakeX >= gridSize * gridSize) snakeX = 0;
    if (snakeY < 0) snakeY = gridSize * (gridSize - 1);
    if (snakeY >= gridSize * gridSize) snakeY = 0;

    snakeBody.unshift({ x: snakeX, y: snakeY });

    if (snakeX === foodX && snakeY === foodY) {
        snakeLength++;
        updateFoodPosition();
    } else {
        snakeBody.pop();
    }

    if (checkCollision()) {
        alert("Game Over!");
        window.location.reload();
    }

    snake.style.left = `${snakeX}px`;
    snake.style.top = `${snakeY}px`;

    requestAnimationFrame(gameLoop);
}

updateFoodPosition();
gameLoop();

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            if (dx !== gridSize) {
                dx = -gridSize;
                dy = 0;
            }
            break;
        case "ArrowRight":
            if (dx !== -gridSize) {
                dx = gridSize;
                dy = 0;
            }
            break;
        case "ArrowUp":
            if (dy !== gridSize) {
                dx = 0;
                dy = -gridSize;
            }
            break;
        case "ArrowDown":
            if (dy !== -gridSize) {
                dx = 0;
                dy = gridSize;
            }
            break;
    }
});

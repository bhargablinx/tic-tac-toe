const gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

const player1 = {
    name: "Player 1",
    symbol: "X",
    isWinner: false,
};

const player2 = {
    name: "Player 2",
    symbol: "O",
    isWinner: false,
};

let currentPlayer = player1;
let gameCount = 0;
let isGameOver = true;

function checkWinner() {
    // Check all rows
    for (let row = 0; row < 3; row++) {
        if (
            gameBoard[row][0] &&
            gameBoard[row][0] === gameBoard[row][1] &&
            gameBoard[row][0] === gameBoard[row][2]
        ) {
            return gameBoard[row][0]; // Return the winning symbol
        }
    }

    // Check all columns
    for (let col = 0; col < 3; col++) {
        if (
            gameBoard[0][col] &&
            gameBoard[0][col] === gameBoard[1][col] &&
            gameBoard[0][col] === gameBoard[2][col]
        ) {
            return gameBoard[0][col]; // Return the winning symbol
        }
    }

    // Check diagonals
    if (
        gameBoard[0][0] &&
        gameBoard[0][0] === gameBoard[1][1] &&
        gameBoard[0][0] === gameBoard[2][2]
    ) {
        return gameBoard[0][0];
    }
    if (
        gameBoard[0][2] &&
        gameBoard[0][2] === gameBoard[1][1] &&
        gameBoard[0][2] === gameBoard[2][0]
    ) {
        return gameBoard[0][2];
    }
}

function togglePlayer() {
    const player1Chance = document.querySelector(".player1Chance");
    const player2Chance = document.querySelector(".player2Chance");
    if (currentPlayer === player1) {
        currentPlayer = player2;
        player2Chance.classList.remove("text-gray-700");
        player1Chance.classList.add("text-gray-700");
    } else {
        currentPlayer = player1;
        player1Chance.classList.remove("text-gray-700");
        player2Chance.classList.add("text-gray-700");
    }
}

function updateMatrix(cellName, symbol) {
    switch (cellName) {
        case "c00":
            gameBoard[0][0] = symbol;
            break;
        case "c01":
            gameBoard[0][1] = symbol;
            break;
        case "c02":
            gameBoard[0][2] = symbol;
            break;
        case "c10":
            gameBoard[1][0] = symbol;
            break;
        case "c11":
            gameBoard[1][1] = symbol;
            break;
        case "c12":
            gameBoard[1][2] = symbol;
            break;
        case "c20":
            gameBoard[2][0] = symbol;
            break;
        case "c21":
            gameBoard[2][1] = symbol;
            break;
        case "c22":
            gameBoard[2][2] = symbol;
            break;
    }
}

function verifyWinner(sym) {
    if (sym === undefined) {
        return console.log("Game Continues! No winner till now");
    } else if (sym === "X") {
        displayWinner("Player 1");
        player1.isWinner = true;
        isGameOver = true; // Freeze the board
        freezeBoard();
    } else {
        displayWinner("Player 2");
        player2.isWinner = true;
        isGameOver = true; // Freeze the board
        freezeBoard();
    }
}

function checkTie() {
    if (!player1.isWinner && !player2.isWinner && gameCount === 9) {
        isGameOver = true;
        displayTie();
        freezeBoard();
    }
}

function freezeBoard() {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.classList.add("cursor-not-allowed");
    });
}

function displayWinner(winnerName) {
    document.querySelector(".player2Chance").classList.add("hidden");
    document
        .querySelector(".player1Chance")
        .classList.add(
            "text-2xl",
            "animate-bounce",
            "text-green-500",
            "font-bold"
        );
    document.querySelector(
        ".player1Chance"
    ).textContent = `${winnerName} Wins!`;
}

function displayTie() {
    document.querySelector(".player2Chance").classList.add("hidden");
    document
        .querySelector(".player1Chance")
        .classList.add(
            "text-2xl",
            "animate-bounce",
            "text-green-500",
            "font-bold"
        );
    document.querySelector(".player1Chance").textContent = `It's a Tie!`;
}

document.querySelectorAll(".cell").forEach((item) => {
    item.addEventListener("click", (e) => {
        gameCount++;
        if (!isGameOver && e.target.textContent === "") {
            e.target.textContent = currentPlayer.symbol;
            const cellName = e.target.classList[1];
            updateMatrix(cellName, currentPlayer.symbol);
            if (gameCount >= 5) {
                const winningSym = checkWinner();
                verifyWinner(winningSym);
            }
            if (gameCount === 9) checkTie();
            togglePlayer();
        }
    });
});

const startBtn = document.querySelector(".start-btn");
const restartBtn = document.querySelector(".restart-btn");
startBtn.addEventListener("click", () => {
    isGameOver = false;
    restartBtn.classList.remove("hidden");
    startBtn.classList.add("hidden");
});

restartBtn.addEventListener("click", () => {
    gameBoard.forEach((row) => row.fill(""));
    document
        .querySelectorAll(".cell")
        .forEach((cell) => (cell.textContent = ""));
    currentPlayer = player1;
    gameCount = 0;
    isGameOver = false;
    player1.isWinner = false;
    player2.isWinner = false;

    document
        .querySelector(".player1Chance")
        .classList.remove(
            "text-2xl",
            "animate-bounce",
            "text-green-500",
            "font-bold"
        );
    document.querySelector(".player1Chance").textContent = `Player X`;
    document.querySelector(".player2Chance").classList.remove("hidden");
});

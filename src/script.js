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
        console.log("Game Continues! No winner till now");
    } else if (sym === "X") {
        console.log("Player 1 wins");
    } else {
        console.log("Player 2 wins");
    }
}

document.querySelectorAll(".cell").forEach((item) => {
    item.addEventListener("click", (e) => {
        gameCount++;
        if (e.target.textContent === "") {
            e.target.textContent = currentPlayer.symbol;
            const cellName = e.target.classList[1];
            updateMatrix(cellName, currentPlayer.symbol);
            if (gameCount >= 5) {
                const winningSym = checkWinner();
                verifyWinner(winningSym);
            }
            togglePlayer();
        }
    });
});

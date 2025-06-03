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

const currentPlayer = player1;

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

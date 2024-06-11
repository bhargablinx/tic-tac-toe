const gameBoard = [
    ["X","0","X"],
    ["0","X","0"],
    ["0","X","X"]
];

function checkWinner() {
    for (i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][1] == gameBoard[i][2]) {
            return `${gameBoard[i][0]} wins`;
        } else if (gameBoard[0][i] == gameBoard[1][i] && gameBoard[1][i] == gameBoard[2][i]) {
            return `${gameBoard[0][i]} wins`;
        } else if (gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2]) {
            return (`${gameBoard[1][1]} wins`);
        }
    }
    return `Tie!`;
}
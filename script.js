let grid3x3 = [
    [ 'X', 'O', 'X'],
    [ 'O','X' , 'O'],
    [ 'X', '', 'O']
];

let gameboard = { grid: grid3x3, gameStart: false, gameEnd: false };

const players = {
    player1: {
        name: 'player 1',
        sign: 'X'
    },
    player2: {
        name: 'player 2',
        sign: 'O'
    }
}

let currentPlayer = players.player1;

document.querySelectorAll(".cell").forEach((element) => {
    element.addEventListener('click', (e) => {
        if (e.target.textContent != 'X' && e.target.textContent != 'O') {
            e.target.textContent = currentPlayer.sign;
            swapPlayer();
        } else {
            console.log('invalid move');
        }
    })
});

function game() {
    while (!gameboard.gameEnd) {

        // input from player 1
        

        // input from player 2


        checkWinner();
    }
}

function checkWinner() {
    // condition for horizontal elements
    for (let i = 0, j = 0; i < grid3x3.length; i++) {
        if (grid3x3[i][j] == grid3x3[i][j+1] && grid3x3[i][j] == grid3x3[i][j+2]) {
            console.log(`${grid3x3[i][j]} wins`);
            gameboard.gameEnd = true;
            break;
        }
    }

    // condition for vertical elements
    for (let i = 0, j =0; j < grid3x3.length; j++) {
        if (grid3x3[i][j] == grid3x3[i+1][j] && grid3x3[i][j] == grid3x3[i+2][j]) {
            console.log(`${grid3x3[i][j]} wins`);
            gameboard.gameEnd = true;
            break;
        }
    }

    // condition for diagonal elements
    if (grid3x3[0][0] == grid3x3[1][1] && grid3x3[0][0] == grid3x3[2][2]) {
        console.log(`${grid3x3[0][0]} wins`);
        gameboard.gameEnd = true;
    } else if (grid3x3[0][2] == grid3x3[1][1] && grid3x3[0][2] == grid3x3[2][0]) {
        console.log(`${grid3x3[0][2]} wins`);
        gameboard.gameEnd = true;
    }
}

function swapPlayer() {
    if (currentPlayer == players.player1)
        currentPlayer = players.player2;
    else 
        currentPlayer = players.player1;
}

game();
let grid3x3 = [
    [ '', '', ''],
    [ '', '', ''],
    [ '', '', '']
];

let gameboard = { grid: grid3x3, gameEnd: false };
let container = document.querySelector('.container');
const winner = document.querySelector('.winner');
const btn = document.querySelector('.re-start');
let count = 0;
const players = {
    player1: {
        name: 'Player 1',
        sign: 'X'
    },
    player2: {
        name: 'Player 2',
        sign: 'O'
    }
}

let currentPlayer = players.player1;

function game() {
    currentPlaterStatus();
    document.querySelectorAll(".cell").forEach((element) => {
        element.addEventListener('click', handle);

        function handle(e) {
            if (e.target.textContent != 'X' && e.target.textContent != 'O') {
                count++;
                e.target.textContent = currentPlayer.sign;
                let playerSign = currentPlayer.sign;
                switch (e.target.classList[1]) {
                    case 'c00':
                        grid3x3[0][0] = playerSign;
                        break;
                    case 'c01':
                        grid3x3[0][1] = playerSign;
                        break;
                    case 'c02':
                        grid3x3[0][2] = playerSign;
                        break;
                    case 'c10':
                        grid3x3[1][0] = playerSign;
                        break;
                    case 'c11':
                        grid3x3[1][1] = playerSign;
                        break;
                    case 'c12':
                        grid3x3[1][2] = playerSign;
                        break;
                    case 'c20':
                        grid3x3[2][0] = playerSign;
                        break;
                    case 'c21':
                        grid3x3[2][1] = playerSign;
                        break;
                    case 'c22':
                        grid3x3[2][2] = playerSign;
                        break;
                }

                if (count >= 5) {
                    checkWinner();
                }

                if (gameboard.gameEnd || count == 9) {
                    container.style.pointerEvents = 'none';
                    btn.style.display = 'block';
                    if (count == 9 && gameboard.gameEnd == false) {
                        console.log("Tie");
                        winner.textContent = "Tie";
                    }
                }
    
                swapPlayer();
                currentPlaterStatus();

            } else {
                console.log('invalid move');
            }
        }
    });

    btn.addEventListener('click', () => {
        location.reload();
    })
}


function checkWinner() {
    // condition for horizontal elements
    for (let i = 0, j = 0; i < grid3x3.length; i++) {
        if (grid3x3[i][j] == grid3x3[i][j+1] && grid3x3[i][j] == grid3x3[i][j+2] && grid3x3[i][j] != '') {
            console.log(`${grid3x3[i][j]} wins`);
            winner.textContent = `${currentPlayer.name} won`;
            gameboard.gameEnd = true;
            break;
        }
    }

    // condition for vertical elements
    for (let i = 0, j =0; j < grid3x3.length; j++) {
        if (grid3x3[i][j] == grid3x3[i+1][j] && grid3x3[i][j] == grid3x3[i+2][j] && grid3x3[i][j] != '') {
            console.log(`${grid3x3[i][j]} wins`);
            winner.textContent = `${currentPlayer.name} won`;
            gameboard.gameEnd = true;
            break;
        }
    }

    // condition for diagonal elements
    if (grid3x3[0][0] == grid3x3[1][1] && grid3x3[0][0] == grid3x3[2][2] && grid3x3[0][0] != '') {
        console.log(`${grid3x3[0][0]} wins`);
        winner.textContent = `${currentPlayer.name} won`;
        gameboard.gameEnd = true;
    } else if (grid3x3[0][2] == grid3x3[1][1] && grid3x3[0][2] == grid3x3[2][0] && grid3x3[0][2] != '') {
        console.log(`${grid3x3[0][2]} wins`);
        winner.textContent = `${currentPlayer.name} won`;
        gameboard.gameEnd = true;
    }
}

function swapPlayer() {
    if (currentPlayer == players.player1)
        currentPlayer = players.player2;
    else 
        currentPlayer = players.player1;
}

function currentPlaterStatus() {
    document.querySelector('.current-player').textContent = `Current Player: ${currentPlayer.name}`;
}

document.querySelector('.start').addEventListener('click', (e) => {
    let p1Name = prompt('Enter Player 1 name: ', 'player 1');
    let p2Name = prompt('Enter Player 2 name: ', 'player 1');
    players.player1.name = p1Name;
    players.player2.name = p2Name;
    game();
    e.target.style.display = 'none';
})
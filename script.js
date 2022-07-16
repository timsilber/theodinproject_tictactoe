//board template

const Player = (name, number) => {


    let moveList = []

    markerChoices = ['<div class="marker X">X</div>', '<div class="marker O">O</div>']

    let marker = markerChoices[number-1]

    const checkWin = (moveList) => {
       Gameboard.winningCombos.forEach(combo => {
        if (moveList.length >= 3 && isSubset(moveList, combo)){
            Gameboard.winner=name;
            console.log(name)
            Gameboard.showFireworks();
        }
       })
    }

    const isSubset = (array1, array2) => array2.every(element => array1.includes(element));

    return {name, marker, moveList, checkWin};
}

const Gameboard = (() => {

    const board = [null, null, null, null, null, null, null, null, null] //index of plays

    const winningCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ]

    const winner = null

    const makeMark = (square, player) => {
        const squareToMark=square.target
        squareToMark.innerHTML= player.marker;
        return true
    }

    const showFireworks = () => {
    const fireworks = document.createElement('div');
    fireworks.classList.add('pyro');
    fireworks.innerHTML = `<div class="before"></div><div class="after"></div>`
    const body = document.querySelector('body')
    body.insertBefore(fireworks, body.firstChild);
    }

    return {makeMark, winner, board, winningCombos, showFireworks} 
})();

const displayController = (() => {

    const player1 = Player("tim", 1)
    const player2 = Player("loser", 2)

   const startGame = () => {
    player1.turn = true
    player2.turn = false
    }

   const playTurn = ()=>{
        const squares = [...document.querySelectorAll('.square')]

        squares.forEach( square => {
            square.addEventListener('click', e => {
                if (player1.turn == true && Gameboard.winner == null
                    && e.target.textContent == '') {
                    player1.moveList.push(e.target.dataset.square-1);
                    square.innerHTML = player1.marker;
                    square.style.color = '#EE6C4D';
                    player1.turn = false;
                    player2.turn = true;
                    player1.checkWin(player1.moveList);
                } else if (player2.turn == true && Gameboard.winner == null
                    && e.target.textContent == '') {
                    player2.moveList.push(e.target.dataset.square-1);
                    Gameboard.board[e.target.id] = player2.marker;
                    square.innerHTML = player2.marker;
                    square.style.color = '#98C1D9';
                    player1.turn = true;
                    player2.turn = false;
                    player2.checkWin(player2.moveList)

                    } else {
                    return;
                };
            });
        });
    };


    const gameOver = false
    
    const checkPlay = () => {
        //check if square is not played or remove event listener from square after play
    }

    const setPlay = (player, square) => {
        //add square to board
    }

    return {player1, player2, startGame, gameOver, playTurn}

})(Gameboard);


// displayController.playRound();

displayController.startGame();
displayController.playTurn();
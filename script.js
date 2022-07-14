//board template

const Player = (name, number) => {

    let plays = []

    markerChoices = ['<div class="marker X">X</div>', '<div class="marker O">O</div>']
   
    const addPlay = (square) => {
        const squareIndex= square.target.dataset.square - 1
        plays[squareIndex] = true
        console.log(plays)
    }

    let marker = markerChoices[number-1]

    return {name, marker, addPlay};
}

const Gameboard = (() => {

    const plays = [null, null, null, null, null, null, null, null, null] //index of plays

    const board = [...document.querySelector('.container').children]

    const clickListener = (() => {
        board.forEach(square => {
            square.addEventListener('click', (square) => {
                makeMark(square, player1)
                player1.addPlay(square);
             })
        })
    })

    const makeMark = (square, player) => {
        const squareToMark=square.target
        squareToMark.innerHTML= player.marker
    }

    //input player name

    //assign marker
    
    //start new game 

    return {clickListener, makeMark} 
})();

const displayController = (() => {

    const checkPlay = () => {
        //check if square is not played or remove event listener from square after play
    }

    const setPlay = (player, square) => {
        //add square to board
    }

    const checkWin = () => {
      //check if three in a row
    }
})();

const player1 = Player("tim", 1)
const player2 = Player("loser", 2)

console.log(Gameboard.clickListener())

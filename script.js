//board template

const Player = (name, marker) => {

    let plays = [] //index of plays

    const addToPlays = (square) => {
        this.play
    }

    return {name};
}

const Gameboard = (() => {

    //start game

    //input player name

    //assign marker
    
    //start new game 

    return {}
})();

const displayController = ((board) => {

    const clickListener = () => {
        const board = [...document.querySelector('.container').children]
        board.forEach(square => {
            square.addEventListener('click', (e) => {
                const s = e.target.dataset.square - 1
                console.log(s)
                return {s}
             })
        })
    }

    const checkPlay = () => {
        //check if square is not played or remove event listener from square after play
    }

    const setPlay = (player, square) => {
        //add square to board
    }

    const checkWin = () => {
      //check if three in a row
    }

    return {clickListener} 
})();

console.log(displayController.clickListener())

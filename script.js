

// use a module to create the gameBoard object as an array inside of it. 

//const gameBoard = (() => {
// set up constants for winning combos, identefiers in the gameBoard and variable for the current turn.
const xClass = 'x'
const circleClass = 'circle';
let circleBoard
const cells = document.querySelectorAll('[data-cell]');
const fullGameBoard = document.getElementById('gameBoardContainer')
const winningSet = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]
]

startGame()
// event listeners allowing the players selection to be clicked one time
  function startGame() { 
    circleTurn = false; 
    
    cells.forEach(cell => { 
    cell.addEventListener('click', playerClick, {once: true})
  }); 
  setHover()
  }


  function playerClick(e) {
    const cell = e.target; 
    const currentClass = circleBoard ? circleClass : xClass; 
    //place marker
    playerMarker(cell, currentClass)

//check to see if win


//check for draw

//switch back and forth between placer x and player circle
    swapTurns()
    setHover()
  } 

  function playerMarker(cell, currentClass) { 
    cell.classList.add(currentClass)
  }

  function swapTurns() { 
     circleBoard = !circleBoard;
  }

  function setHover() { 
    fullGameBoard.classList.remove(xClass);
    fullGameBoard.classList.remove(circleClass); 
    if (circleBoard) { 
      fullGameBoard.classList.add(circleClass); 
    } else { 
      fullGameBoard.classList.add(xClass); 
    }
    }
  

 



  
 // })();

//create a factrory function so you can add players
const Player = (playerName, marker) => { 
  
}



// use a module to create the gameBoard object as an array inside of it. 
const gameBoard = (() => { 
//const gameBoard = (() => {
// set up constants for winning combos, identefiers in the gameBoard and variable for the current turn.
const xClass = 'x'
const circleClass = 'circle';
let circleBoard
const cells = document.querySelectorAll('[data-cell]');
const fullGameBoard = document.getElementById('gameBoardContainer'); 
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const playAgain = document.getElementById('reset');
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

startGame();


playAgain.addEventListener('click', startGame);


// event listeners allowing the players selection to be clicked one time
  function startGame() { 
    circleTurn = false; 
 
    cells.forEach(cell => { 
    cell.classList.remove(xClass); 
    cell.classList.remove(circleClass);
    cell.removeEventListener('click', playerClick);
    cell.addEventListener('click', playerClick, {once: true})
  }); 
  setHover()
  winningMessageElement.classList.remove('show')
  }


  function playerClick(e) {
    const cell = e.target; 
    const currentClass = circleBoard ? circleClass : xClass; 
    //place marker
    playerMarker(cell, currentClass)

//check to see if win
  if (winnerCheck(currentClass)) { 
    console.log('winner'); 
    finishGame(false);

//check for draw 
  } else if (isDraw()) { 
    finishGame(true);

//switch back and forth between placer x and player circle
  } else { 
    switchPlayer()
    setHover()
  }

  
  //define functions used in game play
  function playerMarker(cell, currentClass) { 
    cell.classList.add(currentClass)
  }

  function switchPlayer() { 
     circleBoard = !circleBoard;
  }


  
    function winnerCheck(currentClass) { 
      return winningSet.some(combination => { 
        return combination.every(index => { 
          return cells[index].classList.contains(currentClass);
        })
    })

  }
    
    function finishGame(draw) { 
      if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
      } else {
        winningMessageTextElement.innerText = `${circleBoard ? "O's" : "X's"} Wins!`
      }
      winningMessageElement.classList.add('show')
    }
  }

    function isDraw() {
      return [...cells].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(circleClass)
      })
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
    
  
 })();

//create a factrory function so you can add players
//const Player = (playerName, marker) => { 
  
//}

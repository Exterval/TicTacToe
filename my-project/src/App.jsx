import { useState } from 'react'
import './App.css'

function App() {
  // tic-tac-toe app
  const [symbol, setSymbol] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(''));
  const [gameOver, setGameOver] = useState(false);
  const [noWinner, setNoWinner] = useState(false);

  
  const buttonList = []

  for(let i = 0; i < 9; i++){
    buttonList.push(<button key={i} className='square' onClick={()=>handleSymbolChange(i)}>{board[i]}</button>)
  }

  function handleSymbolChange(index){
    if(board[index] !== '' || gameOver) return;
    
    const newBoard = [...board];
    newBoard[index] = symbol;
    setBoard(newBoard);
    gridCheck(newBoard);
  }

  //  function to check grid for 3 symbols in a row vertically &
  //  horizontally.
  function gridCheck(arr){
    // check rows for horizontal match
    for(let i = 0; i < 3; i++){
      const start = i * 3;
      if(arr[start] === arr[start + 1] && arr[start + 1] === arr[start + 2] && arr[start] !== ''){
        console.log('Horizontal Match')
        declareWinner()
        return;
      }
    }
    
    // check columns for vertical match
    for(let i = 0; i < 3; i++){
      if(arr[i] === arr[i + 3] && arr[i + 3] === arr[i + 6] && arr[i] !== ''){
        console.log('Vertical Match')
        declareWinner()
        return;
      }
    }

    // check column for diagonal match (0, 3, 8 & 2, 4, 6)
    if((arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== '' && arr[4] !== '' && arr[8] !== '') ||
      (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== '' && arr[4] !== '' && arr[6] !== '')){
        console.log('Diagonal Match')
        declareWinner()
        return;
    }
    if(!board.includes('')){
      setNoWinner(true);
    }
    setSymbol(s => s === 'X' ? 'O' : 'X'); 
    console.log(board)
  }

  function handleReset(){
    // resets grid
    setBoard(Array(9).fill(''))
    setSymbol('X')
    setGameOver(false)
  }

  function declareWinner(){
    setGameOver(true);
  }



  return (
    <>
      <div id='layout'>
        <h1>Tic Tac Toe</h1>
        {noWinner ? <p>Draw</p> : <p id='winner'>{gameOver ? `Winner : ${symbol}` : `Next Player: ${symbol}`}</p>}
        <div id="gameUI">
          <div className="rowOne">
            {buttonList.slice(0, 3)}
          </div>
          <div className="rowTwo">
            {buttonList.slice(3, 6)}
          </div>
          <div className="rowThree">
            {buttonList.slice(6, 9)}
          </div>
        </div>
        <div id="reset"><button onClick={handleReset} id="resetButton">Reset</button></div>
      </div>
    </>
  )
}

export default App

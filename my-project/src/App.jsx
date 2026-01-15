import { useState } from 'react'
import './App.css'

function App() {
  // tic-tac-toe app
  const [symbol, setSymbol] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(''));

  function handleSymbolChange(index){
    if(board[index] !== '') return;
    
    const newBoard = [...board];
    newBoard[index] = symbol;
    setBoard(newBoard);
    console.log(newBoard)
    gridCheck(newBoard);
    setSymbol(s => s === 'X' ? 'O' : 'X');
  }

  //  function to check grid for 3 symbols in a row vertically &
  //  horizontally.
  function gridCheck(arr){
    // check rows for horizontal match
    for(let i = 0; i < 3; i++){
      console.log(arr)
      const start = i * 3;
      if(arr[start] === arr[start + 1] && arr[start + 1] === arr[start + 2] && arr[start] !== ''){
        console.log('Horizontal Match')
      }
    }
    
    // check columns for vertical match
    for(let i = 0; i < 3; i++){
      if(arr[i] === arr[i + 3] && arr[i + 3] === arr[i + 6] && arr[i] !== ''){
        console.log('Vertical Match')
      }
    }

    // check column for diagonal match (0, 3, 8 & 2, 4, 6) * FIX
    for(let i = 0; i < 3; i++){
      console.log(arr[i] !== '', arr[i + 6], arr[i])
      console.log(arr[i + 2], arr[i + 4], arr[i + 6])
      if(arr[i + 2] === arr[i + 4] && arr[i+4] === arr[i + 6] && arr[i] !== ''){
        console.log('Diagonal Match')
      }
    }
    // arr[i] === arr[i + 4] && arr[i+4] === arr[i + 8]

    
  }

  const buttonList = []

  for(let i = 0; i < 9; i++){
    buttonList.push(<button key={i} className='square' onClick={()=>handleSymbolChange(i)}>{board[i]}</button>)
  }


  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
        <p>Next Player: {symbol}</p>
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
      </div>
    </>
  )
}

export default App

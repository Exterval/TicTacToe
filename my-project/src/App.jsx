import { useState } from 'react'
import './App.css'

function App() {
  // tic-tac-toe app
  const [symbol, setSymbol] = useState('X');
  let grid = [[],[],[]]



  function handleSymbolChange(e){
    setSymbol(s => s === 'X' ? '0' : 'X');
    e.target.textContent = symbol;
    e.target.disabled = true;
    return;
  }

  //  function to check grid for 3 symbols in a row vertically &
  //  horizontally.
  function gridCheck(arr){

  }

    const buttonList = []

  for(let i = 0; i < 3; i++){
    buttonList.push(<button className='square' onClick={(e)=>handleSymbolChange(e)}>&nbsp;</button>)
  }

  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
        <p>Next Player: {symbol[0]}</p>
        <div className="gameUI">
          <div className="rowOne">
            {buttonList}
          </div>
          <div className="rowtwo">
            {buttonList}
          </div>
          <div className="rowThree">
            {buttonList}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  // tic-tac-toe app
  const [symbol, setSymbol] = useState(['X','O']);

  const buttonList = []

  for(let i = 0; i < 3; i++){
    buttonList.push(<button className='square'></button>)
  }

  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
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

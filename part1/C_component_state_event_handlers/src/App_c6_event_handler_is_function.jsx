import { useState } from 'react'
import './App.css'


const App = () => {
  const [ counter, setCounter ] = useState(0)

  // as funcoes dos geradores de eventos devem de estar fora do botao
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>

      <button onClick={increaseByOne}>
        plus
      </button>

      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App
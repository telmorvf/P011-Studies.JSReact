import { useState } from 'react'


const F_EventHhandlerIsFunction = () => {
  const [counter, setCounter] = useState(0)

  // as funcoes dos geradores de eventos devem de estar fora do botao
  const decreaseByOne = () => setCounter(counter - 1)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <hr />
      <h2>= F_EventHhandlerIsFunction =</h2>
      <div>{counter}</div>

      <button onClick={decreaseByOne}>
        minus
      </button>

      <button onClick={setToZero}>
        zero
      </button>

      <button onClick={increaseByOne}>
        plus
      </button>
    </div>
  )
}

export default F_EventHhandlerIsFunction
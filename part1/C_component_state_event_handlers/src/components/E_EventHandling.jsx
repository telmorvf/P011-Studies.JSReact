import { useState } from 'react'


const E_EventHandling = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <hr />
      <h2>= E_EventHandling =</h2>

      <div>{counter}</div>

      <button onClick={handleClick}>
        minus
      </button>

      <button onClick={() => setCounter(0)}>
        zero
      </button>

      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>

    </div>
  )
}

export default E_EventHandling
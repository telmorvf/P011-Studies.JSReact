import { useState } from 'react'


const I_FunctionThatReturnsAFunction = () => {

  const [value, setValue] = useState(10)
  const [value1, setValue1] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  const setToValue1 = (newValue1) => () => {
    console.log('value now', newValue1)  // print the new value to console
    setValue1(newValue1)
  }


  return (
    <div>
      <hr />
      <h2>=  I_FunctionThatReturnsAFunction =</h2>

      {value}
      <br />
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>

      <br />
      <p>Or</p>

      {value1}
      <br />
      <button onClick={setToValue1(1000)}>thousand</button>
      <button onClick={setToValue1(0)}>reset</button>
      <button onClick={setToValue1(value1 + 1)}>increment</button>
    </div>
  )
}


export default I_FunctionThatReturnsAFunction

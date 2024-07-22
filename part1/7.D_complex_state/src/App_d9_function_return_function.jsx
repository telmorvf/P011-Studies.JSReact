import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
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
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
      <br/>
      <p>Or</p>
      <br/>
      {value1}
      <button onClick={setToValue1(1000)}>thousand</button>
      <button onClick={setToValue1(0)}>reset</button>
      <button onClick={setToValue1(value1 + 1)}>increment</button>
    </div>
  )
}


export default App

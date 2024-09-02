import { useState } from 'react'
import './App.css'

import A_ComplexState from './components/A_ComplexState'



// Este é o lugar correto para definir um componente
const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // Não defina um componente dentro de outro componente
  // const Display = props => <div>{props.value}</div>

  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (

    <div>

      <h1>==== Part 1 - Introduction to React ====</h1>
      <h1>== D - A More complex state, debugging React apps ==</h1>

      <hr />
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App
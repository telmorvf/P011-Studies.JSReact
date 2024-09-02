import { useState } from 'react'

// Este é o lugar correto para definir um componente
// O Idial e definir o novo componente em outro novo file within components folder
const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const K_DoNotDefineComponenteWithinComponents = () => {
  // Não defina um componente dentro de outro componente
  // const Display = props => <div>{props.value}</div>

  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <hr />
      <h2>=  K_Do Not Define Componente Within Components =</h2>


      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default K_DoNotDefineComponenteWithinComponents

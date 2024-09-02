import { useState } from 'react'


const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const G_PassingStateToChieldComponent = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <hr />
      <h2>= G_PassingStateToChieldComponent =</h2>

      <Display counter={counter} />

      <Button
        onClick={decreaseByOne}
        text='minus'
      />

      <Button
        onClick={setToZero}
        text='zero'
      />

      <Button
        onClick={increaseByOne}
        text='plus'
      />
    </div>
  )
}

export default G_PassingStateToChieldComponent
import { useState } from 'react'

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}


const H_ChangesInStatCauseRendering = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <hr />
      <h2>= H_ChangesInStatCauseRendering =</h2>

      <Display counter={counter} />
      <Button onClick={decreaseByOne} text="minus" />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />

    </div>
  )
}
export default H_ChangesInStatCauseRendering
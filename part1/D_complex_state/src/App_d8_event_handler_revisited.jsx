import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

  const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)
  
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right) 
      }
 
      const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRight = right + 1
        setRight(updatedRight)
        setTotal(updatedRight + left) 
      }

      const handleZeroClick = () => {
        setRight(0)
        setLeft(0)
        setTotal(0)
        setAll([])
      }
      
    return (
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}<br/>
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
  
        <p>{allClicks.join(' ')}</p>
        <p>total {total}</p>
        {console.log(allClicks)}

        <History allClicks={allClicks} />
        <button onClick={handleZeroClick}>Zero</button>

      </div>
    )
  }

export default App
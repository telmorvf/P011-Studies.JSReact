import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


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

    return (
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
  
        <p>{allClicks.join(' ')}</p>
        <p>total {total}</p>
        {console.log(allClicks)}
      </div>
    )
  }

export default App
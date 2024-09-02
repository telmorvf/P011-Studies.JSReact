import { useState } from 'react'

const A_ComplexState = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  // const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1 })
  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () => {
    const newClicks = { ...clicks, right: clicks.right + 1 }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}
export default A_ComplexState

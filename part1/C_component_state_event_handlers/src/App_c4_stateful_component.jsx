import { useState } from 'react'
import './App.css'







const App = () => {

  const [ contador, setContador ] = useState(0)


  setTimeout(
    () => setContador(contador + 1),
    1000
  )
  
  console.log('renderizando...', contador)

  return (
    <div>{contador}</div>
  )
}

export default App

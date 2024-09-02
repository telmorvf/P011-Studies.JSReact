import { useState } from "react"


const D_StatefulComponent = () => {

  const [contador, setContador] = useState(0)
  setTimeout(
    () => setContador(contador + 1),
    60000     //renderiza a cada 60 segundos
  )
  console.log('renderizando...', contador)


  return (
    <div>
      <hr />
      <h2>= D_StatefulComponent =</h2>
      {contador + ((contador === 1) ? (' minuto') : (' minutos'))}
    </div>
  )
}

export default D_StatefulComponent

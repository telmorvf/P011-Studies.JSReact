import { useState } from 'react'


const G_RulesOfHooks = () => {
  // these are ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if (age > 10) {
    // this does not work!
    const [foobar, setFoobar] = useState(null)
  }

  for (let i = 0; i < age; i++) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000)
  }

  return (
    <div>
      <hr />
      <h2>= G_RulesOfHooks =</h2>
      <p>Ver o detalhes em "G_RulesOfHooks.jsx"</p>
      <p>Os hooks a instanciação do useState só deve ser feita fora de condições if, for e funções</p>
      <img src='G_RulesOfHooks.jpg' />
    </div>
  )
}

export default G_RulesOfHooks
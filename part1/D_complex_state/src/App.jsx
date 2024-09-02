import { useState } from 'react'
import './App.css'

import A_ComplexState from './components/A_ComplexState'
import B_HandlingArrays from './components/B_HandlingArrays'
import C_UpdateOfStateIsAsynchronous from './components/C_UpdateOfStateIsAsynchronous'
import D_ConditionalRendering from './components/D_ConditionalRendering'
import G_RulesOfHooks from './components/G_RulesOfHooks'
import H_EventHandlerRevisited from './components/H_EventHandlerRevisited'
import I_FunctionThatReturnsAFunction from './components/I_FunctionThatReturnsAFunction'
import K_DoNotDefineComponenteWithinComponents from './components/K_DoNotDefineComponenteWithinComponents'


const App = () => {
  const [value, setValue] = useState(10)


  return (

    <div>
      <h1>==== Part 1 - Introduction to React ====</h1>
      <h1>== D - A More complex state, debugging React apps ==</h1>
      <hr />

      <A_ComplexState />
      <B_HandlingArrays />
      <C_UpdateOfStateIsAsynchronous />
      <D_ConditionalRendering />
      <G_RulesOfHooks />
      <H_EventHandlerRevisited />
      <I_FunctionThatReturnsAFunction />
      <K_DoNotDefineComponenteWithinComponents />
    </div>
  )
}

export default App
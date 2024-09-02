import { useState } from 'react'
import './App.css'
import A_HelperFunction from './components/A_HelperFunction'
import D_StatefulComponent from './components/D_StatefulComponent'
import E_EventHandling from './components/E_EventHandling'
import F_EventHhandlerIsFunction from './components/F_EventHhandlerIsFunction'
import G_PassingStateToChieldComponent from './components/G_PassingStateToChieldComponent'
import H_ChangesInStatCauseRendering from './components/H_ChangesInStatCauseRendering'

const App = () => {



  return (

    <div className="App">
      <h1>==== Part 1 - Introduction to React ====</h1>
      <h1>== C Component state, event handlers ==</h1>
      <A_HelperFunction />

      <D_StatefulComponent />

      <E_EventHandling />
      <F_EventHhandlerIsFunction />

      <G_PassingStateToChieldComponent />

      <H_ChangesInStatCauseRendering />

    </div>

  )
}

export default App

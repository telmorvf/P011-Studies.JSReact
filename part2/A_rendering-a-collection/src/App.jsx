import { useState } from 'react'
import './App.css'
import E_RenderingCollections from '../components/E_RenderingCollections'

const App = (props) => {

  const { notes } = props

  return (
    <div className="App">
      <h1> ==== Communicating with server ==== </h1>
      <h1> == Rendering a collection, modules ==</h1>
      <hr />
      <E_RenderingCollections notes={notes} />
    </div>
  )
}

export default App

import React from 'react'

const E_RenderingCollections = ({ notes }) => {


  const result1 = notes.map(note => note.id)
  const result2 = notes.map(note => note.content)
  console.log(result1)
  console.log(result2)

  return (

    <div className="App">
      <hr />
      <h2>= E_RenderingCollections =</h2>
      <h3>Notes</h3>
      <ul>
        {/* 
          <li>{notes[0].content}</li>
          <li>{notes[1].content}</li>
          <li>{notes[2].content}</li> 
        */}
        {notes.map(note => <li key={note.id}>{note.content}</li>)}


      </ul>
    </div>
  )


}

export default E_RenderingCollections

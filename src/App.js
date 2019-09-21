import React from 'react'
import Note from './components/Note'

const App = ({notes}) => {
  const rows = () => notes.map(note =>
    <Note
      key={note.id}
      note={note}
    />
  )

  const Header = ({course}) => {
    return (
      {course}
    )
  }
  const Course = ({course}) => { 
    console.log(course)
    return (
      <div>
      <Header course={course} />
      </div>
    )
  } 

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default App 
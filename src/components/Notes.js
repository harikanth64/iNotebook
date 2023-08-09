import noteContext from '../context/notes/noteContext';
import React, { useContext } from 'react'
import Noteitem from './Noteitem';

function Notes() {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
  return (
    <div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note)=>{
          return <Noteitem note={note} />
        })}
      </div>
    </div>
  )
}

export default Notes
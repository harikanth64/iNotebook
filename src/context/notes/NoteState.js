import { useState } from "react";
import NoteContext from "./noteContext";



const NoteState = (props) => {

  const host = "http://localhost:5000"
  const notesIntial = []

  const [notes, setNotes] = useState(notesIntial);

  // Get all Notes
  const getNotes = async () => {
    // API caLL
    const url = `${host}/api/notes/fetchallnotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzc3ZmU4ODA1OGJjNWIzNDczNWQxIn0sImlhdCI6MTY5MTU4MDQ3N30.b-fhf8-hmggpQUwb9NZ1gD1rLOHEaYqgcSDCbpzLOaM"
      }
    });
    const json = await response.json()
    // console.log(json)
    setNotes(json)

  }

  // Add Note
  const addNote = async (title, description, tag) => {
    // API caLL
    const url = `${host}/api/notes/addnote`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzc3ZmU4ODA1OGJjNWIzNDczNWQxIn0sImlhdCI6MTY5MTU4MDQ3N30.b-fhf8-hmggpQUwb9NZ1gD1rLOHEaYqgcSDCbpzLOaM"
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json()
    setNotes(notes.concat(note))
  }



  // Delete Note
  const deleteNote = async (id) => {
    // todo API Call
    const url = `${host}/api/notes/deletenote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzc3ZmU4ODA1OGJjNWIzNDczNWQxIn0sImlhdCI6MTY5MTU4MDQ3N30.b-fhf8-hmggpQUwb9NZ1gD1rLOHEaYqgcSDCbpzLOaM"
      }
    });
    const json = await response.json()


    console.log("Note deleted for id " + id)
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const url = `${host}/api/notes/updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzc3ZmU4ODA1OGJjNWIzNDczNWQxIn0sImlhdCI6MTY5MTU4MDQ3N30.b-fhf8-hmggpQUwb9NZ1gD1rLOHEaYqgcSDCbpzLOaM"
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = await response.json()



    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

    return (
      <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
        {props.children}
      </NoteContext.Provider>
    )
  }

  export default NoteState;
import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;
    
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    
    const handleClick = (e)=>{

        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        // setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e)=> {
        setNote({...note, [e.target.name]: e.target.value});
    }
    return (
        <div>
            <div className="container my-3">
                <h1>Add a Note</h1>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" name="description" value={note.description} id="description" onChange={onChange} rows="6"></textarea>
                        {/* <input type="testarea" className="form-control" name="description" value={note.description} id="description" onChange={onChange}/> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" name="tag" value={note.tag} id="tag" onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>

        </div>
    )
}

export default AddNote

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';



function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <div className="d-flex mb-3" >
                        <div className='me-auto'>
                            <h5 className="card-title">{note.title}</h5>
                        </div>
                        <div className='align-self-baseline'>
                            <FontAwesomeIcon icon={faTrashCan} style={{ cursor: "pointer" }} onClick={()=> {deleteNote(note._id)}}/>
                            <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} className='mx-3' />
                        </div>
                    </div>
                    <div>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';



function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => { setIsHovering(true) };
    const handleMouseOut = () => { setIsHovering(false) };

    return (
        <div className='col-md-3'>
            <div className="card my-3" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                <div className="card-body">
                    <div className="d-flex mb-3" >
                        <div className='me-auto'>
                            <h5 className="card-title">{note.title}</h5>
                        </div>
                        {isHovering && (
                            <div className='align-self-baseline' >
                                <FontAwesomeIcon icon={faTrashCan} style={{ cursor: "pointer" }} onClick={() => { deleteNote(note._id) }} />
                                <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} className='mx-3' onClick={() => { updateNote(note) }} />
                            </div>
                        )}
                    </div>
                    <div>
                        <p className="card-text">{note.description}</p>
                    </div>
                    {/* <div className='my-3'> */}
                    <span className="badge text-bg-light my-3 bg-body-secondary">{note.tag}</span>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Noteitem

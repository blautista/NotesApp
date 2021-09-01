import React, {useState} from 'react';
import './Note.css';
import NoteForm from './NoteForm';

const Note = (props) => {
    const [isEditing, setEdit] = useState(props.data.isEditing);

    const enableEditing = () => {
        setEdit(true);
    }

    const saveChanges = (data) => {
        setEdit(false);
        props.onNoteDataChange(data);
    }

    const removeNote = () => {
        props.onNoteRemoval(props.data);
    }

    let noteContent = 
        <div onClick={enableEditing}>
            <h1>{props.data.title}</h1>
            <p>{props.data.content}</p>
            <button type="button" onClick={removeNote}>remove</button>
        </div>; 

    if (isEditing) {
        noteContent = <NoteForm data={props.data} onFormSubmit={saveChanges}/>
    } 

    return (
        <div className='note-container'>
            {noteContent}
        </div>
    );
};

export default Note;
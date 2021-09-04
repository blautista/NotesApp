import React, {useState} from 'react';
import styles from './Note.module.css';
import NoteForm from './NoteForm';

const Note = (props) => {

    // const [title, setTitle] = useState(props.data.title);
    // const [content, setContent] = useState(props.data.content);

    const saveChanges = (data) => {
        props.onNoteDataSaveRequest(data);
    }

    const removeNote = () => {
        props.onNoteRemoval(props.data);
    }

    function clearForm () {
        
    }

    return (
        
        <div className={styles['note-container']}>
            <NoteForm data={props.data} onClearForm={clearForm} onFormChange={saveChanges}/>
        </div>
    );
};

export default Note;
import React from 'react';
import styles from './NewNote.module.css';

const NewNote = (props) => {

    const addNewNote = () => {
        props.onAddNote({title: '', content:'', isEditing:true});
    }

    return (
        <div>
            <button className={styles['new-note-button']} type="button" onClick={addNewNote}>
                <h2>Create New Note</h2>
            </button>
        </div>
    );
};

export default NewNote;
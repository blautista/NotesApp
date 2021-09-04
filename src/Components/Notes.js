import React from 'react';
import styles from './Notes.module.css';
import NewNote from './NewNote';
import NotesListItem from './NotesListItem';

const Notes = (props) => {

    function addNote (data) {
        props.onNoteAdd(data);
    }

    function changeCurrentNote (data) {
        props.onNoteChange(data)
    }

    function handleChangedData(data) {
        props.onNoteChange(data);
    }

    function handleNoteRemoval(data) {
        props.onNoteRemoval(data);
    }

    function logclick (w) {
        console.log(w);
    }
    return (
        <div className={styles['notes-container']}>
            <ul className={styles['note-list']}>
            {
                props.notesArray.map(noteData => 
                    <NotesListItem 
                        onItemClick={changeCurrentNote} 
                        key={noteData.id} 
                        onNoteRemoval={handleNoteRemoval}
                        data={noteData}
                        isActive={props.activeNoteId === noteData.id}
                        onItemDelete={handleNoteRemoval}/>
                )
            }
            </ul>
            <NewNote onAddNote={addNote}></NewNote>
        </div>
    );
};

export default Notes;
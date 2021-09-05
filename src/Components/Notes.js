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

    function handleNoteRemoval(id) {
        props.onNoteRemoval(id);
    }

    function setStyles () {
        let statusStyle = `${styles['open']}`;
        if (props.isScreenMobileSized && !props.isOpen)  statusStyle = `${styles['closed']}`;
        return statusStyle;
    }
    return (
        <div 
            className={`${styles['notes-container']} ${setStyles()}`}>
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
            <NewNote className={styles['new-note-button']} onAddNote={addNote}></NewNote>
        </div>
    );
};

export default Notes;
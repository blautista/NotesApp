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

    function handleNoteRemoval(id) {
        props.onNoteRemoval(id);
    }

    function logclick (w) {
        console.log(w);
    }

    function setStyles () {
        let baseStyle = `${styles['notes-container']} `;
        let statusStyle;
        if (props.isScreenMobileSized)  {
            if (props.isOpen) {
                statusStyle=`${styles['open']}`;
            } else {
                statusStyle=`${styles['closed']}`;
            }
        } else {
            statusStyle = `${styles['open']}`;
        }
        return baseStyle.concat(statusStyle);
    }
    return (
        <div 
            className={`${setStyles()}`}>
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
import React, {useState} from 'react';
import styles from './Notes.module.css';
import NewNote from './NewNote';
import NotesListItem from './NotesListItem';
import SearchBar from './SearchBar';

const Notes = (props) => {

    const [filter, setFilter] = useState('');

    function addNote (data) {
        props.onNoteAdd(data);
    }

    function changeCurrentNote (data) {
        props.onNoteChange(data);
        // setFilter('');
    }

    function handleNoteRemoval(id) {
        props.onNoteRemoval(id);
    }

    const changeFilter = (term) => {
        setFilter(term);
    }

    function filterNotes (searchTerm) {
        let filteredNotes;
        if (searchTerm) 
        filteredNotes = props.notesArray.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()));
        else 
        filteredNotes=props.notesArray;
        return filteredNotes;
    }

    function setStyles () {
        let statusStyle = `${styles['open']}`;
        if (props.isScreenMobileSized && !props.isOpen)  statusStyle = `${styles['closed']}`;
        return statusStyle;
    }
    return (
        <div 
            className={`${styles['notes-container']} ${setStyles()}`}>
            <SearchBar onSearch={changeFilter}/>
            <ul className={styles['note-list']}>
            {(filterNotes(filter).length > 0) &&
                filterNotes(filter).map(noteData => 
                    <NotesListItem 
                        onItemClick={changeCurrentNote} 
                        key={noteData.id} 
                        onNoteRemoval={handleNoteRemoval}
                        data={noteData}
                        isActive={props.activeNoteId === noteData.id}
                        onItemDelete={handleNoteRemoval}/>
                )
            }
            {(filterNotes(filter).length === 0) && <li>No notes found</li>}
            </ul>
            <NewNote className={styles['new-note-button']} onAddNote={addNote}></NewNote>
        </div>
    );
};

export default Notes;
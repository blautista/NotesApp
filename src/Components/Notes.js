import React from 'react';
import Note from './Note/Note';
import './Notes.css';

const Notes = (props) => {

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
        <div className='notes-container'>
            {
                props.notesArray.map(noteData => 
                    <Note key={noteData.id} data={noteData} onNoteRemoval={handleNoteRemoval} onNoteDataChange={handleChangedData}/>
                )
            }
        </div>
    );
};

export default Notes;
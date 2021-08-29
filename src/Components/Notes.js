import React, { useState } from 'react';
import Note from './Note/Note';
import './Notes.css';

const Notes = (props) => {
    console.log(props.notesArray)
    return (
        <div className='notes-container'>
            {
                props.notesArray.map(noteData => 
                    <Note data={noteData}>

                    </Note>)
            }
        </div>
    );
};

export default Notes;
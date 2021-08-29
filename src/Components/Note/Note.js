import React from 'react';
import './Note.css';

const Note = (props) => {
    return (
        <div className='note-container'>
            <h1>{props.data.title}</h1>
            <p>{props.data.content}</p>   
        </div>
    );
};

export default Note;
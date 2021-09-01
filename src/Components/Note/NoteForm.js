import React, {useState} from 'react';
import './NoteForm.css';

const NoteForm = (props) => {
    const [title, setTitle] = useState(props.data.title);
    const [content, setContent] = useState(props.data.content);

    function saveChanges (e) {
        e.preventDefault();

        let text = content.replace(/\n\r?/g, '<br />');

        const newValues = {
            id: props.data.id,
            title: title,
            content: content,
            isEditing:false
        };
        console.log(content);
        props.onFormSubmit(newValues);
    }

    function setContentHandler (e) {
        
        setContent(e.target.value);
    }
    
    function setTitleHandler (e) {
        setTitle(e.target.value);
    }
    return (
        <form onSubmit={saveChanges}>
            <input type="text" value={title} placeholder='Title' onChange={setTitleHandler}></input>
            <textarea placeholder="your text goes here" onChange={setContentHandler} value={content}></textarea>
            <button type="submit">save changes</button>
        </form>
    );
};

export default NoteForm;
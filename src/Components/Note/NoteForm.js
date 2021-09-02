import React, {useState} from 'react';
import styles from './NoteForm.module.css';

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
        <form className={styles['note-form']} onSubmit={saveChanges}>
            <input className={styles['title']}type="text" value={title} placeholder='Title' onChange={setTitleHandler}></input>
            <textarea className={styles['content']} placeholder="your text goes here" onChange={setContentHandler} value={content}></textarea>
            <button className={styles['submit']} type="submit">save changes</button>
        </form>
    );
};

export default NoteForm;
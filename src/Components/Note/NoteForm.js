import React, {useState} from 'react';
import styles from './NoteForm.module.css';

const NoteForm = (props) => {
    const [title, setTitle] = useState(props.data.title);
    const [content, setContent] = useState(props.data.content);

    function saveChanges (what, from) {

        const newValues = {
            id: props.data.id,
            title: title,
            content: content
        };

        newValues[from] = what;

        props.onFormChange(newValues);
    }

    function setContentHandler (e) {
        saveChanges(e.target.value, 'content');
        setContent(e.target.value);
    }
    
    function setTitleHandler (e) {
        
        saveChanges(e.target.value, 'title');
        setTitle(e.target.value);

    }
    return (
        <form className={styles['note-form']}>
            <input 
                className={styles['title']}
                type="text" 
                value={title} 
                placeholder='Title' 
                onChange={setTitleHandler}
            /> 
            <textarea 
                className={styles['content']} 
                placeholder="your text goes here" 
                onChange={setContentHandler} 
                value={content}>
            </textarea>
        </form>
    );
};

export default NoteForm;
import React, {useState, useRef} from 'react';
import styles from './NoteForm.module.css';

const NoteForm = (props) => {
    // const [title, setTitle] = useState(props.data.title);
    // const [content, setContent] = useState(props.data.content);
    const titleInput = useRef();
    const contentInput = useRef();

    function saveChanges (what, from) {

        const newValues = {
            id: props.data.id,
            title: titleInput.current.innerText,
            content: contentInput.current.innerText
        };

        newValues[from] = what;

        props.onFormChange(newValues);
    }

    function setContentHandler (e) {
        saveChanges(e.target.value, 'content');
        // setContent(e.target.value);
    }

    function handlePaste (e) {
        e.preventDefault();
        let text = e.clipboardData.getData('text/plain');
        let selectionIndex = document.getSelection().getRangeAt(0).startOffset;
        let inputContent = contentInput.current.innerText; 
        const secondChunk = inputContent.substr(selectionIndex, inputContent.length);
        const firstChunk = inputContent.substr(0, selectionIndex);
        contentInput.current.innerText = firstChunk + text + secondChunk;
        saveChanges(); 
    }

    
    function setTitleHandler (e) {
        saveChanges(e.target.value, 'title');
        // setTitle(e.target.value);

    }
    return (
        <div className={styles['note-form']}>
            <div 
                ref={titleInput} 
                onInput={saveChanges} 
                contentEditable="true" 
                className={styles.title}
                suppressContentEditableWarning={true}>
                    {props.data.title}
            </div>
            <div 
                onPaste={handlePaste} 
                ref={contentInput} 
                onInput={saveChanges} 
                contentEditable="true" 
                className={styles.content}
                suppressContentEditableWarning={true}>
                    {props.data.content}
                </div>
        </div>
    );
};

export default NoteForm;
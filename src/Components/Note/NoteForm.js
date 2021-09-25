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
            title: titleInput.current.innerHTML,
            content: contentInput.current.innerHTML
        };

        newValues[from] = what;

        props.onFormChange(newValues);
    }

    function setContentHandler (e) {
        saveChanges(e.target.value, 'content');
        // setContent(e.target.value);
    }

    const boldenText = (e) => {
        const selectionStart = document.getSelection().anchorOffset;
        const selectionEnd = document.getSelection().focusOffset;
        const range = document.getSelection().getRangeAt(0);
        console.log(range.startContainer);
        console.log(range.endContainer);

        // console.log(selectionStart);
        // console.log(selectionEnd);
        const inputContent = contentInput.current.innerText; 
        const textToBolden = document.getSelection().toString();
        const secondChunk = inputContent.substr(selectionEnd, inputContent.length);
        const firstChunk = inputContent.substr(0, selectionStart);
        contentInput.current.innerHTML=firstChunk+`<span style="font-weight:bold">${textToBolden}</span>`+secondChunk;
        saveChanges();
    }

    function handlePaste (e) {
        e.preventDefault();
        const text = e.clipboardData.getData('text/plain');
        const selectionIndex = document.getSelection().getRangeAt(0).startOffset;
        const inputContent = contentInput.current.innerText; 
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
                suppressContentEditableWarning={true}
                dangerouslySetInnerHTML={{__html: props.data.content}}>
            </div>
            <button type="button" onClick={boldenText}>make ur text bold!</button>
        </div>
    );
};

export default NoteForm;
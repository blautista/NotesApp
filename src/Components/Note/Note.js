import React, {useState} from 'react';
import styles from './Note.module.css';
import NoteForm from './NoteForm';
import SvgButton from '../UI/Buttons/SvgButton';
import {ReactComponent as PaletteIcon} from './palette_black_24dp.svg'; 

const Note = (props) => {

    const [tweetContent, setTweetContent] = useState(props.data.title); 
    const [noteColor, setNoteColor] = useState(props.data.noteColor);

    function makeSelectionBold() {
        let textToBeBolded = window.getSelection().toString();
    }

    const saveChanges = (data) => {
        props.onNoteDataSaveRequest({...data, noteColor: noteColor});
        // setTweetContent(`${data.title} <br> ${data.content}`);
    }

    function changeNoteBackgroundColor(e) {
        saveChanges({...props.data, noteColor: e.target.value});
        setNoteColor(e.target.value);
    }
    return (
        
        <div className={`${styles['note-container']}`} style={{backgroundColor: noteColor}}>
            <NoteForm data={props.data} onFormChange={saveChanges}/>
            <footer>
                {/* <SvgButton> */}
                    {/* <input type="color" onChange={changeNoteBackgroundColor}></input> */}
                    {/* <PaletteIcon/> */}
                {/* </SvgButton> */}
                
                {/* <button onClick={makeSelectionBold} type="button">make bold!</button> */}
            </footer>
            {/* <a 
                class="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${tweetContent}`}>
            Tweet
            </a> */}
        </div>
    );
};

export default Note;
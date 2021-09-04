import React from 'react';
import styles from './Notes.module.css';
import {ReactComponent as TrashCan} from './trash-can.svg';

const NotesListItem = (props) => {
    const changeNote = () => {
        props.onItemClick(props.data);
    }

    const deleteNote = () => {
        props.onItemDelete(props.id);
    }
    
    return (
        <React.Fragment>
            <li onClick={changeNote} 
                className={`${styles['note-list-item']} ${(props.isActive) ? styles['active'] : ''}`}>
                <div onClick={deleteNote}>
                    <TrashCan fill='purple' className={styles['trash-can-svg']}/>
                </div>
                <span>{props.data.title}</span>
            </li>
        </React.Fragment>
    );
};

export default NotesListItem;
import React from 'react';
import styles from './Notes.module.css';
import {ReactComponent as TrashCan} from './trash-can.svg';

const NotesListItem = (props) => {
    const changeNote = () => {
        props.onItemClick(props.data);
    }

    const deleteNote = () => {
        props.onItemDelete(props.data.id);
    }
    
    return (
        <React.Fragment>
            <li  
                className={`${styles['note-list-item']} ${(props.isActive) ? styles['active'] : ''}`}>
                <div className={`${styles['icon-container']}`} onClick={deleteNote}>
                    <TrashCan fill='purple' className={styles['trash-can-svg']}/>
                </div>
                <div className={styles.title} onClick={changeNote}>{props.data.title}</div>
            </li>
        </React.Fragment>
    );
};

export default NotesListItem;
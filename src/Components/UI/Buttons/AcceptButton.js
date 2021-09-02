import React from 'react';
import styles from './AcceptButton.module.css';

const AcceptButton = (props) => {
    const sendClick = (e) => {
        e.preventDefault();
        props.onButtonClick();
    }
    return (
        <button onClick={sendClick} type="submit" className={styles['accept-button']}>{props.text}</button>
    );
};

export default AcceptButton;
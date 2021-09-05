import React from 'react';
import styles from './CancelButton.module.css';

const CancelButton = (props) => {
    const sendClick = () => {
        props.onButtonClick();
    }
    return (
        <button onClick={sendClick} className={styles['cancel-button']}>{props.text}</button>
    );
};

export default CancelButton;
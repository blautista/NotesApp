import React from 'react';
import styles from './CloseButton.module.css';

const CloseButton = (props) => {
    function sendClick (e) {
        props.onButtonClick();
    }
    return (
        <button onClick={sendClick} type="button" className={styles['close-button']}>×</button>
    );
};

export default CloseButton;
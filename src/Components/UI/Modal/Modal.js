import React from 'react';
import styles from './Modal.module.css';
import CloseButton from '../Buttons/CloseButton';
const Modal = (props) => {

    function sendExitClick (e) {
        props.onExitButtonClick();
    }

    return (
        <div className={styles.modal}>
            <div className={styles['modal-inner']}>
                <CloseButton onButtonClick={sendExitClick}/>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
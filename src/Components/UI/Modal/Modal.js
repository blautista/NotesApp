import React from 'react';
import styles from './Modal.module.css';
import CloseButton from '../Buttons/CloseButton';
import ReactDOM from 'react-dom';

const Modal = (props) => {

    function sendExitClick (e) {
        props.onExitButtonClick();
    }

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div onClick={sendExitClick} className={styles.modal}>
                    <div className={styles['modal-inner']}>
                        <CloseButton onButtonClick={sendExitClick}/>
                        {props.children}
                    </div>
                </div>,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    );
};

export default Modal;
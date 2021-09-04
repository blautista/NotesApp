import React from 'react';
import Modal from '../UI/Modal/Modal'; 
import styles from './LoginForm.module.css';
import AcceptButton from '../UI/Buttons/AcceptButton';
import CancelButton from '../UI/Buttons/CancelButton';
const LoginForm = (props) => {
    function removeLoginModal () {
        props.onClosed(false);
    }
    return (
        <Modal onExitButtonClick={removeLoginModal}>
            <h2 className={styles['title']}>Join Now!</h2>
            <div className={styles['login-container']}>
                <form className={styles['form-container']}>               
                    <label className={styles['label']} for="username"><h3>Username</h3></label>
                    <input name="username" className={styles['text-input']}type='text'></input>
                    <label className={styles['label']} for="pass"><h3>Password</h3></label>
                    <input name="pass" className={styles['text-input']} type='password'></input>
                    <label className={styles['label']} for="pass2"><h3>Repeat Password</h3></label>
                    <input name="pass2" className={styles['text-input']} type='password'></input>   
                    <div className={styles['form-buttons-container']}>
                        <AcceptButton onButtonClick={removeLoginModal} text="Submit"></AcceptButton>
                        <CancelButton onButtonClick={removeLoginModal}text="Cancel"></CancelButton>
                    </div>
                </form>
            </div>
            <footer>
                <p>Don't have an account? <a href="./">Register here</a></p>
                <p>Forgot your password? <a href="./">Click Here</a></p>
            </footer>
        </Modal>
    );
};

export default LoginForm;
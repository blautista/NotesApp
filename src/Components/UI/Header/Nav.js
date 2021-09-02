import React, {useState} from 'react';
import styles from './Nav.module.css';
import LoginForm from '../../Login/LoginForm';

const Nav = () => {
    const [isModalActive, setModalActiveStatus] = useState(false);
    let content;
    function openLogin () {
        setModalActiveStatus(true);
    }

    function closeLogin () {
        setModalActiveStatus(false);
    }

    if (isModalActive) {
        content = <LoginForm onClosed={closeLogin}></LoginForm>
    } else {
        content = null;
    }
    
    return (
        <div>
            {content}
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>Login</li>
                <li onClick={openLogin} className={styles.li}>Signup</li>
            </ul>
        </nav>
        </div>      
    );
};

export default Nav;
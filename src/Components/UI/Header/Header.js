import React from 'react';
import styles from './Header.module.css';

import Logo from './Logo.js';
import Nav from './Nav.js';

const Header = () => {
    return (
        <header className={styles['header']}>
            <Logo></Logo>
            <Nav></Nav>
        </header>
    );
};

export default Header;
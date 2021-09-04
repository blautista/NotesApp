import React from 'react';
import styles from './Header.module.css';

import Logo from './Logo.js';
import Nav from './Nav.js';

const Header = () => {
    const showSidebar = () => {

    }
    
    return (
        <header className={styles['header']}>
            <Logo onShowSidebar={showSidebar}></Logo>
            <Nav></Nav>
        </header>
    );
};

export default Header;
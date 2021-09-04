import React from 'react';
import styles from'./Logo.module.css';

const Logo = (props) => {

    const handleLogoClick = () => {
        if (window.innerWidth <= 768 ) {
            console.log('clicked on ham menu');
            props.onShowSidebar();
        }
    }

    return (
        <div onClick={handleLogoClick} className={styles['logo']}>
        </div>
    );
};

export default Logo;
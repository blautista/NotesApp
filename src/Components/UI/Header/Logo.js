import React from 'react';
import styles from'./Logo.module.css';
import {ReactComponent as ReactLogo} from './logo.svg';

const Logo = () => {
    return (
        <div className={styles['logo']}>
            <ReactLogo></ReactLogo>
        </div>
    );
};

export default Logo;
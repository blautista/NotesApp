import React from 'react';
import styles from './SvgButton.module.css';

const SvgButton = (props) => {
    return (
        <div className={styles['svg-button']}>
            {props.children}
        </div>
    );
};

export default SvgButton;
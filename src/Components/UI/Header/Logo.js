import React, {useRef} from 'react';
import styles from'./Logo.module.css';
import hamburgerSVG from './hamburger.svg';
import logoSVG from './logo.svg';

const Logo = (props) => {
    const logoRef = useRef();
    const hamburgerSVG = './hamburger.svg';
    const logoSVG = './logo.svg';

    const handleLogoClick = () => {
        if (logoRef.current.style.backgroundURL === hamburgerSVG) {
            props.onShowSidebar();
        }
    }

    return (
        <div ref={logoRef} onClick={handleLogoClick} className={styles['logo']}>
            {/* <ReactLogo></ReactLogo> */}
        </div>
    );
};

export default Logo;
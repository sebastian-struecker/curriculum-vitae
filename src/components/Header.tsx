import React from 'react';
import styles from './Header.module.scss';
import {SocialIcon} from "react-social-icons";

type Input = {
    picture: any
}

function Header({picture}: Input) {
    return (<header>
        <div className={styles.header}>
            <div className={styles.header__text}>
                <div className={styles.header__text__greetings}>
                    Hello
                </div>
                <div className={styles.header__text__description}>
                    I am Sebastian Strücker
                </div>
                <div className={styles.header__text__links}>
                    <div className={styles.header__text__links__link}>
                        <SocialIcon bgColor="#846855" url="https://www.linkedin.com/in/sebastian-struecker/"/>
                    </div>
                    <div className={styles.header__text__links__link}>
                        <SocialIcon bgColor="#846855" url="https://github.com/sebastian-struecker/"/>
                    </div>
                </div>
            </div>
            <img className={styles.header__picture} src={picture} alt="myself"/>
        </div>
    </header>);
}

export default Header;

import React from 'react';
import styles from './Section.module.scss';

type Props = {
    title: string;
    children: any;
}

function Section({title, children}: Props) {
    return (<div className={styles.section}>
        <div className={styles.section__title}>
            <h3 className={styles.section__title__text}>{title}</h3>
        </div>
        <div className={styles.section__content}>
            {children}
        </div>
    </div>);
}

export default Section;

import React from 'react';
import styles from './Skills.module.scss';

export type Props = {
    languages: string[]; frameworks: string[]; technologies: string[]; methods: string[];
}

function Skills({languages, frameworks, technologies, methods}: Props) {

    const generateCategory = (title: string, skills: string[]) => {
        return (<div className={styles.skills__category}>
            <div className={styles.skills__category__title}>{title}</div>
            <div className={styles.skills__category__skills}>
                {skills.map(skill => {
                    return (<div key={skill} className={styles.skills__category__skills__skill}>{skill}</div>);
                })}
            </div>
        </div>);
    }

    return (<div className={styles.skills}>
        {generateCategory('Languages', languages)}
        {generateCategory('Frameworks', frameworks)}
        {generateCategory('Technologies', technologies)}
        {generateCategory('Methods', methods)}
    </div>);
}

export default Skills;

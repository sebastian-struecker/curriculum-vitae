import React from 'react';
import styles from './Skills.module.scss';

export type SkillsInput = {
    languages: string[]; frameworks: string[]; technologies: string[]; methods: string[];
}

function Skills(input: SkillsInput) {

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
        {generateCategory('Languages', input.languages)}
        {generateCategory('Frameworks', input.frameworks)}
        {generateCategory('Technologies', input.technologies)}
        {generateCategory('Methods', input.methods)}
    </div>);
}

export default Skills;

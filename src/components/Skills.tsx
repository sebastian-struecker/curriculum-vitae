import React from 'react';
import styles from './Skills.module.scss';

export type SkillsInput = {
    languages: string[];
    frameworks: string[];
    technologies: string[];
    methods: string[];
}

function Skills(input: SkillsInput) {

    const generateCategory = (title: string, skills: string[]) => {
        return (<div className={styles.skills__content__category}>
            <div className={styles.skills__content__category__title}>{title}</div>
            <div className={styles.skills__content__category__skills}>
                {skills.map(skill => {
                    return (<div key={skill} className={styles.skills__content__category__skills__skill}>{skill}</div>);
                })}
            </div>
        </div>);
    }

    return (<div className={styles.skills}>
        <h3 className={styles.skills__title}>Skills</h3>
        <div className={styles.skills__content}>
            {generateCategory('Languages', input.languages)}
            {generateCategory('Frameworks', input.frameworks)}
            {generateCategory('Technologies', input.technologies)}
            {generateCategory('Methods', input.methods)}
        </div>
    </div>);
}

export default Skills;

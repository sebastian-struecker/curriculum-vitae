import React from 'react';
import styles from './Projects.module.scss';

export type Project = {
    title: string; description: string; skills: string[]; position: Position; time: string;
}

export type Position = {
    title: string; company: Company;
}

export type Company = {
    name: string; url: string;
}

export type ProjectsInput = {
    projectList: Project[];
}

function Projects(input: ProjectsInput) {
    return (<div className={styles.projects}>
        <h3 className={styles.projects__title}>Projects</h3>
        <div className={styles.projects__content}>
            <div className={styles.jobs}>
                {input.projectList.map(project => {
                    return (<div key={project.title} className={styles.project}>
                        <div className={styles.project__title}>
                            <div className={styles.project__title__title}>
                                {project.title}
                            </div>
                            <div className={styles.project__title__time}>
                                {project.time}
                            </div>
                        </div>
                        <div className={styles.project__position}>
                            <div className={styles.project__position__title}>{project.position.title}</div>
                            <div className={styles.project__position__company}>
                                <a href={project.position.company.url} target="_blank"
                                   rel="noreferrer">{project.position.company.name}</a>
                            </div>
                        </div>
                        <div>
                            {project.description.split('\\\\n').map((line, index) => (<div key={index}>
                                {line}
                                <br/>
                            </div>))}
                        </div>
                        <div className={styles.project__skills}>
                            {project.skills.map(skill => {
                                return (<div key={skill} className={styles.project__skills__skill}>
                                    {skill}
                                </div>);
                            })}
                        </div>
                    </div>);
                })}
            </div>
        </div>
    </div>);
}

export default Projects;

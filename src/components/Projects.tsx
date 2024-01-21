import React from 'react';
import styles from './Projects.module.scss';
import {FaArrowUpRightFromSquare} from "react-icons/fa6";

export type Project = {
    title: string; description?: string; skills: string[]; position: Position; time: string;
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
        {input.projectList.map(project => {
            return (<div key={project.title} className={styles.projects__project}>
                <div className={styles.projects__project__title}>
                    <div className={styles.projects__project__title__title}>
                        {project.title}
                    </div>
                    <div className={styles.projects__project__title__time}>
                        {project.time}
                    </div>
                </div>
                <div className={styles.projects__project__position}>
                    <div className={styles.projects__project__position__title}>{project.position.title}</div>
                    <div className={styles.projects__project__position__company}>
                        <span>{project.position.company.name}</span>
                        <a className={styles.projects__project__position__company__link}
                           href={project.position.company.url}
                           target="_blank"
                           rel="noreferrer"><FaArrowUpRightFromSquare/></a>
                    </div>
                </div>
                {project.description && (<div className={styles.projects__project__description}>
                    {project.description.split('\\\\n').map((line, index) => (<div key={index}>
                        {line}
                        <br/>
                    </div>))}
                </div>)}
                <div className={styles.projects__project__skills}>
                    {project.skills.map(skill => {
                        return (<div key={skill} className={styles.projects__project__skills__skill}>
                            {skill}
                        </div>);
                    })}
                </div>
            </div>);
        })}
    </div>);
}

export default Projects;

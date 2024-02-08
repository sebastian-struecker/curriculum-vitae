import React from 'react';
import styles from './Projects.module.scss';
import {Project} from "../models/project";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export type Props = {
    projects: Project[];
}

function Projects({projects}: Props) {
    return (<div className={styles.projects}>
        {projects.map(project => {
            return (<div key={project.title} className={styles.projects__project}>
                <div className={styles.projects__project__title}>
                    {project.title}
                </div>
                {project.description && (<div>
                    <Markdown className={styles.projects__project__description} remarkPlugins={[remarkGfm]}
                              rehypePlugins={[rehypeRaw]}>{project.description}</Markdown>
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
